export interface Project {
    slug: string;
    title: string;
    date: string;
    thumbnail: string;
    description: string;
    heroVideo: string;
    longDescription: string;
    role: string;
    techStack: string[];
    githubUrl?: string;
    demoUrl?: string;
    featureDetails: {
        title: string;
        problem: string;
        solution: string;
        media: {
            type: 'image' | 'gif' | 'video';
            src: string;
        };
        codeSnippet?: string;
    }[];
    learnings: string;
}


export const projectsData: Project[] = [
    {
        slug: 'vr-baseball-simulation',
        title: 'VR 야구 시뮬레이션',
        date: '2025년 8월 ~ 진행 중',
        thumbnail: '/VRBaseBallThumnail.png',
        description: 'Unity와 C#으로 구현한 현실적인 물리 기반 VR 야구 게임입니다.',
        heroVideo: '/GameMainVideo.mp4',
        longDescription: "'VR 공간에서 진짜 야구를 플레이하면 재밌겠다'라는 순수한 호기심이 이 프로젝트의 시작이었습니다. 저는 플레이어가 직접 배트를 휘두르는 타격, 타구를 쫓는 AI 수비수의 움직임, 야구의 기본적인 흐름을 온전히 구현해보기로 했습니다. 이를 위해 각기 다른 물리 법칙과 로직이 필요한 투구, 타격, 수비 시스템을 유기적으로 연결하여 완전한 게임을 만드는 것에 집중했습니다.",
        role: '1인 개발 (기획, 프로그래밍, 구현)',
        techStack: ['Unity', 'C#', 'VR', 'Meta XR Toolkit',],
        githubUrl: 'https://github.com/Troutverse/Cometria',
        featureDetails: [
            {
                title: 'XR 상호작용 기반의 배트 그립 시스템',
                problem: '가상현실 속에서 플레이어가 실제처럼 자연스럽게 야구 배트를 손에 쥐고, 의도한 대로 휘두르게 하려면 어떻게 상호작용을 설계해야 할까?',
                solution: 'Unity의 Meta XR Tools이 제공하는 기능을 활용하여 구현했습니다. Bat 오브젝트에는 `Grabbable` 컴포넌트를 추가하여 잡을 수 있는 객체로 만들고, `GrabPoint` 오브젝트를 생성해 Dinstace Hand Grab Interactable 등의 컴포넌트를 추가하여 플레이어의 손이 배트 근처에 있을 때 손을 오므리면, 배트를 잡는 상호작용이 이루어집니다.',
                media: {
                    type: 'image',
                    src: '/VRGrab.png',
                },
            },
            {
                title: '트리거 기반의 타격 판정',
                problem: '배트와 공이 매우 빠르게 충돌하면 그 충돌 지점과 날아가는 방향을 어떻게 계산하는게 좋을까?',
                solution: '물리 충돌의 예측 불가능성을 피하고자 Trigger를 사용해 타격 이벤트를 감지하는 방식으로 했습니다. 아직 명확한 이유는 아니지만 사용자가 배트를 잡고 휘두를 때 순간적인 위치 정보를 반영하고 날아오는 공이 마주쳤을때 아주 미세하지만 공이 배트를 통과하는 듯한 느낌이었습니다. 그 순간 공의 충돌을 계산할 경우 이상한 방향으로 가게 되었습니다. 그래서 OnHit 스크립트에서 타격이 감지되면, 즉시 공의 기존 속도를 0으로 초기화하고 batHitPoint의 방향과 upWardAngle, hitForce 값을 조합하여 의도한 방향과 힘으로 공이 날아가도록 제어했습니다. 동시에 BallController의 hitBall 상태를 true로 변경하여, 이후 공이 페어존, 파울존 등과 상호작용할 때 \'타격된 공\'으로서 올바르게 판정되도록 상태 머신을 구현했습니다.',
                media: {
                    type: 'image',
                    src: '/OnHit.png',
                },
                codeSnippet: `
// OnHit.cs

private void OnTriggerEnter(Collider other)
{
    if (other.CompareTag("Ball") && canHit)
    {
        Rigidbody ballRigidbody = other.gameObject.GetComponent<Rigidbody>();
        if (ballRigidbody != null)
        {
            canHit = false;

            // 배트의 특정 지점(batHitPoint)과 위쪽 각도(upWardAngle)를 조합해 타격 방향을 계산
            Vector3 hitDirection = (batHitPoint.forward + Vector3.up * Mathf.Tan(upWardAngle * Mathf.Deg2Rad)).normalized;

            // 공의 기존 속도를 완전히 초기화하여 일관된 결과를 보장
            ballRigidbody.linearVelocity = Vector3.zero;
            ballRigidbody.angularVelocity = Vector3.zero;

            // 기획된 힘과 방향으로 새로운 속도를 적용
            Vector3 targetVelocity = hitDirection * hitForce;
            ballRigidbody.linearVelocity = targetVelocity;

            // 다른 매니저들에게 타격이 발생했음을 알림
            if (DefenseManager.instance != null) DefenseManager.instance.BatterHit(ballRigidbody);
            
            BallController ballController = other.gameObject.GetComponent<BallController>();
            if (ballController != null) ballController.HitByBat();
            
            StartCoroutine(ResetCanHit());
        }
    }
}

// BallController.cs

using UnityEngine;

public class BallController : MonoBehaviour
{
    private bool hitBall = false;
    private bool nohit = false;
    private bool onhit = false;

    // ZoneLayers
    private int homeRunZoneLayer;
    private int fairZoneLayer;
    private int foulZoneLayer;
    private int strikeZoneLayer;
    private int ballZoneLayer;

    private void Awake()
    {
        homeRunZoneLayer = LayerMask.NameToLayer("HomeRunZone");
        fairZoneLayer = LayerMask.NameToLayer("FairZone");
        foulZoneLayer = LayerMask.NameToLayer("FoulZone");
        strikeZoneLayer = LayerMask.NameToLayer("StrikeZone");
        ballZoneLayer = LayerMask.NameToLayer("BallZone");
    }

    private void OnTriggerEnter(Collider other)
    {
        int otherLayer = other.gameObject.layer;

        if (hitBall)
        {
            if (onhit) return;
            ScoreManager.instance.DisplayMessage("쳤습니다 !");
            if (otherLayer == homeRunZoneLayer)
            {
                ScoreManager.instance.ProcessHomeRun();
                onhit = true;
            }
            else if (otherLayer == fairZoneLayer)
            {
                ScoreManager.instance.ProcessHit();
                onhit = true;
            }
            else if (otherLayer == foulZoneLayer)
            {
                ScoreManager.instance.ProcessFoul();
                onhit = true;
            }
        }
        else
        {
            if (nohit) return;
            nohit = true;
            if (otherLayer == strikeZoneLayer)
            {
                gameObject.SetActive(false);
                ScoreManager.instance.PitchJudged(true);
            }
            else if (otherLayer == ballZoneLayer)
            {
                gameObject.SetActive(false);
                ScoreManager.instance.PitchJudged(false);
            }
        }
    }

    public void HitByBat()
    {
        hitBall = true;
    }

    public void ResetHitBall()
    {
        hitBall = false;
        nohit = false;
        onhit = false;
    }
}

    `
            },
            {
                title: '물리 공식 기반의 동적 투구 시스템',
                problem: '매번 다른 위치로 공을 던지면서도, 플레이어가 칠 수 있도록 일정한 시간 안에 스트라이크, 볼 존에 도달하는 현실적인 투구 시스템을 어떻게 만들 것인가?',
                solution: '투수의 공 던지는 위치와 목표 지점을 기반으로 포물선 운동 공식을 역산하여 필요한 초기 속도를 계산하도록 했습니다. 정해진 시간내에 공이 목표 지점에 도달하도록 수평 및 수직 속도를 계산하여 볼에 적용함으로써, 매번 궤적이 달라지는 동적인 투구를 구현했습니다.',
                media: {
                    type: 'gif',
                    src: '/BallThrow.gif',
                },
                codeSnippet: `
// BallThrower.cs

using UnityEngine;
using System.Collections;

public class BallThrower : MonoBehaviour
{
    public GameObject ballObject;
    public Transform ballSpawnPosition;
    public Collider targetZoneCollider;

    public float throwtime = 2.0f;

    private Animator _pitcherAnimator;
    private Rigidbody _ballRigidbody;
    private BallController _ballController;

    private int countdownSeconds = 3;

    private void Awake()
    {
        _pitcherAnimator = GetComponent<Animator>();
        if (ballObject != null)
        {
            _ballRigidbody = ballObject.GetComponent<Rigidbody>();
            _ballController = ballObject.GetComponent<BallController>();

            ballObject.SetActive(false);
        }
    }

    // 게임 화면에 있는 공 던지기 버튼을 누르면 실행 됩니다.
    public void StartPitching()
    {
        StartCoroutine(PitchingCoroutine());
    }

    private IEnumerator PitchingCoroutine()
    {
        for (int i = countdownSeconds; i > 0; i--)
        {
            ScoreManager.instance.DisplayMessage(i.ToString());
            yield return new WaitForSeconds(1.0f);
        }

        if (_pitcherAnimator != null)
        {
            _pitcherAnimator.SetTrigger("Pitching");
        }
        ScoreManager.instance.DisplayMessage("");
    }

    // ThrowBall() Pitcher Object Animation에 추가하여 실행합니다
    public void ThrowBall()
    {
        // 던지기 전에 볼의 위치와 회전 등 모두 기본 값으로 되돌립니다.
        if (_ballRigidbody == null || _ballController == null || targetZoneCollider == null) return;

        Bounds targetBounds = targetZoneCollider.bounds;
        float randomX = Random.Range(targetBounds.min.x, targetBounds.max.x);
        float randomY = Random.Range(targetBounds.min.y, targetBounds.max.y);
        Vector3 randomTargetPosition = new Vector3(randomX, randomY, targetBounds.center.z);

        _ballController.ResetHitBall();
        _ballRigidbody.linearVelocity = Vector3.zero;
        _ballRigidbody.angularVelocity = Vector3.zero;

        ballObject.transform.position = ballSpawnPosition.position;
        ballObject.transform.rotation = ballSpawnPosition.rotation;
        ballObject.SetActive(true);
        ballObject.transform.parent = null;

        // 공의 속도를 계산하여 반영합니다.
        Vector3 initialVelocity = CalculateLaunchVelocity(randomTargetPosition);

        _ballRigidbody.linearVelocity = initialVelocity;
    }

    private Vector3 CalculateLaunchVelocity(Vector3 targetPosition)
    {
        Vector3 startPoint = ballSpawnPosition.position;
        Vector3 endPoint = targetPosition;

        Vector3 displacement = endPoint - startPoint;
        // 공이 도달하는 시간을 설정하여 일정한 시간에 도착하도록 합니다.
        Vector3 horizontalVelocity = new Vector3(displacement.x, 0, displacement.z) / throwtime;
        float verticalVelocityY = (displacement.y - 0.5f * Physics.gravity.y * throwtime * throwtime) / throwtime;
        Vector3 verticalVelocity = new Vector3(0, verticalVelocityY, 0);
        
        return horizontalVelocity + verticalVelocity;
    }
}
                
`
            },
            {
                title: '싱글톤 기반 게임 상태 및 UI 관리',
                problem: '스트라이크, 볼, 아웃 카운트와 같은 게임 데이터를 접근하고 변경해야 할 때, 어떻게 데이터를 효율적으로 관리하고 UI에 안정적으로 반영할 것인가?',
                solution: '싱글톤 패턴을 적용한 ScoreManager를 구현하여 게임의 모든 상태를 중앙에서 관리하도록 설계했습니다. 공의 상태를 판정하는 BallController 등 다른 스크립트는 ScoreManager.instance를 통해 \'ProcessFoul()\', \'PitchJudged()\'와 같은 메소드를 호출하기만 하면 됩니다. 그러면 ScoreManager가 내부적으로 카운트를 변경하고, BSO_Display와 같은 UI 스크립트에 직접 업데이트를 지시합니다.',
                media: {
                    type: 'gif',
                    src: '/StrikeGIF.gif',
                },
                codeSnippet: `
// ScoreManager.cs

using UnityEngine;
using TMPro;
using System.Collections;

public class ScoreManager : MonoBehaviour
{
    // Singleton
    public static ScoreManager instance;

    public BSO_Display bso_Display;
    public TextMeshProUGUI ballStateText;

    // Game Count
    private int strikeCount = 0;
    private int ballCount = 0;
    private int outCount = 0;

    private int currentRound = 1;

    private void Awake()
    {
        if (instance == null) { instance = this; }
        if (bso_Display != null) bso_Display.UpdateDisplay(strikeCount, ballCount, outCount);
        if (ballStateText != null) ballStateText.text = "";
    }

    public void DisplayMessage(string message)
    {
        if (ballStateText == null) return;
        ballStateText.text = message;
    }

    public void ProcessHit()
    {
        DisplayMessage("안타 입니다 !");
        ResetBatterCount();
    }

    public void ProcessFoul()
    {
        DisplayMessage("파울 입니다 !");
        if (strikeCount < 2)
        {
            strikeCount++;
        }
        if (bso_Display != null) bso_Display.UpdateDisplay(strikeCount, ballCount, outCount);
    }

    public void ProcessHomeRun()
    {
        DisplayMessage("홈런 입니다 !");
        ResetBatterCount();
    }

    public void PitchJudged(bool isStrike)
    {
        if (isStrike)
        {
            strikeCount++;
        }
        else
        {
            ballCount++;
        }
        string message = isStrike ? "스트라이크 !" : "볼 !";
        DisplayMessage(message);
        CheckCount();
        if (bso_Display != null) bso_Display.UpdateDisplay(strikeCount, ballCount, outCount);
    }

    private void CheckCount()
    {
        if (strikeCount >= 3)
        {
            outCount++;
            ResetBatterCount(); 
        }
        else if (ballCount >= 4)
        {
            ResetBatterCount(); 
        }
        else if (outCount > 2)
        {
            ResetBatterCount();
        }
    }

    private void ResetBatterCount()
    {
        strikeCount = 0;
        ballCount = 0;
    }
}

                `
            },
            {
                title: '타구 궤적 예측 및 자동 수비 시스템',
                problem: '수비수가 타격된 공을 실시간으로 쫓아가게 만들면 반응이 늦어 비현실적인 수비이다, 어떻게 하면 미리 낙구 지점을 예측하고 수비를 구현할 수 있을까?',
                solution: '타격이 발생하는 즉시, DefenseManager가 공의 초기 속도를 바탕으로 BallTrajectoryPrediction 정적 클래스를 호출하여 포물선 운동 방정식으로 최종 낙구 지점을 미리 계산합니다. 그 후, 모든 수비수 중 예측된 지점과 가장 가까운 대상에게 NavMeshAgent를 이용해 이동 명령을 내립니다. 수비수는 공이 땅에 닿기 전에 가장 효율적인 경로로 움직여 대기하는 수비 동작을 수행합니다.',
                media: {
                    type: 'gif',
                    src: '/PredicBall.gif',
                },
                codeSnippet: `
using System.Collections;
using System.Collections.Generic;
using UnityEngine;


public class DefenseManager : MonoBehaviour
{
    public static DefenseManager instance;
    private List<DefenderController> defenderList;
    private int fairZoneLayer;


    private void Awake()
    {
        if (instance == null) instance = this;
        else Destroy(gameObject);

        fairZoneLayer = LayerMask.NameToLayer("FairZone");

        GameObject[] defenders = GameObject.FindGameObjectsWithTag("Defender");
        defenderList = new List<DefenderController>();

        foreach (var defender in defenders)
        {
            DefenderController _defender = defender.GetComponent<DefenderController>();
            if (_defender != null) defenderList.Add(_defender);
        }
    }

    public void BatterHit(Rigidbody ballRigidbody)
    {
        StartCoroutine(PredictDrawTrajectory(ballRigidbody));
    }

    private IEnumerator PredictDrawTrajectory(Rigidbody ballRigidbody)
    {
        yield return new WaitForFixedUpdate();

        Vector3 startPoint = ballRigidbody.position;
        Vector3 initialVelocity = ballRigidbody.linearVelocity;

        Vector3[] trajectoryPoints = BallTrajectoryPrediction.GetTrajectoryPoints(startPoint, initialVelocity);

        if (trajectoryPoints.Length > 0)
        {
            Color linecolor = Color.yellow;
            for (int i = 0; i < trajectoryPoints.Length - 1; i++)
            {
                Debug.DrawLine(trajectoryPoints[i], trajectoryPoints[i + 1], Color.red, 30f);
            }
            Vector3 landingPoint = trajectoryPoints[trajectoryPoints.Length - 1];
            Debug.Log($"LandingPoint : {landingPoint}");

            Ray ray = new Ray(landingPoint + Vector3.up * 100f, Vector3.down);
            if (Physics.Raycast(ray, 200f, 1 << fairZoneLayer))
            {
                FindAndCommandClosestDefender(landingPoint);
            }
            
        }
    }

    private void FindAndCommandClosestDefender(Vector3 ballPosiontion)
    {
        DefenderController closestDefender = null;
        float minSqrDistance = float.MaxValue;
        if (defenderList.Count == 0) { Debug.Log($"No defender"); }
        
        foreach (DefenderController defender in defenderList)
        {
            Debug.Log(defender.name);
            float sqrDistance = (defender.transform.position - ballPosiontion).sqrMagnitude;
            if (sqrDistance < minSqrDistance)
            {
                minSqrDistance = sqrDistance;
                closestDefender = defender;
            }
        }
        Debug.Log($"closetDefender : {closestDefender.name} Move To Ball Call {ballPosiontion}");
        closestDefender.MoveToBall(ballPosiontion);
    }
}
`
            }
        ],
        learnings: '',
    },

];