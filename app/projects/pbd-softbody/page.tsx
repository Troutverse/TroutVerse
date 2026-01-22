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

// 이미지 컴포넌트
function ProjectImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <div className="my-6">
      <div className="border border-gray-300 rounded-lg overflow-hidden bg-gray-50">
        <Image
          src={src}
          alt={alt}
          width={800}
          height={450}
          className="w-full h-auto"
        />
      </div>
      {caption && (
        <p className="text-sm text-gray-500 mt-2 text-center">{caption}</p>
      )}
    </div>
  );
}

export default function PBDSoftBodyPage() {
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
            PBD Soft Body
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Position Based Dynamics - VR 수술 시뮬레이션을 위한 실시간 소프트바디 물리 엔진
          </p>
          <p className="text-gray-500">2025.01 | 개발 기간 4주</p>
        </header>

        {/* 영상 */}
        <section className="mb-12">
          <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden mb-4">
            <video className="w-full h-full" controls>
              <source src="/videos/PBDSoftBody.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

        {/* GitHub */}
        <section className="mb-12">
          <a
            href="https://github.com/Troutverse/PBDSoftBody"
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
            {["Unity", "C#", "Meta Quest", "Job System", "Burst Compiler", "Position Based Dynamics", "Shape Matching"].map(
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
              이 프로젝트는 VR 수술 시뮬레이션에서 장기 조직의 부드러운 변형을 실시간으로 구현하는 것이 목표였습니다. 기존 Unity Physics는 Rigidbody만 지원하며 소프트바디를 기본적으로 지원하지 않아, 메쉬 변형이 불가능했습니다.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              VR 환경에서는 최소 72fps를 유지해야 하며, Quest 2/3 같은 모바일 환경에서도 작동해야 했습니다. 자연스러운 물렁물렁한 느낌, 중력과 충돌 반응, 그리고 VR Grab과의 완벽한 통합이 필요했습니다.
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
              기존 Unity Physics의 한계
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Unity의 기본 물리 엔진은 단단한 물체(Rigidbody)만 지원합니다.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Rigidbody는 단단한 물체만 표현 가능</li>
              <li>소프트바디 기본 지원 없음</li>
              <li>메쉬 변형 불가능</li>
              <li>조직의 탄성이나 부드러움을 표현할 수 없음</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              성능 요구사항
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              VR 환경에서는 매우 엄격한 성능 제약이 있습니다.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>VR 환경: 최소 72fps 유지 필수</li>
              <li>실시간 상호작용 필수 - 지연이 있으면 멀미 유발</li>
              <li>Quest 2/3 모바일 환경에서 작동</li>
              <li>제한된 CPU/GPU 리소스</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              구현 목표
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>자연스러운 물렁물렁한 느낌</li>
              <li>중력, 충돌, 마찰에 대한 현실적인 반응</li>
              <li>VR Grab 시스템과 완벽한 통합</li>
              <li>메쉬 절단 시스템과 호환</li>
            </ul>
          </div>

          <div className="bg-gray-50 border-l-4 border-yellow-500 p-6 rounded-r">
            <p className="text-gray-800 font-medium mb-2">핵심 과제</p>
            <p className="text-gray-700">
              "기존 물리 엔진으로는 부드러운 조직의 실시간 시뮬레이션이 불가능 → 새로운 접근 필요"
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
            완벽한 솔루션을 찾기까지 4번의 시도를 거쳤습니다. 각 시도마다 문제점을 파악하고 개선하는 과정을 통해 최종 솔루션에 도달했습니다.
          </p>

          {/* 시도 1 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 bg-red-100 text-red-700 rounded-full font-bold text-sm">
                1
              </span>
              <h3 className="text-xl font-bold text-gray-900">
                Spring-Mass System
              </h3>
              <span className="text-red-600 font-medium text-sm">
                실패 - 폭발
              </span>
            </div>

            <div className="pl-11">
              <p className="text-gray-700 mb-3 font-medium">접근 방법:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>파티클들을 스프링으로 연결</li>
                <li>Hooke's Law 적용: F = -k × Δx</li>
                <li>질량-스프링 모델로 구현</li>
              </ul>

              <p className="text-gray-700 mb-3 font-medium">왜 이 방법을 선택했나:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>직관적: 물리학 101 - Hooke's Law</li>
                <li>구현 쉬움: 간단한 공식</li>
                <li>널리 사용: 천 시뮬레이션의 기본</li>
                <li>다른 대안들:
                  <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                    <li>FEM (Finite Element Method): 너무 복잡, 실시간 불가능</li>
                    <li>Bullet Physics: Unity 통합 어려움</li>
                    <li>Havok: 라이센스 문제</li>
                  </ul>
                </li>
              </ul>

              <p className="text-gray-700 mb-3 font-medium">문제점:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>
                  <strong>불안정함:</strong> 스프링 상수(stiffness) 조절이 지옥같음
                </li>
                <li>
                  <strong>폭발 현상:</strong> Time step에 매우 민감
                </li>
                <li>
                  <strong>성능 문제:</strong> 매 프레임 수천 개 스프링 계산
                </li>
                <li>Stiffness 높이면 → 폭발</li>
                <li>Stiffness 낮추면 → 흐물흐물</li>
              </ul>

              <p className="text-gray-700 mb-3 font-medium">배운 점:</p>
              <p className="text-gray-700">
                물리학적으로는 맞지만 수치 안정성이 최악이었습니다. 다른 접근이 필요했습니다.
              </p>
            </div>
          </div>

          {/* Rejected */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 bg-orange-100 text-orange-700 rounded-full font-bold text-sm">
                ✗
              </span>
              <h3 className="text-xl font-bold text-gray-900">
                Tetrahedral Mesh (검토 후 포기)
              </h3>
              <span className="text-orange-600 font-medium text-sm">
                포기 - 너무 무거움
              </span>
            </div>

            <div className="pl-11">
              <p className="text-gray-700 mb-3 font-medium">의료 시뮬레이션 표준:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>SOFA Framework (프랑스 표준)</li>
                <li>3D Slicer (의료 영상 처리)</li>
                <li>NVIDIA Flex Medical</li>
              </ul>

              <p className="text-gray-700 mb-3 font-medium">왜 업계 표준인가:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>정확한 부피 보존: 내부 구조 포함</li>
                <li>내부 응력 계산: FEM 최적화</li>
                <li>의학적 정확도: 실제 조직 표현</li>
              </ul>

              <p className="text-gray-700 mb-3 font-medium">왜 포기했는가:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>
                  <strong>파티클 수 폭발:</strong> 500개 → 5,000~10,000개 (10-20배)
                </li>
                <li>
                  <strong>연산량 증가:</strong> Distance Constraints 10배
                </li>
                <li>
                  <strong>메모리 문제:</strong> Quest 2/3 제한
                </li>
                <li>
                  <strong>렌더링 복잡:</strong> 내부 숨기고 표면만 추출 필요
                </li>
                <li>VR 72fps 달성 불가능</li>
              </ul>

              <p className="text-gray-700 mb-3 font-medium">대신 선택한 방법:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Surface Mesh: 껍데기만 사용</li>
                <li>Shape Matching: 부피 보존 근사</li>
                <li>실시간 가능: 72fps 안정적 달성</li>
                <li>파티클 500개로 충분</li>
              </ul>

              <p className="text-gray-700 mb-3 font-medium">배운 점:</p>
              <p className="text-gray-700">
                의료 표준이 항상 VR에 최적은 아닙니다. 목적에 맞는 선택이 중요했습니다.
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
                Verlet Integration
              </h3>
              <span className="text-red-600 font-medium text-sm">
                실패 - 형태 손실
              </span>
            </div>

            <div className="pl-11">
              <p className="text-gray-700 mb-3 font-medium">개선된 아이디어:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>속도 없이 위치만으로 시뮬레이션</li>
                <li>p_new = 2p - p_old + a·dt²</li>
                <li>암시적 속도 계산</li>
              </ul>

              <p className="text-gray-700 mb-3 font-medium">왜 Verlet을 선택했나:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>안정성 향상: Spring-Mass보다 덜 폭발</li>
                <li>간단함: 속도 변수 불필요</li>
                <li>에너지 보존: 수치 오차 적음</li>
                <li>다른 방법들:
                  <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                    <li>Euler Integration: 여전히 불안정</li>
                    <li>Runge-Kutta: 너무 느림 (4단계)</li>
                    <li>Implicit Methods: 구현 복잡</li>
                  </ul>
                </li>
              </ul>

              <p className="text-gray-700 mb-3 font-medium">문제점:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>
                  <strong>형태 유지 어려움:</strong> 쭉쭉 늘어남
                </li>
                <li>
                  <strong>제약 조건 부족:</strong> 원래 모양으로 안 돌아옴
                </li>
                <li>
                  <strong>Constraint Solving 필요:</strong> 거리 제약만으로는 부족
                </li>
                <li>전체적으로 스파게티처럼 됨</li>
              </ul>

              <p className="text-gray-700 mb-3 font-medium">배운 점:</p>
              <p className="text-gray-700">
                안정성은 개선됐지만 형태 보존에 실패했습니다. Constraint 시스템이 필요했습니다.
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
                Distance Constraints Only
              </h3>
              <span className="text-yellow-600 font-medium text-sm">
                부분 성공
              </span>
            </div>

            <div className="pl-11">
              <p className="text-gray-700 mb-3 font-medium">단순화된 접근:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Verlet + 거리 제약만 사용</li>
                <li>각 엣지의 길이만 유지</li>
                <li>반복적으로 보정 (Iterative Solving)</li>
              </ul>

              <p className="text-gray-700 mb-3 font-medium">왜 Distance Constraints를 선택했나:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>단순함: 엣지 길이만 유지</li>
                <li>빠름: O(n) 복잡도</li>
                <li>작동함: 더 이상 폭발 안 함</li>
                <li>대안 제약들:
                  <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                    <li>Bending Constraints: 구현 복잡, 느림</li>
                    <li>Volume Constraints: 부피 계산 오버헤드</li>
                    <li>Area Preservation: 삼각형마다 계산</li>
                  </ul>
                </li>
              </ul>

              <p className="text-gray-700 mb-3 font-medium">성공한 점:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>안정적으로 작동: 폭발 없음</li>
                <li>72fps 달성: 실시간 가능</li>
                <li>엣지 길이 유지: 구조적 강성 확보</li>
              </ul>

              <p className="text-gray-700 mb-3 font-medium">문제점:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>
                  <strong>전체 형태 손실:</strong> 부분은 유지, 전체는 뭉개짐
                </li>
                <li>
                  <strong>Shape Matching 필요:</strong> 글로벌 제약 부재
                </li>
                <li>엣지는 OK, 전체 형태는 NG</li>
                <li>납작해지거나 비틀림</li>
              </ul>

              <p className="text-gray-700 mb-3 font-medium">배운 점:</p>
              <p className="text-gray-700">
                Local Constraints는 성공했지만, Global Constraint가 필요했습니다. Shape Matching을 추가해야 했습니다.
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
                Breakthrough: PBD + Shape Matching
              </h3>
              <span className="text-green-600 font-medium text-sm">
                성공!
              </span>
            </div>

            <div className="pl-11">
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r mb-4">
                <p className="text-gray-800 font-medium mb-2">결정적 발견</p>
                <p className="text-gray-700">
                  <strong className="text-blue-600">Local Constraints</strong> (Distance): 엣지 길이 유지 +<br/>
                  <strong className="text-purple-600">Global Constraint</strong> (Shape Matching): 전체 형태 복원<br/>
                  = 완벽한 소프트바디 시뮬레이션!
                </p>
              </div>

              <p className="text-gray-700 mb-3 font-medium">Shape Matching 원리:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>원래 형태 기억: Rest Configuration 저장</li>
                <li>Polar Decomposition: 회전 행렬 추출</li>
                <li>목표 위치 계산: 원래 형태로 당김</li>
              </ul>

              <p className="text-gray-700 mb-3 font-medium">왜 완벽한가:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>안정적: 폭발 없음</li>
                <li>형태 유지: 원래 모양으로 복원</li>
                <li>빠름: 72fps 달성</li>
                <li>자연스러움: 부드러운 변형</li>
                <li>모든 문제 해결!</li>
              </ul>

              <p className="text-gray-700 mb-3 font-medium">핵심 파라미터:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>DistanceStiffness: 0.9 (엣지 강도)</li>
                <li>ShapeMatchingStiffness: 0.1 (형태 복원)</li>
                <li>NumSubsteps: 5 (안정성)</li>
                <li>Mass: 1.0 (파티클 질량)</li>
              </ul>

              <p className="text-gray-700 mb-3 font-medium">핵심 인사이트:</p>
              <p className="text-gray-700">
                Local + Global의 완벽한 조합이 Position Based Dynamics의 핵심이었습니다!
              </p>
            </div>
          </div>
        </section>

        <hr className="my-12 border-gray-200" />

        {/* 최종 솔루션 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">최종 솔루션</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            4번의 시도를 통해 얻은 교훈을 모두 결합하여 완성된 PBD + Shape Matching 시스템입니다.
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              핵심 기술 3가지
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  1. Position Based Dynamics (PBD)
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  위치 기반 동역학은 속도가 아닌 위치를 직접 조작하여 안정성을 확보합니다. Verlet Integration으로 위치를 예측하고, Constraint Solving으로 보정하는 2단계 과정입니다. 매 프레임마다 파티클의 위치를 업데이트하고, Distance Constraints로 엣지 길이를 유지합니다.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  2. Shape Matching (Polar Decomposition)
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  원래 형태를 기억하고 복원하는 글로벌 제약입니다. 질량중심을 계산하고, 변형 행렬을 Polar Decomposition으로 분해하여 순수 회전 성분만 추출합니다. 이를 통해 원래 형태로 부드럽게 복원하면서도 유연한 변형을 허용합니다.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  3. Unity Job System + Burst Compiler
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  멀티스레드 병렬 처리와 SIMD 최적화로 8배 성능 향상을 달성했습니다. IJobParallelFor로 파티클 계산을 병렬화하고, Burst Compiler로 CPU SIMD 명령어를 활용했습니다. NativeArray를 사용하여 GC를 완전히 제거했습니다.
                </p>
              </div>
            </div>
          </div>

          {/* 핵심 알고리즘 코드 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">핵심 알고리즘 코드</h3>
            
            <h4 className="font-semibold text-gray-900 mb-3">Shape Matching 수학</h4>
            <CodeSnippet code={`// 1. 질량중심 계산
float3 cm = float3.zero;
for (int i = 0; i < numParticles; i++)
{
    cm += positions[i] * masses[i];
}
cm /= totalMass;

// 2. 변형 행렬 A 계산
float3x3 A = float3x3.zero;
for (int i = 0; i < numParticles; i++)
{
    float3 p = positions[i] - cm;
    float3 q = restPositions[i];
    A += math.mul(p, math.transpose(q)) * masses[i];
}

// 3. Polar Decomposition (회전 행렬 추출)
float3x3 R = ExtractRotation(A); // SVD 또는 반복법

// 4. 목표 위치 계산
for (int i = 0; i < numParticles; i++)
{
    float3 goal = cm + math.mul(R, restPositions[i]);
    positions[i] += (goal - positions[i]) * shapeMatchingStiffness;
}`} />

            <h4 className="font-semibold text-gray-900 mb-3 mt-6">Job System 병렬 처리</h4>
            <CodeSnippet code={`[BurstCompile]
struct PredictPositionsJob : IJobParallelFor
{
    public NativeArray<float3> Positions;
    public NativeArray<float3> PrevPositions;
    [ReadOnly] public float3 Gravity;
    [ReadOnly] public float DeltaTime;

    public void Execute(int index)
    {
        float3 velocity = (Positions[index] - PrevPositions[index]) / DeltaTime;
        PrevPositions[index] = Positions[index];
        
        // Verlet Integration
        Positions[index] += velocity * DeltaTime + Gravity * DeltaTime * DeltaTime;
    }
}

// 실행
new PredictPositionsJob { /* ... */ }.Schedule(numParticles, 64).Complete();`} />
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              전체 알고리즘 흐름
            </h3>
            <ol className="list-decimal list-inside text-gray-700 space-y-3">
              <li>
                <strong>Predict:</strong> Verlet Integration으로 위치 예측 (중력 적용)
              </li>
              <li>
                <strong>Distance Constraints:</strong> 엣지 길이 유지 (5-10회 반복)
              </li>
              <li>
                <strong>Shape Matching:</strong> 전체 형태를 원래 모양으로 복원
              </li>
              <li>
                <strong>Collision:</strong> 바닥, 벽 등 환경과 충돌 처리
              </li>
              <li>
                <strong>Update Velocity:</strong> 위치 변화로부터 속도 계산
              </li>
              <li>
                <strong>Apply Damping:</strong> 감쇠 적용하여 과도한 진동 방지
              </li>
              <li>
                <strong>Update Mesh:</strong> 계산된 위치로 렌더링 메쉬 업데이트
              </li>
            </ol>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r">
            <p className="text-gray-800 font-medium mb-2">핵심 성공 요인</p>
            <p className="text-gray-700 mb-3">
              Local (Distance) + Global (Shape Matching)의 조합이 모든 것을 해결했습니다. 안정성, 형태 유지, 성능을 모두 달성했습니다.
            </p>
            <p className="text-gray-700">
              특히 Job System + Burst Compiler의 최적화로 8배 성능 향상을 이루어 VR 환경에서 안정적인 72fps를 유지할 수 있었습니다.
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
              Unity Job System의 위력
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Unity의 Job System은 멀티스레드 병렬 처리를 안전하고 쉽게 구현할 수 있게 해줍니다.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>단일 스레드 (기존):</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>모든 파티클을 순차적으로 처리</li>
              <li>500개 파티클 × 5 substeps = 2500번 계산</li>
              <li>결과: 16ms (60fps 불가)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>멀티 스레드 (Job System):</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>CPU 코어 수만큼 병렬 처리</li>
              <li>8코어 CPU에서 8배 빠름</li>
              <li>결과: 2ms (500fps 가능!)</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Burst Compiler의 마법
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Burst Compiler는 C# 코드를 고도로 최적화된 네이티브 코드로 컴파일합니다.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>
                <strong>SIMD (Single Instruction Multiple Data):</strong> 4개 파티클을 동시에 처리
              </li>
              <li>
                <strong>Auto Vectorization:</strong> 자동으로 벡터 연산 최적화
              </li>
              <li>
                <strong>최대 10배 성능 향상</strong>
              </li>
              <li>단순히 [BurstCompile] 속성만 추가하면 됨</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              NativeArray로 GC 제로 달성
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              일반 C# 배열은 매 프레임 GC(Garbage Collection)를 발생시켜 프레임 드랍을 유발합니다.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>일반 배열 (GC 발생):</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Vector3[] positions - 관리되는 메모리</li>
              <li>매 프레임 GC 체크</li>
              <li>불규칙한 프레임 드랍</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>NativeArray (GC 없음):</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>NativeArray&lt;float3&gt; - 네이티브 메모리</li>
              <li>Zero GC - 완전히 관리 밖</li>
              <li>안정적인 프레임레이트</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              VR Integration: Rigidbody + PBD 통합
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              가장 어려웠던 부분은 Unity의 Rigidbody 물리와 PBD를 통합하는 것이었습니다.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>구조:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Parent: Rigidbody + Collider (중력, 충돌 담당)</li>
              <li>Child: PBD Soft Body (메쉬 변형 담당)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>핵심 문제:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>PBD는 월드 좌표계에서 독립적으로 동작</li>
              <li>부모가 이동해도 PBD에 전달 안 됨</li>
              <li>중력이 이중으로 적용됨</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>해결책:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Parent Motion Tracking: 부모 Transform 변화 추적하여 모든 파티클에 적용</li>
              <li>Gravity Delegation: PBD 자체 중력 끄고 Rigidbody 중력만 사용</li>
              <li>Collision Integration: Rigidbody 충돌을 PBD Plane으로 동적 추가</li>
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
              <p className="text-4xl font-bold text-green-600 mb-2">72+</p>
              <p className="text-gray-600">FPS</p>
              <p className="text-sm text-gray-500 mt-2">
                Quest 2/3에서 안정적인 프레임레이트
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-green-600 mb-2">8배</p>
              <p className="text-gray-600">성능 향상</p>
              <p className="text-sm text-gray-500 mt-2">
                Job System + Burst로 16ms → 2ms
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">4주</p>
              <p className="text-gray-600">개발 기간</p>
              <p className="text-sm text-gray-500 mt-2">
                4번의 시도 끝에 완성
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">성능 비교</h3>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                    방법
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                    처리 시간
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                    FPS
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                    결과
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    단일 스레드 (일반 C#)
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600 font-semibold">
                    16ms
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600">
                    60fps 불가
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600">
                    VR 불가능
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">
                    Job System
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-yellow-600 font-semibold">
                    4ms
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-yellow-600">
                    250fps
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-yellow-600">
                    개선
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-bold">
                    Job + Burst (최종)
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-bold">
                    2ms
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-bold">
                    500fps
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-bold">
                    완벽
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">핵심 배움</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>
                <strong>물리 시뮬레이션의 복잡성:</strong> Spring-Mass에서 PBD까지, 4번의 시도를 통해 점진적으로 문제를 해결
              </li>
              <li>
                <strong>최적화의 중요성:</strong> 알고리즘도 중요하지만 구현 최적화가 더 중요함. Job System + Burst로 8배 향상
              </li>
              <li>
                <strong>VR 통합의 어려움:</strong> Rigidbody와 PBD의 조화, 좌표계 변환, 실시간 성능 유지
              </li>
              <li>
                <strong>실패를 통한 학습:</strong> 4번의 실패가 있었기에 최종 솔루션이 완성될 수 있었음
              </li>
              <li>
                <strong>목적에 맞는 선택:</strong> Tetrahedral Mesh 같은 의료 표준도 VR에는 과할 수 있음
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
              <strong>Collision Mesh 개선:</strong> 더 정확한 충돌 처리를 위한 Collision Mesh 최적화
            </li>
            <li>
              <strong>Self-Collision 추가:</strong> 파티클 간 충돌 처리로 더 현실적인 시뮬레이션
            </li>
            <li>
              <strong>Haptic Feedback:</strong> VR 컨트롤러 햅틱 피드백 연동으로 촉각 전달
            </li>
            <li>
              <strong>메쉬 절단과 완벽 통합:</strong> Mesh Slicing 시스템과 결합하여 절단된 조직도 물리 시뮬레이션
            </li>
            <li>
              <strong>다양한 조직 특성:</strong> 간, 심장, 폐 등 각 장기의 고유한 물성 구현
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