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
    keyFeatures: string[];
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
        longDescription: '게임의 핵심 요소인 물리 엔진과 AI 길찾기(NavMesh)에 대한 깊이 있는 이해와 VR 환경에서의 상호작용 구현 능력 향상을 목표로 프로젝트를 시작했습니다. 타격부터 투구, 수비까지 야구의 핵심적인 게임 루프를 직접 구현하며 문제 해결 능력을 길렀습니다.',
        role: '1인 개발 (기획, 프로그래밍, 구현)',
        techStack: ['Unity', 'C#', 'Meta XR Toolkit', 'NavMesh', 'Animator'],
        keyFeatures: [
            '물리 공식 기반 실시간 타구 궤적 예측',
            'NavMesh를 활용한 AI 수비수 자동 이동',
            'LayerMask를 이용한 정교한 페어/파울 판정',
            'VR 컨트롤러 기반의 상호작용 타격 시스템',
        ],
        githubUrl: 'https://github.com/Troutverse/Cometria',
        featureDetails: [
            {
                title: '타구 궤적 예측 및 AI 수비 연동',
                problem: '타격된 공이 어디에 떨어질지 어떻게 실시간으로 예측하고, 수비수들이 그에 맞춰 자연스럽게 반응하게 만들 것인가?',
                solution: '2차 포물선 운동 방정식을 C# 코드로 구현하여 타격 직후 공의 초기 속도를 바탕으로 최종 낙구 지점을 계산했습니다. DefenseManager는 이 예측 지점을 받아 모든 수비수 중 가장 가까운 대상에게 NavMeshAgent를 이용해 이동 명령을 내립니다.',
                image: '/VRBaseBallThumnail.png',
                codeSnippet: `ss`
            },
            {
                title: 'VR 상호작용 타격 시스템',
                problem: '물리 충돌의 예측 불가능성을 피하면서, 안정적이고 재미있는 타격 시스템을 어떻게 구현할 것인가?',
                solution: 'Rigidbody의 물리적 충돌(OnCollisionEnter) 대신 Trigger(OnTriggerEnter)를 사용하여 타격 이벤트를 감지했습니다. 이를 통해 불규칙한 물리 반발을 없애고, batHitPoint Transform의 방향과 설정된 각도(upWardAngle)를 조합하여 100% 의도한 방향으로 공을 날려 보낼 수 있었습니다.',
                image: '/VRBaseBallThumnail.png',
            }
        ],
        learnings: '이번 프로젝트를 통해 유니티의 NavMesh 시스템에 대한 깊이 있는 이해와 함께, 복잡한 게임 상태를 관리하는 매니저 클래스 설계의 중요성을 깨달았습니다. 특히 Raycast의 LayerMask와 Layer Index의 차이점을 디버깅하며 해결했던 경험은 물리 기반 상호작용 구현에 대한 자신감을 높여주었습니다.',
    },

];