// app/projects/mesh-slicing/page.tsx
"use client";

import Link from "next/link";
import { ArrowLeft, Github } from "lucide-react";
import Image from "next/image";

// 코드 스니펫 컴포넌트
function CodeSnippet({ code, language = "csharp" }: { code: string; language?: string }) {
  return (
    <div className="my-6 rounded-lg overflow-hidden border border-gray-300">
      <div className="bg-gray-800 px-4 py-2 text-sm text-gray-300 font-mono">
        {language}
      </div>
      <pre className="bg-gray-900 p-4 overflow-x-auto">
        <code className="text-sm text-gray-100 font-mono leading-relaxed">
          {code}
        </code>
      </pre>
    </div>
  );
}

export default function MeshSlicingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 상단 네비게이션 */}
      <nav className="sticky top-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-900 font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            홈으로
          </Link>
        </div>
      </nav>

      {/* 메인 컨텐츠 */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* 타이틀 */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Mesh Slicing
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            VR 수술 시뮬레이션을 위한 실시간 메쉬 절단 알고리즘
          </p>
          <p className="text-gray-500">2025.12 | 개발 기간 3주</p>
        </header>

        {/* 영상 */}
        <section className="mb-12">
          <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden mb-4">
            <video className="w-full h-full" controls>
              <source src="/videos/MeshSlice2.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

        {/* GitHub */}
        <section className="mb-12">
          <a
            href="https://github.com/Troutverse/MeshSlicing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 font-medium"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
        </section>

        {/* 기술 스택 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">기술 스택</h2>
          <div className="flex flex-wrap gap-2">
            {["Unity", "C#", "Meta Quest", "DFS", "Computational Geometry"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm font-medium"
                >
                  {tech}
                </span>
              ),
            )}
          </div>
        </section>

        <hr className="my-12 border-gray-200" />

        {/* 프로젝트 개요 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            프로젝트 개요
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              이 프로젝트는 VR 수술 시뮬레이션에서 조직을 정밀하게 절개할 수
              있는 메쉬 절단 알고리즘을 개발하는 것이 목표였습니다. 기존의 Unity
              Asset Store에 있는 솔루션들은 과일을 자르거나 오브젝트를 파괴하는
              용도로 설계되어 있어, 수술처럼 정밀한 부분 절개가 불가능했습니다.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              수술 시뮬레이션에서는 조직을 완전히 분리하는 것이 아니라, 메쉬의
              연결 상태를 유지하면서 특정 부분만 절개할 수 있어야 합니다. 이를
              위해 기존 솔루션을 사용할 수 없었고, 직접 알고리즘을 설계하고
              구현해야 했습니다.
            </p>
          </div>
        </section>

        <hr className="my-12 border-gray-200" />

        {/* 문제 정의 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            해결해야 할 문제
          </h2>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              기존 솔루션의 한계
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Unity Asset Store에는 Easy Slice, Mesh Cutter 등 여러 메쉬 절단
              Asset이 존재합니다. 하지만 이들은 모두 "완전 절단(Complete Cut)"만
              지원합니다. 즉, 메쉬를 자르면 두 개의 독립된 오브젝트로 완전히
              분리됩니다.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>
                Easy Slice: 평면 기반 절단, 오브젝트가 두 조각으로 완전 분리
              </li>
              <li>
                Mesh Cutter: 다양한 절단 형태 지원, 하지만 역시 완전 분리만 가능
              </li>
              <li>
                부분 절개 불가능: 메쉬 연결 상태를 유지하면서 절개하는 기능 없음
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              수술 시뮬레이션의 요구사항
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              실제 수술에서는 조직을 완전히 분리하지 않고, 메스로 절개선을
              만들어 특정 부분만 열어야 하는 경우가 많습니다. 이를
              시뮬레이션하기 위해서는:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>조직을 부분적으로 절개할 수 있어야 함</li>
              <li>
                절개된 부분과 절개되지 않은 부분이 여전히 연결되어 있어야 함
              </li>
              <li>
                절개선의 형태(직선, 곡선 등)에 따라 정밀하게 절개되어야 함
              </li>
              <li>실시간으로 처리되어야 함 (VR 환경에서 90 FPS 이상 유지)</li>
            </ul>
          </div>

          <div className="bg-gray-50 border-l-4 border-yellow-500 p-6 rounded-r">
            <p className="text-gray-800 font-medium mb-2">결론</p>
            <p className="text-gray-700">
              기존 Asset들은 게임이나 파괴 효과에는 적합하지만, 수술처럼 정밀한
              절개가 필요한 시뮬레이션에는 사용할 수 없었습니다. 따라서 새로운
              알고리즘을 직접 개발해야 했습니다.
            </p>
          </div>
        </section>

        <hr className="my-12 border-gray-200" />

        {/* 개발 과정 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            개발 과정 - 4번의 시도
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            완벽한 솔루션을 찾기까지 4번의 시도와 실패를 거쳤습니다. 각 시도마다
            문제점을 파악하고 개선하는 과정을 통해 최종 솔루션에 도달했습니다.
          </p>

          {/* 시도 1 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 bg-red-100 text-red-700 rounded-full font-bold text-sm">
                1
              </span>
              <h3 className="text-xl font-bold text-gray-900">
                Ray-based Approach
              </h3>
              <span className="text-red-600 font-medium text-sm">
                실패 - 15 FPS
              </span>
            </div>

            <div className="pl-11">
              <p className="text-gray-700 mb-3 font-medium">접근 방법:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>
                  VR 컨트롤러의 위치에서 Ray를 쏴서 메쉬의 Triangle과 교차점을
                  찾음
                </li>
                <li>교차하는 Triangle들을 찾아서 해당 부분만 분리</li>
                <li>World Space에서 직접 계산 시도</li>
              </ul>

              <p className="text-gray-700 mb-3 font-medium">문제점:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>
                  <strong>좌표계 변환 오류:</strong> World Space와 Local Space를
                  혼동하여 Ray의 위치와 방향이 정확하지 않았습니다
                </li>
                <li>
                  <strong>심각한 성능 저하:</strong> 모든 Triangle에 대해 World
                  Space에서 계산하니 15 FPS로 떨어짐 (목표: 90 FPS)
                </li>
                <li>
                  <strong>부정확한 결과:</strong> 좌표 변환 문제로 인해 엉뚱한
                  위치가 절단됨
                </li>
              </ul>

              <p className="text-gray-700 mb-3 font-medium">배운 점:</p>
              <p className="text-gray-700">
                Unity에서 메쉬 데이터는 Local Space에 저장되어 있으므로, World
                Space의 Ray를 Local Space로 변환해야 정확한 계산이 가능하다는
                것을 알게 되었습니다.
              </p>
            </div>
          </div>

          {/* 시도 2 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 bg-orange-100 text-orange-700 rounded-full font-bold text-sm">
                2
              </span>
              <h3 className="text-xl font-bold text-gray-900">
                Edge-based Approach
              </h3>
              <span className="text-orange-600 font-medium text-sm">
                부분 성공 - 25 FPS
              </span>
            </div>

            <div className="pl-11">
              <p className="text-gray-700 mb-3 font-medium">접근 방법:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Triangle 대신 메쉬의 Edge(모서리)와 Ray의 교차점을 검사</li>
                <li>Local Space에서 계산하도록 개선</li>
                <li>교차된 Edge를 기준으로 메쉬 분리 시도</li>
              </ul>

              <p className="text-gray-700 mb-3 font-medium">문제점:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>
                  <strong>Edge 검출의 한계:</strong> 모든 케이스를 처리할 수
                  없었습니다 (예: Edge가 아닌 Triangle 내부를 지나가는 경우)
                </li>
                <li>
                  <strong>복잡한 예외 처리:</strong> 다양한 절단 케이스를
                  처리하기 위해 조건문이 너무 많아짐
                </li>
                <li>
                  <strong>여전히 낮은 성능:</strong> 25 FPS로 개선되었지만
                  목표인 90 FPS에는 크게 못 미침
                </li>
              </ul>

              <p className="text-gray-700 mb-3 font-medium">배운 점:</p>
              <p className="text-gray-700">
                좌표계 변환은 올바르게 했지만, Edge 기반 접근은 근본적으로
                한계가 있었습니다. 메쉬의 기본 단위는 Triangle이므로, Triangle
                기반으로 접근해야 한다는 것을 깨달았습니다.
              </p>
            </div>
          </div>

          {/* 시도 3 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 bg-yellow-100 text-yellow-700 rounded-full font-bold text-sm">
                3
              </span>
              <h3 className="text-xl font-bold text-gray-900">
                Triangle-based Approach
              </h3>
              <span className="text-yellow-600 font-medium text-sm">
                발전 - 55 FPS
              </span>
            </div>

            <div className="pl-11">
              <p className="text-gray-700 mb-3 font-medium">접근 방법:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>각 Triangle과 Ray의 교차 여부를 정확하게 검사</li>
                <li>Local Space에서 Ray-Triangle Intersection 알고리즘 적용</li>
                <li>교차된 Triangle들을 마킹</li>
              </ul>

              <p className="text-gray-700 mb-3 font-medium">개선점:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>
                  <strong>정확한 교차 검사:</strong> Möller-Trumbore 알고리즘을
                  사용하여 정확한 Ray-Triangle 교차 검사
                </li>
                <li>
                  <strong>성능 향상:</strong> 55 FPS 달성 (목표의 61% 수준)
                </li>
                <li>
                  <strong>안정적인 동작:</strong> 메쉬 변형 없이 정확한 위치에서
                  절단
                </li>
              </ul>

              <p className="text-gray-700 mb-3 font-medium">남은 문제:</p>
              <p className="text-gray-700 mb-4">
                교차된 Triangle들은 정확하게 찾았지만, 이 Triangle들이 서로
                연결되어 있는지 (같은 절개선에 속하는지) 판단할 수 없었습니다.
                100개의 Triangle이 교차되었다면, 이것이 하나의 긴 절개선인지,
                여러 개의 작은 절개선인지 알 수 없었습니다.
              </p>

              <p className="text-gray-700 mb-3 font-medium">배운 점:</p>
              <p className="text-gray-700">
                Triangle 검출은 성공했지만, "그룹화(Grouping)" 문제가
                남아있었습니다. 인접한 Triangle들을 하나의 그룹으로 묶는
                알고리즘이 필요했습니다.
              </p>
            </div>
          </div>

          {/* 시도 4 - 돌파구 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 bg-green-100 text-green-700 rounded-full font-bold text-sm">
                4
              </span>
              <h3 className="text-xl font-bold text-gray-900">
                DFS Flood-fill Algorithm
              </h3>
              <span className="text-green-600 font-medium text-sm">
                성공 - 90+ FPS
              </span>
            </div>

            <div className="pl-11">
              <p className="text-gray-700 mb-3 font-medium">핵심 아이디어:</p>
              <p className="text-gray-700 mb-4">
                교차된 Triangle들을 DFS(Depth-First Search)로 탐색하여 서로
                인접한 Triangle들을 하나의 연결된 그룹으로 묶는다.
              </p>

              <p className="text-gray-700 mb-3 font-medium">알고리즘 단계:</p>
              <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-4">
                <li>Ray와 교차하는 모든 Triangle을 찾아서 마킹</li>
                <li>
                  마킹된 Triangle 중 아직 방문하지 않은 Triangle에서 DFS 시작
                </li>
                <li>
                  현재 Triangle과 Edge를 공유하는 인접 Triangle 중 마킹된
                  Triangle을 찾음
                </li>
                <li>
                  인접 Triangle을 재귀적으로 방문하면서 같은 그룹으로 묶음
                </li>
                <li>더 이상 인접한 마킹 Triangle이 없으면 하나의 그룹 완성</li>
                <li>
                  방문하지 않은 마킹 Triangle이 있으면 2번으로 돌아가 새로운
                  그룹 생성
                </li>
              </ol>

              {/* 이미지 placeholder */}
              <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center my-4">
                <p className="text-gray-500 font-medium mb-2">📸 이미지 위치</p>
                <p className="text-sm text-gray-400">
                  /images/attempt4-success.png<br />
                  (DFS 그룹화 성공 - 완벽한 절단 결과)
                </p>
              </div>

              <p className="text-gray-700 mb-3 font-medium">결과:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>
                  <strong>완벽한 그룹화:</strong> 연결된 절개선들을 정확하게
                  하나의 그룹으로 묶음
                </li>
                <li>
                  <strong>목표 성능 달성:</strong> 90+ FPS 달성 (VR 환경에서
                  안정적)
                </li>
                <li>
                  <strong>부분 절개 지원:</strong> 메쉬 연결 상태를 유지하면서
                  절개 가능
                </li>
                <li>
                  <strong>100% 정확도:</strong> 모든 테스트 케이스에서 정확한
                  결과
                </li>
              </ul>

              <p className="text-gray-700 mb-3 font-medium">
                왜 DFS를 선택했나:
              </p>
              <p className="text-gray-700">
                BFS(Breadth-First Search)도 가능했지만, DFS가 스택 기반이라
                메모리 효율이 좋고 재귀로 구현하기 쉬웠습니다. 또한 절개선은
                보통 길고 연속적이므로 깊이 우선 탐색이 더 자연스러웠습니다.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-12 border-gray-200" />

        {/* 최종 솔루션 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">최종 솔루션</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            4번의 시도를 통해 얻은 교훈을 모두 결합하여 완성된 알고리즘입니다.
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              핵심 기술 4가지
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  1. Ray-Triangle Intersection (Möller-Trumbore)
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Möller-Trumbore 알고리즘을 사용하여 Ray와 Triangle의 교차점을
                  빠르고 정확하게 계산합니다. 이 알고리즘은 행렬 연산 없이 벡터
                  연산만으로 교차 여부를 판단할 수 있어 실시간 처리에
                  적합합니다. 교차점의 좌표뿐만 아니라 삼각형 내부의 무게중심
                  좌표(Barycentric Coordinates)도 계산할 수 있어 정확한 절단면
                  생성이 가능합니다.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  2. DFS Flood-fill 그룹화
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  교차된 Triangle들을 DFS로 탐색하여 연결된 그룹으로 묶습니다.
                  각 Triangle은 최대 3개의 인접 Triangle을 가지므로, 재귀 깊이가
                  제한적이어서 스택 오버플로우 위험이 적습니다. 방문한
                  Triangle은 HashSet에 저장하여 중복 방문을 방지하고, O(n) 시간
                  복잡도로 모든 Triangle을 그룹화할 수 있습니다.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  3. Local Space 좌표 변환
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Unity의 메쉬 데이터는 Local Space에 저장되므로, World Space의
                  Ray를 Local Space로 변환해야 정확한 계산이 가능합니다.
                  Transform.InverseTransformPoint()와
                  InverseTransformDirection()을 사용하여 Ray의 원점과 방향을
                  변환합니다. 이를 통해 오브젝트의 회전, 크기, 위치에 관계없이
                  정확한 절단이 가능합니다.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  4. Cap Mesh 생성 (Arc-Length 기반)
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  절단면에 뚜껑(Cap)을 씌워서 메쉬의 내부가 보이지 않도록
                  합니다. 절개선의 경계 정점들을 Arc-Length(호의 길이) 순서로
                  정렬한 후, Triangulation 알고리즘으로 삼각형을 생성합니다. 이
                  과정에서 Constrained Delaunay Triangulation을 사용하여
                  자연스럽고 균일한 삼각형 분포를 만들어냅니다.
                </p>
              </div>
            </div>
          </div>

          {/* 핵심 알고리즘 코드 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">핵심 알고리즘 코드</h3>
            
            <h4 className="font-semibold text-gray-900 mb-3">DFS Flood-fill 그룹화</h4>
            <CodeSnippet code={`// 교차된 Triangle들을 DFS로 그룹화
void GroupTriangles(int startTriangle, HashSet<int> visited, List<int> group)
{
    // 현재 Triangle 방문 처리
    visited.Add(startTriangle);
    group.Add(startTriangle);
    
    // 인접한 Triangle들 탐색
    foreach (int neighbor in GetNeighbors(startTriangle))
    {
        // 마킹되었고 아직 방문하지 않은 Triangle만 재귀 탐색
        if (IsMarked(neighbor) && !visited.Contains(neighbor))
        {
            GroupTriangles(neighbor, visited, group);
        }
    }
}

// 모든 그룹 생성
List<List<int>> CreateAllGroups()
{
    HashSet<int> visited = new HashSet<int>();
    List<List<int>> allGroups = new List<List<int>>();
    
    foreach (int triangle in markedTriangles)
    {
        if (!visited.Contains(triangle))
        {
            List<int> group = new List<int>();
            GroupTriangles(triangle, visited, group);
            allGroups.Add(group);
        }
    }
    
    return allGroups;
}`} />

            <h4 className="font-semibold text-gray-900 mb-3 mt-6">좌표 변환</h4>
            <CodeSnippet code={`// World Space Ray를 Local Space로 변환
public Ray WorldToLocalRay(Ray worldRay, Transform meshTransform)
{
    // Ray 원점을 Local Space로 변환
    Vector3 localOrigin = meshTransform.InverseTransformPoint(worldRay.origin);
    
    // Ray 방향을 Local Space로 변환 (크기 무시)
    Vector3 localDirection = meshTransform.InverseTransformDirection(worldRay.direction);
    
    return new Ray(localOrigin, localDirection.normalized);
}`} />
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              전체 알고리즘 흐름
            </h3>
            <ol className="list-decimal list-inside text-gray-700 space-y-3">
              <li>
                <strong>좌표 변환:</strong> World Space의 Ray를 메쉬의 Local
                Space로 변환
              </li>
              <li>
                <strong>교차 검사:</strong> 모든 Triangle에 대해 Ray-Triangle
                Intersection 수행, 교차된 Triangle 마킹
              </li>
              <li>
                <strong>그룹화:</strong> 마킹된 Triangle들을 DFS로 탐색하여
                연결된 그룹으로 분류
              </li>
              <li>
                <strong>경계 추출:</strong> 각 그룹의 경계 Edge 추출 (한쪽
                Triangle만 마킹된 Edge)
              </li>
              <li>
                <strong>Cap Mesh 생성:</strong> 경계 정점을 정렬하고
                Triangulation하여 절단면 뚜껑 생성
              </li>
              <li>
                <strong>메쉬 분리:</strong> 각 그룹을 별도의 메쉬로 분리하되,
                필요시 원본 메쉬와 연결 상태 유지
              </li>
              <li>
                <strong>물리 적용:</strong> 분리된 메쉬에 Rigidbody와 Collider
                추가하여 물리 시뮬레이션 가능하게 함
              </li>
            </ol>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r">
            <p className="text-gray-800 font-medium mb-2">핵심 성공 요인</p>
            <p className="text-gray-700 mb-3">
              Ray-Triangle Intersection과 DFS Flood-fill의 결합이
              핵심이었습니다. 정확한 교차 검사와 효율적인 그룹화를 통해 실시간
              성능(90+ FPS)과 정확도(100%)를 모두 달성할 수 있었습니다.
            </p>
            <p className="text-gray-700">
              특히 Local Space에서의 계산과 Arc-Length 기반 Cap Mesh 생성이
              시각적 품질과 안정성을 크게 향상시켰습니다.
            </p>
          </div>
        </section>

        <hr className="my-12 border-gray-200" />

        {/* 기술 상세 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            기술 상세 설명
          </h2>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Möller-Trumbore Ray-Triangle Intersection
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              이 알고리즘은 3D 그래픽스에서 가장 널리 사용되는 Ray-Triangle 교차
              검사 방법입니다. 삼각형을 두 개의 Edge 벡터로 표현하고, Ray
              방정식과 연립하여 교차점의 무게중심 좌표(u, v)와 Ray 파라미터(t)를
              동시에 계산합니다.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>장점:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>행렬 연산이 필요 없어 계산량이 적음</li>
              <li>벡터 연산만으로 교차 여부와 교차점을 동시에 얻음</li>
              <li>무게중심 좌표를 직접 계산하여 삼각형 내부 판정이 정확함</li>
              <li>
                단 한 번의 계산으로 모든 정보를 얻을 수 있어 캐싱 효율이 좋음
              </li>
            </ul>

            {/* Möller-Trumbore 코드 */}
            <h4 className="font-semibold text-gray-900 mb-3">구현 코드</h4>
            <CodeSnippet code={`// Möller-Trumbore 알고리즘 구현
bool RayIntersectsTriangle(Ray ray, Vector3 v0, Vector3 v1, Vector3 v2, out float t)
{
    const float EPSILON = 0.0000001f;
    
    // 삼각형의 두 Edge 벡터
    Vector3 edge1 = v1 - v0;
    Vector3 edge2 = v2 - v0;
    
    // Ray 방향과 edge2의 외적
    Vector3 h = Vector3.Cross(ray.direction, edge2);
    float a = Vector3.Dot(edge1, h);
    
    // Ray가 삼각형 평면과 평행한 경우
    if (a > -EPSILON && a < EPSILON)
    {
        t = 0;
        return false;
    }
    
    float f = 1.0f / a;
    Vector3 s = ray.origin - v0;
    float u = f * Vector3.Dot(s, h);
    
    // u가 범위를 벗어나면 교차하지 않음
    if (u < 0.0f || u > 1.0f)
    {
        t = 0;
        return false;
    }
    
    Vector3 q = Vector3.Cross(s, edge1);
    float v = f * Vector3.Dot(ray.direction, q);
    
    // v가 범위를 벗어나거나 u+v > 1이면 교차하지 않음
    if (v < 0.0f || u + v > 1.0f)
    {
        t = 0;
        return false;
    }
    
    // 교차점까지의 거리 계산
    t = f * Vector3.Dot(edge2, q);
    
    return t > EPSILON; // Ray가 삼각형과 교차함
}`} />
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              DFS vs BFS 선택 이유
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Triangle 그룹화를 위해 DFS와 BFS 중 DFS를 선택한 이유:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>
                <strong>메모리 효율:</strong> DFS는 스택 기반으로 현재 경로만
                메모리에 유지. BFS는 큐에 모든 레벨의 노드를 저장
              </li>
              <li>
                <strong>구현 간결성:</strong> 재귀로 구현하면 코드가 매우
                간결하고 이해하기 쉬움
              </li>
              <li>
                <strong>절개선 특성:</strong> 절개선은 보통 길고 연속적이므로
                깊이 우선 탐색이 자연스러움
              </li>
              <li>
                <strong>캐시 효율:</strong> 인접한 Triangle을 연속적으로
                방문하므로 CPU 캐시 히트율이 높음
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              좌표계 변환의 중요성
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Unity에서 메쉬의 정점 데이터는 Local Space에 저장됩니다. 예를 들어
              1m 크기의 Cube는 정점이 (-0.5, -0.5, -0.5)부터 (0.5, 0.5, 0.5)까지
              분포합니다. 하지만 VR 컨트롤러의 위치는 World Space로 제공됩니다.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              따라서 World Space의 Ray를 Local Space로 변환하지 않으면:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>오브젝트가 회전되어 있으면 Ray 방향이 틀어짐</li>
              <li>오브젝트의 크기가 조절되어 있으면 교차점 위치가 부정확함</li>
              <li>오브젝트가 이동되어 있으면 Ray가 완전히 빗나감</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Transform.InverseTransformPoint()와 InverseTransformDirection()을
              사용하면 이러한 모든 변환(이동, 회전, 크기)을 한 번에 역변환하여
              Local Space에서 정확한 계산이 가능합니다.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Cap Mesh 생성 - Arc-Length 정렬
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              절단면에 뚜껑을 씌우려면 경계 정점들을 올바른 순서로 정렬해야
              합니다. 단순히 정점의 좌표로 정렬하면 엉뚱한 순서가 나올 수
              있습니다.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Arc-Length 정렬 방법:</strong>
            </p>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-4">
              <li>절개선의 시작점을 임의로 선택</li>
              <li>현재 정점에서 가장 가까운 이웃 정점을 찾음</li>
              <li>해당 정점으로 이동하고, 이동 거리를 누적 (Arc-Length)</li>
              <li>모든 정점을 방문할 때까지 반복</li>
              <li>Arc-Length 순서대로 정렬된 정점 리스트 완성</li>
            </ol>
            <p className="text-gray-700 leading-relaxed">
              이렇게 정렬된 정점들을 Ear Clipping이나 Delaunay Triangulation으로
              삼각형화하면 자연스러운 Cap Mesh가 생성됩니다.
            </p>
          </div>
        </section>

        <hr className="my-12 border-gray-200" />

        {/* 성과 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            프로젝트 성과
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-green-600 mb-2">90+</p>
              <p className="text-gray-600">FPS</p>
              <p className="text-sm text-gray-500 mt-2">
                VR 환경에서 안정적인 프레임레이트 달성
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-green-600 mb-2">100%</p>
              <p className="text-gray-600">정확도</p>
              <p className="text-sm text-gray-500 mt-2">
                모든 테스트 케이스에서 정확한 절단
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">3주</p>
              <p className="text-gray-600">개발 기간</p>
              <p className="text-sm text-gray-500 mt-2">
                4번의 시도를 통한 최적화
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">성능 비교</h3>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                    시도
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                    방법
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                    FPS
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                    정확도
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    Attempt #1
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    Ray-based
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600 font-semibold">
                    15
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600">
                    40%
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">
                    Attempt #2
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    Edge-based
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-orange-600 font-semibold">
                    25
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-orange-600">
                    60%
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    Attempt #3
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    Triangle-based
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-yellow-600 font-semibold">
                    55
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-yellow-600">
                    85%
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-bold">
                    Final
                  </td>
                  <td className="border border-gray-300 px-4 py-3 font-bold">
                    Triangle + DFS
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-bold">
                    90+
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-bold">
                    100%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">핵심 배움</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>
                <strong>Computational Geometry의 실전 적용:</strong>{" "}
                이론적으로만 알던 알고리즘들을 실제 VR 환경에서 구현하고
                최적화하는 경험을 얻었습니다.
              </li>
              <li>
                <strong>좌표계 변환의 중요성:</strong> Unity의 Transform
                시스템을 깊이 이해하게 되었고, World Space와 Local Space의
                차이가 얼마나 중요한지 배웠습니다.
              </li>
              <li>
                <strong>알고리즘 선택이 성능에 미치는 영향:</strong> 같은 문제를
                푸는 여러 방법 중 어떤 것을 선택하느냐에 따라 성능이 6배 이상
                차이날 수 있다는 것을 경험했습니다.
              </li>
              <li>
                <strong>실패를 통한 학습:</strong> 4번의 실패가 있었기에 최종
                솔루션이 완성될 수 있었습니다. 각 실패에서 얻은 교훈이 다음
                시도의 밑거름이 되었습니다.
              </li>
            </ul>
          </div>
        </section>

        <hr className="my-12 border-gray-200" />

        {/* 향후 계획 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">향후 계획</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li>
              <strong>Soft Body Physics 통합:</strong> 현재는 Rigidbody를
              사용하지만, 실제 조직의 탄성과 변형을 시뮬레이션하기 위해 Position
              Based Dynamics를 통합할 예정입니다.
            </li>
            <li>
              <strong>실시간 조직 변형:</strong> 절개뿐만 아니라 조직을 당기거나
              늘릴 때 실시간으로 변형되는 시뮬레이션을 구현할 계획입니다.
            </li>
            <li>
              <strong>햅틱 피드백:</strong> VR 컨트롤러에 햅틱 피드백을 추가하여
              조직의 저항감과 절개 순간의 촉감을 전달할 예정입니다.
            </li>
            <li>
              <strong>다양한 절개 도구:</strong> 메스뿐만 아니라 가위, 전기
              소작기 등 다양한 수술 도구를 지원하도록 확장할 계획입니다.
            </li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-center text-gray-600">
            © 2026 Trout. Built with Next.js & TypeScript.
          </p>
        </div>
      </footer>
    </div>
  );
}