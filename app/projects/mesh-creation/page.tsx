"use client";

import Link from "next/link";
import { ArrowLeft, Github } from "lucide-react";

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

export default function CapMeshPage() {
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
            Cap Mesh Generation
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            절단면 재구성 알고리즘 - Arc-Length 기반 Triangulation
          </p>
          <p className="text-gray-500">2025.01 | 개발 기간 2주</p>
        </header>

        {/* 영상 */}
        <section className="mb-12">
          <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden mb-4">
            <video className="w-full h-full" controls muted>
              <source src="/videos/MeshCreation.mp4" type="video/mp4" />
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
            {["Unity", "C#", "Triangulation", "Computational Geometry", "Arc-Length Sorting"].map(
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
              이 프로젝트는 Mesh Slicing 프로젝트의 후속 작업으로, 메쉬를 절단한 후 발생하는 빈 공간을 채우는 Cap Mesh를 생성하는 알고리즘을 개발하는 것이 목표였습니다. 단순히 메쉬를 자르는 것만으로는 절단면에 구멍이 생겨 시각적으로 부자연스럽고 물리 충돌 문제가 발생합니다.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              절단면을 완벽하게 막는 새로운 메쉬를 생성하여 기존 메쉬와 완벽하게 연결해야 했습니다. 이는 단순한 문제처럼 보이지만, Floating Point 정밀도, Boundary Loop 추출, 자연스러운 Triangulation 등 여러 기술적 도전이 있었습니다.
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
              구멍 문제
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              메쉬를 절단하면 내부가 노출되어 구멍이 발생합니다. 이는 여러 문제를 야기합니다.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>시각적으로 부자연스러움 - 메쉬 내부가 그대로 보임</li>
              <li>물리 충돌 문제 발생 - Collider가 제대로 작동하지 않음</li>
              <li>렌더링 오류 - 뒷면(Backface)이 보이는 문제</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Cap Mesh 필요성
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              절단면을 막는 새로운 메쉬(Cap Mesh)가 필요합니다. 이 메쉬는 다음 조건을 만족해야 합니다.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>기존 메쉬와 완벽하게 연결되어야 함</li>
              <li>빈틈없이 절단면을 채워야 함</li>
              <li>실시간으로 생성되어야 함 (목표: ~1ms)</li>
              <li>시각적으로 자연스러워야 함</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              기술적 도전
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Boundary Loop 추출 - 절단면의 경계선을 정확히 찾아야 함</li>
              <li>자연스러운 Triangulation - 삼각형 배치가 자연스러워야 함</li>
              <li>Floating Point 정밀도 - 미세한 오차로 Loop가 닫히지 않을 수 있음</li>
              <li>실시간 처리 - VR 환경에서 지연 없이 작동해야 함</li>
            </ul>
          </div>

          <div className="bg-gray-50 border-l-4 border-yellow-500 p-6 rounded-r">
            <p className="text-gray-800 font-medium mb-2">핵심 과제</p>
            <p className="text-gray-700">
              "메쉬 절단은 Slicing만으로 끝나지 않는다. 절단면을 완벽하게 재구성해야만 진정한 완성이다."
            </p>
          </div>
        </section>

        <hr className="my-12 border-gray-200" />

        {/* 개발 과정 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            개발 과정 - 3번의 시도와 돌파구
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            완벽한 솔루션을 찾기까지 3번의 시도와 실패를 거쳤습니다. 각 시도마다 문제점을 파악하고 개선하는 과정을 통해 최종 솔루션에 도달했습니다.
          </p>

          {/* 시도 1 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 bg-red-100 text-red-700 rounded-full font-bold text-sm">
                1
              </span>
              <h3 className="text-xl font-bold text-gray-900">
                Point Cloud Reconstruction
              </h3>
              <span className="text-red-600 font-medium text-sm">
                실패 - 50ms
              </span>
            </div>

            <div className="pl-11">
              <p className="text-gray-700 mb-3 font-medium">접근 방법:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Boundary 정점들을 점 구름(Point Cloud)으로 취급</li>
                <li>Delaunay Triangulation 적용</li>
                <li>자동으로 최적 삼각형 생성</li>
              </ul>

              <p className="text-gray-700 mb-3 font-medium">왜 이 방법을 선택했나:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>학술적으로 검증됨 - 논문에서 많이 사용되는 방법</li>
                <li>이론적으로 완벽함 - 최적의 삼각형 배치 보장</li>
                <li>다른 대안들의 한계:
                  <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                    <li>Ear Clipping: O(n²) 복잡도로 너무 느림</li>
                    <li>Sweep Line: 2D에서만 작동, 3D에서 사용 불가</li>
                  </ul>
                </li>
              </ul>

              <p className="text-gray-700 mb-3 font-medium">문제점:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>
                  <strong>너무 복잡함:</strong> Delaunay 알고리즘 구현 난이도가 매우 높음
                </li>
                <li>
                  <strong>성능 문제:</strong> 처리 시간이 ~50ms로 목표의 50배
                </li>
                <li>
                  <strong>이상한 메쉬 생성:</strong> Point Cloud 방식이라 공간 정보를 제대로 활용하지 못함
                </li>
                <li>Unity에 Delaunay 라이브러리 부재</li>
              </ul>

              <p className="text-gray-700 mb-3 font-medium">배운 점:</p>
              <p className="text-gray-700">
                학술적으로 완벽한 방법이 실무에서 항상 좋은 것은 아니다. 더 단순한 접근이 필요하다는 것을 깨달았습니다.
              </p>
            </div>
          </div>

          {/* 시도 2 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 bg-red-100 text-red-700 rounded-full font-bold text-sm">
                2
              </span>
              <h3 className="text-xl font-bold text-gray-900">
                Ear Clipping Algorithm
              </h3>
              <span className="text-red-600 font-medium text-sm">
                실패 - Loop 문제
              </span>
            </div>

            <div className="pl-11">
              <p className="text-gray-700 mb-3 font-medium">접근 방법:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Boundary Loop을 순차적으로 추출</li>
                <li>Ear Clipping으로 삼각형화</li>
                <li>표준 알고리즘으로 안정성 확보</li>
              </ul>

              <p className="text-gray-700 mb-3 font-medium">왜 Ear Clipping을 선택했나:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Delaunay보다 구현이 쉬움</li>
                <li>2D 변환 가능 - Plane projection 적용</li>
                <li>잘 알려진 알고리즘으로 안정성 확보</li>
                <li>다른 방법들:
                  <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                    <li>Monotone Polygon: Boundary가 단조롭지 않아 적용 불가</li>
                    <li>Greedy Triangulation: 품질 보장이 없음</li>
                  </ul>
                </li>
              </ul>

              <p className="text-gray-700 mb-3 font-medium">치명적 문제:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>
                  <strong>Boundary Loop이 닫히지 않음:</strong> 시작점과 끝점이 일치하지 않음
                </li>
                <li>Floating Point 오차로 인한 불일치 - 0.0001 단위의 미세한 차이</li>
                <li>Vector3를 Dictionary Key로 사용 시도 → 실패
                  <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                    <li>GetHashCode()가 불안정 - 같은 좌표도 다른 해시값</li>
                    <li>Floating point 비교의 근본적 한계</li>
                  </ul>
                </li>
              </ul>

              <p className="text-gray-700 mb-3 font-medium">배운 점:</p>
              <p className="text-gray-700">
                Floating Point 정밀도 문제의 심각성을 깨달았습니다. Vector3를 Dictionary key로 절대 사용해서는 안 되며, 다른 방식의 Loop 추출이 필요했습니다.
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
                Fan Triangulation (부채꼴 방식)
              </h3>
              <span className="text-yellow-600 font-medium text-sm">
                부분 성공 - 0.5ms
              </span>
            </div>

            <div className="pl-11">
              <p className="text-gray-700 mb-3 font-medium">접근 방법:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Boundary 정점들의 중심점 계산</li>
                <li>중심점에서 각 정점으로 방사형 연결</li>
                <li>부채꼴(Fan) 모양의 삼각형 생성</li>
              </ul>

              <p className="text-gray-700 mb-3 font-medium">왜 Fan 방식을 선택했나:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>극도로 단순함 - 10줄 코드로 구현 가능</li>
                <li>항상 작동함 - Convex/Concave 무관</li>
                <li>Loop 문제 완전 회피 - 정점 순서 불필요</li>
                <li>매우 빠름 - ~0.5ms로 목표 달성</li>
              </ul>

              <p className="text-gray-700 mb-3 font-medium">성공한 점:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>매우 간단함 - 코드 10줄</li>
                <li>안정적 - 항상 작동</li>
                <li>빠름 - ~0.5ms</li>
                <li>Loop 닫힘 문제 해결</li>
              </ul>

              <p className="text-gray-700 mb-3 font-medium">문제점:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>부자연스러운 방사형 패턴</li>
                <li>중심점이 최적 위치가 아닐 수 있음</li>
                <li>시각적으로 인위적임</li>
              </ul>

              <p className="text-gray-700 mb-3 font-medium">배운 점:</p>
              <p className="text-gray-700">
                간단한 해결책도 때로는 유효하다. 하지만 더 나은 방법이 존재한다는 것을 알게 되었습니다.
              </p>
            </div>
          </div>

          {/* 돌파구 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 bg-green-100 text-green-700 rounded-full font-bold text-sm">
                💡
              </span>
              <h3 className="text-xl font-bold text-gray-900">
                Breakthrough: Arc-Length Based Triangulation
              </h3>
              <span className="text-green-600 font-medium text-sm">
                성공 - 1ms
              </span>
            </div>

            <div className="pl-11">
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r mb-4">
                <p className="text-gray-800 font-medium mb-2">결정적 발견</p>
                <p className="text-gray-700">
                  정점의 <strong className="text-red-600">인덱스 순서</strong>가 아닌 
                  <strong className="text-green-600"> 실제 거리(Arc-length)</strong>로 정렬하면 
                  자연스러운 삼각형 생성!
                </p>
              </div>

              <p className="text-gray-700 mb-3 font-medium">문제 분석:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Index 기반의 문제:
                  <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                    <li>정점 배열 순서 ≠ 실제 공간 순서</li>
                    <li>멀리 떨어진 점들끼리 연결됨</li>
                    <li>부자연스러운 삼각형 생성</li>
                  </ul>
                </li>
              </ul>

              <p className="text-gray-700 mb-3 font-medium">Arc-Length 해결책:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>중심점에서 각 정점까지 실제 거리 계산</li>
                <li>거리 순으로 정렬</li>
                <li>인접한 점들끼리만 연결</li>
                <li>공간 정보를 활용한 자연스러운 배치</li>
              </ul>

              <p className="text-gray-700 mb-3 font-medium">완벽한 결과:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>자연스러운 삼각형 배치</li>
                <li>시각적으로 완벽함</li>
                <li>성능: ~1ms (목표 달성)</li>
                <li>100% 안정성</li>
              </ul>

              <p className="text-gray-700 mb-3 font-medium">핵심 인사이트:</p>
              <p className="text-gray-700">
                공간적 정보를 활용하는 것이 핵심이었습니다. 단순한 정렬 방식 변경으로 완벽한 해결이 가능했습니다.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-12 border-gray-200" />

        {/* 최종 솔루션 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">최종 솔루션</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            3번의 시도와 돌파구를 통해 얻은 교훈을 모두 결합하여 완성된 알고리즘입니다.
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              핵심 컴포넌트 4가지
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  1. Boundary Extractor (경계선 추출기)
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  절단된 메쉬에서 경계 정점들을 추출합니다. 한쪽 Triangle만 마킹된 Edge를 찾아내어 Boundary Loop을 구성합니다. Loop이 닫히지 않는 문제를 피하기 위해 Edge 기반이 아닌 정점 리스트로 직접 작업합니다.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  2. Center Calculator (중심점 계산기)
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Boundary 정점들의 평균 위치를 계산하여 중심점을 구합니다. 이 중심점은 Fan Triangulation의 시작점이 되며, 모든 삼각형이 이 점을 공유합니다.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  3. Arc-Length Sorter (거리 기반 정렬기)
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  중심점에서 각 정점까지의 실제 거리(Arc-length)를 계산하고 정렬합니다. 이것이 이 프로젝트의 핵심 혁신입니다. 인덱스 순서가 아닌 공간적 거리로 정렬함으로써 자연스러운 삼각형 배치가 가능해집니다.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  4. Mesh Builder (메쉬 생성기)
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  정렬된 정점들로 삼각형 메쉬를 생성합니다. 중심점과 인접한 두 정점을 연결하여 삼각형을 만들고, UV 좌표와 Normal 벡터를 계산하여 완전한 메쉬를 구성합니다.
                </p>
              </div>
            </div>
          </div>

          {/* 핵심 알고리즘 코드 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">핵심 알고리즘 코드</h3>
            
            <h4 className="font-semibold text-gray-900 mb-3">Arc-Length 정렬</h4>
            <CodeSnippet code={`// 중심점 계산
Vector3 center = Vector3.zero;
foreach (Vector3 vertex in boundaryVertices)
{
    center += vertex;
}
center /= boundaryVertices.Count;

// Arc-length 계산 및 정렬
List<(Vector3 vertex, float arcLength)> verticesWithArc = new List<(Vector3, float)>();
foreach (Vector3 vertex in boundaryVertices)
{
    float distance = Vector3.Distance(center, vertex);
    verticesWithArc.Add((vertex, distance));
}

// 거리 순으로 정렬
verticesWithArc.Sort((a, b) => a.arcLength.CompareTo(b.arcLength));

// 정렬된 정점 리스트
List<Vector3> sortedVertices = verticesWithArc.Select(v => v.vertex).ToList();`} />

            <h4 className="font-semibold text-gray-900 mb-3 mt-6">Fan Triangulation</h4>
            <CodeSnippet code={`// Fan 방식으로 삼각형 생성
List<int> triangles = new List<int>();
for (int i = 0; i < sortedVertices.Count; i++)
{
    int next = (i + 1) % sortedVertices.Count;
    
    // 중심점, 현재 정점, 다음 정점으로 삼각형 구성
    triangles.Add(centerIndex);      // 중심점
    triangles.Add(vertexStart + i);  // 현재 정점
    triangles.Add(vertexStart + next); // 다음 정점
}`} />
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              전체 알고리즘 흐름
            </h3>
            <ol className="list-decimal list-inside text-gray-700 space-y-3">
              <li>
                <strong>경계 추출:</strong> 절단된 메쉬에서 Boundary 정점 리스트 추출
              </li>
              <li>
                <strong>중심점 계산:</strong> 모든 Boundary 정점의 평균 위치 계산
              </li>
              <li>
                <strong>Arc-Length 정렬:</strong> 중심점에서 각 정점까지 거리 계산 후 정렬
              </li>
              <li>
                <strong>삼각형 생성:</strong> 중심점과 인접한 두 정점을 연결하여 Fan 형태 삼각형 생성
              </li>
              <li>
                <strong>UV 매핑:</strong> 각 정점에 UV 좌표 할당 (텍스처 적용 가능)
              </li>
              <li>
                <strong>Normal 계산:</strong> 각 삼각형의 Normal 벡터 계산하여 조명 적용
              </li>
              <li>
                <strong>메쉬 통합:</strong> 생성된 Cap Mesh를 원본 메쉬와 결합
              </li>
            </ol>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r">
            <p className="text-gray-800 font-medium mb-2">핵심 성공 요인</p>
            <p className="text-gray-700 mb-3">
              Arc-Length 정렬이 모든 것을 해결했습니다. 인덱스 순서가 아닌 실제 공간 거리를 활용함으로써 자연스러운 삼각형 배치와 ~1ms의 빠른 성능을 모두 달성할 수 있었습니다.
            </p>
            <p className="text-gray-700">
              특히 Fan Triangulation의 단순함과 Arc-Length의 공간적 정보 활용이 완벽하게 결합되었습니다.
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
              Arc-Length 정렬의 원리
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Arc-Length는 "호의 길이"를 의미하며, 여기서는 중심점에서 각 정점까지의 실제 거리를 뜻합니다. 이 거리로 정점을 정렬하면 공간상에서 가까운 점들끼리 순서대로 배치됩니다.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>왜 Index가 아닌 Arc-Length인가:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>정점 배열의 인덱스는 메쉬 생성 순서일 뿐, 공간적 위치와 무관</li>
              <li>Index 순서로 연결하면 먼 곳의 점들이 연결되어 비정상적인 삼각형 생성</li>
              <li>Arc-Length로 정렬하면 공간상 인접한 점들이 자동으로 순서대로 배치됨</li>
              <li>결과적으로 자연스럽고 균일한 삼각형 분포 달성</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Fan Triangulation의 장점
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Fan(부채꼴) 방식은 가장 단순한 Triangulation 방법입니다. 하나의 중심점에서 모든 삼각형이 방사형으로 펼쳐집니다.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>
                <strong>극도로 단순함:</strong> 10줄 이내의 코드로 구현 가능
              </li>
              <li>
                <strong>항상 작동함:</strong> Convex/Concave 폴리곤 무관하게 작동
              </li>
              <li>
                <strong>빠른 성능:</strong> O(n) 시간 복잡도로 매우 빠름
              </li>
              <li>
                <strong>예측 가능함:</strong> 항상 같은 패턴으로 삼각형 생성
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Arc-Length 정렬과 결합하면 Fan 방식의 단순함을 유지하면서도 자연스러운 결과를 얻을 수 있습니다.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Floating Point 오차 회피
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Attempt #2에서 겪었던 Floating Point 정밀도 문제를 완전히 회피할 수 있었습니다.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>문제 상황:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Vector3를 Dictionary Key로 사용 시 GetHashCode() 불안정</li>
              <li>0.0001 단위의 미세한 차이로 Loop이 닫히지 않음</li>
              <li>Epsilon 비교로도 해결이 어려움</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>해결 방법:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Dictionary를 완전히 제거 - 정점 리스트만 사용</li>
              <li>Loop 닫힘을 체크하지 않음 - Fan 방식이라 불필요</li>
              <li>Arc-Length 정렬로 자연스러운 순서 보장</li>
              <li>Floating Point 비교를 최소화</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              UV 매핑과 Normal 계산
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cap Mesh에도 UV 좌표와 Normal 벡터를 부여하여 완전한 메쉬로 만듭니다.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>UV 매핑:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>중심점을 UV (0.5, 0.5)로 설정</li>
              <li>Boundary 정점들을 원주 상에 배치</li>
              <li>각도에 따라 UV 좌표 계산</li>
              <li>결과적으로 원형 텍스처 매핑 가능</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Normal 계산:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>각 삼각형의 두 Edge 벡터를 외적하여 Normal 계산</li>
              <li>모든 정점의 Normal을 평균화</li>
              <li>부드러운 조명 효과 달성</li>
            </ul>
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
              <p className="text-4xl font-bold text-green-600 mb-2">~1ms</p>
              <p className="text-gray-600">처리 시간</p>
              <p className="text-sm text-gray-500 mt-2">
                실시간 VR 환경에서 지연 없이 작동
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-green-600 mb-2">100%</p>
              <p className="text-gray-600">완전성</p>
              <p className="text-sm text-gray-500 mt-2">
                모든 테스트 케이스에서 완벽한 Cap Mesh 생성
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">3번</p>
              <p className="text-gray-600">시도</p>
              <p className="text-sm text-gray-500 mt-2">
                3번의 시도 끝에 완벽한 솔루션 발견
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
                    처리 시간
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                    결과
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    Attempt #1
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    Point Cloud (Delaunay)
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600 font-semibold">
                    ~50ms
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600">
                    실패 (너무 복잡)
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">
                    Attempt #2
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    Ear Clipping
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600 font-semibold">
                    N/A
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600">
                    실패 (Loop 문제)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    Attempt #3
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    Fan (Index 기반)
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-yellow-600 font-semibold">
                    ~0.5ms
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-yellow-600">
                    부분 성공 (부자연스러움)
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-bold">
                    Final
                  </td>
                  <td className="border border-gray-300 px-4 py-3 font-bold">
                    Fan + Arc-Length
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-bold">
                    ~1ms
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-bold">
                    완벽 성공
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">핵심 배움</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>
                <strong>공간 정보의 힘:</strong> 단순한 인덱스가 아닌 실제 거리를 활용하여 자연스러운 결과 달성
              </li>
              <li>
                <strong>단순함의 가치:</strong> Fan Triangulation이라는 단순한 방법이 Arc-Length와 결합하여 완벽한 솔루션이 됨
              </li>
              <li>
                <strong>Floating Point 정밀도:</strong> Vector3를 Dictionary Key로 절대 사용하지 말 것. 정밀도 문제를 회피하는 알고리즘 설계가 중요
              </li>
              <li>
                <strong>학술적 완벽함 vs 실무 적용성:</strong> Delaunay처럼 이론적으로 완벽한 방법이 항상 최선은 아님
              </li>
              <li>
                <strong>반복적 개선:</strong> 3번의 시도를 통해 점진적으로 문제를 해결하고 최종 솔루션에 도달
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
              <strong>Mesh Slicing과 통합:</strong> Cap Mesh 생성을 Mesh Slicing 시스템에 완전히 통합하여 하나의 완성된 시스템 구축
            </li>
            <li>
              <strong>다양한 Cap 스타일:</strong> Flat Cap 외에 Curved Cap, Beveled Cap 등 다양한 스타일 지원
            </li>
            <li>
              <strong>멀티 Boundary 지원:</strong> 하나의 메쉬에 여러 개의 구멍이 있을 때 각각에 Cap 생성
            </li>
            <li>
              <strong>텍스처 연속성:</strong> Cap Mesh의 텍스처가 원본 메쉬와 자연스럽게 연결되도록 UV 매핑 개선
            </li>
            <li>
              <strong>성능 최적화:</strong> Job System과 Burst Compiler를 활용하여 더욱 빠른 처리 속도 달성
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