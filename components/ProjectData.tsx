export interface Project {
    slug: string;
    title: string;
    date: string;
    thumbnail: string;
    description: string;
}

export const ProjectDatas: Project[] = [
    {
    slug: "VR-BaseBallSimulation",
    title: "VR 야구 시뮬레이션",
    date: "2025-08-00 ~ 2025-00-00",
    thumbnail: "/VRBaseBallThumnail.png",
    description: "Unity와 C#으로 구현한 현실적인 물리기반 야구게임 입니다."    
    },
]