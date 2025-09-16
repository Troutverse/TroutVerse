export interface Project {
    slug: string;
    title: string;
    date: string;
    thumbnail: string;
    description: string;
    heroImage: string;
    longDescription: string;
    role: string;
    techStack: string[];
    githubUrl?: string;
    demoUrl?: string;
    featureDetails: {
        title: string;
        problem: string;
        solution: string;
        image: string;
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
        heroImage: '/VRBaseBallThumnail.png',
        longDescription: 'VR 화면에서 실제로 야구를 할 수 있는 환경을 만들고 싶었습니다.',
        role: '1인 개발 (기획, 프로그래밍, 구현)',
        techStack: ['Unity', 'C#', 'NavMesh', 'Animator', 'Meta XR Toolkit',],
        githubUrl: 'https://github.com/Troutverse/Cometria',
        featureDetails: [
            {
                title: '모듈식 UI 및 게임 상태 관리',
                problem: '스트라이크, 볼, 아웃 카운트와 같은 핵심 게임 데이터를 어떻게 효율적으로 관리하고, UI에 안정적으로 반영할 것인가?',
                solution: '싱글톤(Singleton) 패턴을 적용한 ScoreManager를 구현하여 게임의 모든 상태를 중앙에서 관리하도록 설계했습니다. BSO_Display와 같은 UI 스크립트는 ScoreManager의 데이터를 직접 참조하지 않고, ScoreManager가 보내는 업데이트 이벤트에만 반응하도록 하여 UI와 게임 로직을 명확하게 분리(Decoupling)했습니다. 이 구조 덕분에 향후 UI를 교체하거나 새로운 게임 로직을 추가해도 서로에게 미치는 영향이 최소화됩니다.',
                image: '/VRBaseBallThumnail.png',
            },
            {
                title: '물리 레이어 기반의 공 상태 판정 시스템',
                problem: '날아오는 공이 스트라이크 존에 들어왔는지, 타격된 공이 파울 존에 떨어졌는지 등 다양한 상황을 어떻게 효율적으로 구분하고 처리할 것인가?',
                solution: 'BallController 내부에 \'hitBall\'이라는 bool 플래그를 두어 공의 상태(투구 상태/타격된 상태)를 관리하는 간단한 상태 머신을 구현했습니다. 또한, Unity의 물리 레이어(LayerMask)를 적극적으로 활용하여 StrikeZone, FoulZone, FairZone 등을 분리했습니다. 이를 통해 OnTriggerEnter 이벤트 발생 시, 불필요한 태그(Tag) 비교 로직 없이 레이어 값만으로 즉시 상황을 판별하여 높은 성능과 깔끔한 코드 구조를 확보했습니다.',
                image: '/VRBaseBallThumnail.png',
            },
            {
                title: '물리 공식 기반의 동적 투구 시스템',
                problem: '매번 다른 위치로, 하지만 플레이어가 칠 수 있도록 일정한 시간 안에 도착하는 현실적인 투구 시스템을 어떻게 만들 것인가?',
                solution: 'BallThrower 스크립트에서 투수의 공 던지는 위치와 목표 지점(Strike Zone 내 랜덤 위치)을 기반으로 포물선 운동 공식을 역산하여 필요한 초기 속도(Initial Velocity)를 계산하도록 했습니다. 정해진 시간(throwtime) 내에 공이 목표 지점에 도달하도록 수평 속도와 수직 속도를 계산하여 Rigidbody에 적용함으로써, 매번 궤적이 달라지는 동적인 투구를 구현하면서도 게임의 난이도를 일정하게 유지할 수 있었습니다.',
                image: '/VRBaseBallThumnail.png',
            },
            {
                title: 'VR 상호작용 타격 시스템',
                problem: '물리 충돌의 예측 불가능성을 피하면서, 안정적이고 재미있는 타격 시스템을 어떻게 구현할 것인가?',
                solution: 'Rigidbody의 물리적 충돌(OnCollisionEnter) 대신 Trigger(OnTriggerEnter)를 사용하여 타격 이벤트를 감지했습니다. 이를 통해 불규칙한 물리 반발을 없애고, OnHit 스크립트에 설정된 batHitPoint의 방향과 각도(upWardAngle)를 조합하여 100% 의도한 방향으로 공을 날려 보낼 수 있도록 제어했습니다.',
                image: '/VRBaseBallThumnail.png',
            },
            {
                title: '타구 궤적 예측 및 AI 수비 연동',
                problem: '타격된 공이 어디에 떨어질지 어떻게 실시간으로 예측하고, 수비수들이 그에 맞춰 자연스럽게 반응하게 만들 것인가?',
                solution: '2차 포물선 운동 방정식을 BallTrajectoryPrediction 클래스로 구현하여 타격 직후 공의 초기 속도를 바탕으로 낙구 지점과 전체 비행 궤적을 계산했습니다. DefenseManager는 이 예측 지점을 받아 모든 수비수 중 가장 가까운 대상에게 NavMeshAgent를 이용해 이동 명령을 내리도록 하여, 지능적인 AI 수비 시스템을 완성했습니다.',
                image: '/VRBaseBallThumnail.png',
                codeSnippet: `
// BallTrajectoryPrediction.cs

public static Vector3[] GetTrajectoryPoints(Vector3 startPoint, Vector3 initialVelocity, int steps = 100)
{
    float gravity = Physics.gravity.y;
    float flightTime = CalculateFlightTime(startPoint.y, initialVelocity.y, gravity);

    if (flightTime <= 0) return new Vector3[0];

    Vector3[] points = new Vector3[steps];
    for (int i = 0; i < steps; i++)
    {
        float t = (float)i / (steps - 1) * flightTime;
        float x = startPoint.x + initialVelocity.x * t;
        float y = startPoint.y + initialVelocity.y * t + 0.5f * gravity * t * t;
        float z = startPoint.z + initialVelocity.z * t;
        points[i] = new Vector3(x, y, z);
    }
    return points;
}
                            `
            }
        ],
        learnings: '이번 프로젝트를 통해 유니티의 NavMesh 시스템에 대한 깊이 있는 이해와 함께, 복잡한 게임 상태를 관리하는 매니저 클래스 설계의 중요성을 깨달았습니다. 특히 Raycast의 LayerMask와 Layer Index의 차이점을 디버깅하며 해결했던 경험은 물리 기반 상호작용 구현에 대한 자신감을 높여주었습니다.',
    },

];