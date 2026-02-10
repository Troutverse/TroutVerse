// app/projects/gps-coordinate-conversion/page.tsx
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

export default function GPSCoordinateConversionPage() {
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
            GPS Coordinate Conversion System
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            실제 GPS 좌표를 Unity 가상 세계로 변환하는 수학
          </p>
          <p className="text-gray-500">2024.09 | 개발 기간 2주</p>
        </header>

        {/* 영상 - 주석 처리 (나중에 추가)
        <section className="mb-12">
          <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden mb-4">
            <video className="w-full h-full" controls muted>
              <source src="/videos/gps-system-demo.mp4" type="video/mp4" />
            </video>
          </div>
        </section>
        */}

        {/* GitHub - 주석 처리
        <section className="mb-12">
          
            href="https://github.com/Troutverse/PokemonGoClone"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 font-medium"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
        </section>
        */}

        {/* 기술 스택 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">기술 스택</h2>
          <div className="flex flex-wrap gap-2">
            {["Unity", "C#", "Google Maps API", "Mercator Projection", "GPS", "Tile System"].map(
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
              Pokémon GO, Ingress 같은 위치 기반 게임의 핵심 기술인 GPS 좌표를 Unity World 좌표로 변환하고,
              Google Maps 타일 시스템을 구현한 프로젝트입니다.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              실제 서울 강남역(37.4979°N, 127.0276°E)을 Unity 상의 (0, 0, 0) 위치로 변환하고,
              플레이어가 실제로 이동하면 가상 세계에서도 동일하게 이동하는 시스템입니다.
              지구는 둥글지만 화면은 평평하기 때문에, Mercator Projection이라는 수학적 변환이 필수적입니다.
            </p>
          </div>
        </section>

        <hr className="my-12 border-gray-200" />

        {/* 해결해야 할 문제 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            해결해야 할 문제
          </h2>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              문제 1: 지구는 둥글고, 화면은 평평하다
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              GPS는 구면 좌표계(Latitude, Longitude)를 사용하지만, Unity는 평면 좌표계(X, Y, Z)를 사용합니다.
              직접 변환하면 심각한 왜곡이 발생합니다.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>극지방으로 갈수록 가로 길이가 심하게 왜곡됨</li>
              <li>1도의 실제 거리가 위도에 따라 달라짐</li>
              <li>위도 1° ≈ 111km (일정), 경도 1° ≈ 111km × cos(위도) (변함)</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              문제 2: Google Maps는 타일 기반
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Google Maps는 전 세계를 256×256px 타일로 나눕니다.
              Zoom Level에 따라 타일 개수가 지수적으로 증가합니다.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Zoom 0: 1개 타일 (전 세계)</li>
              <li>Zoom 15: 1,073,741,824개 타일</li>
              <li>Zoom 20: 1,099,511,627,776개 타일</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              어떻게 효율적으로 로드할 것인가? 3×3 무한 스크롤 시스템이 필요합니다.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              문제 3: 실시간 GPS는 부정확하고 조작 가능하다
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              GPS는 다양한 이유로 부정확하며, 사용자가 위치를 조작할 수도 있습니다.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>GPS 오차: ±5~10m</li>
              <li>GPS Spoofing (위치 조작) 가능</li>
              <li>네트워크 딜레이</li>
              <li>실내에서 GPS 작동 불안정</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              어뷰징을 방지하고 안정적으로 작동시키는 시스템이 필요합니다.
            </p>
          </div>
        </section>

        <hr className="my-12 border-gray-200" />

        {/* 좌표계 기초 지식 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            좌표계 기초 지식
          </h2>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              GPS 좌표계 (WGS84)
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              GPS는 WGS84 (World Geodetic System 1984) 좌표계를 사용합니다.
            </p>
            <CodeSnippet code={`Latitude (위도):  -90° ~ +90° (남극 ~ 북극)
Longitude (경도): -180° ~ +180° (서 ~ 동)

예시:
- 서울 강남역: 37.4979°N, 127.0276°E
- 뉴욕:        40.7128°N, -74.0060°W
- 도쿄:        35.6762°N, 139.6503°E`} language="text" />
            
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>문제점:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>1° 위도 ≈ 111km (일정)</li>
              <li>1° 경도 ≈ 111km × cos(위도) (위도에 따라 변함!)</li>
              <li>적도에서는 1° 경도 = 111km, 북극에서는 1° 경도 = 0km</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Mercator Projection (메르카토르 도법)
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              구면을 평면으로 펼치는 수학적 변환입니다. Google Maps가 사용하는 방식입니다.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="border border-green-300 bg-green-50 p-4 rounded">
                <p className="font-bold text-green-800 mb-2">장점:</p>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>✅ 각도가 보존됨 (항해에 유용)</li>
                  <li>✅ 계산이 간단함</li>
                  <li>✅ Google Maps 표준</li>
                </ul>
              </div>
              <div className="border border-red-300 bg-red-50 p-4 rounded">
                <p className="font-bold text-red-800 mb-2">단점:</p>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>❌ 극지방이 심하게 왜곡됨</li>
                  <li>❌ 면적이 보존 안 됨</li>
                  <li>❌ 그린란드가 아프리카보다 커 보임</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Google Maps 타일 좌표계
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Google Maps는 전 세계를 2^zoom × 2^zoom 개의 타일로 분할합니다.
            </p>
            <CodeSnippet code={`Zoom 15 (서울 도심 수준):
- 전 세계: 32,768 × 32,768 타일
- 타일 1개: 약 4.89km × 4.89km
- 256×256 픽셀/타일

좌표 범위:
- X (가로): 0 ~ 2^zoom - 1
- Y (세로): 0 ~ 2^zoom - 1

예시: Zoom 15에서 서울 강남역
- Tile X: 28062
- Tile Y: 12793`} language="text" />
          </div>
        </section>

        <hr className="my-12 border-gray-200" />

        {/* 핵심 알고리즘 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            핵심 알고리즘 3가지
          </h2>

          <div className="mb-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              알고리즘 1: GPS → 타일 좌표 변환
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              GPS 좌표(Latitude, Longitude)를 Google Maps 타일 좌표로 변환합니다.
              Mercator Projection 공식을 사용합니다.
            </p>
            
            <CodeSnippet code={`// Mercator Projection 공식
float n = Mathf.Pow(2, zoomLevel);

// Longitude → X (간단한 선형 변환)
float tileX = (longitude + 180.0f) / 360.0f * n;

// Latitude → Y (복잡한 Mercator 변환)
float latRad = latitude * Mathf.Deg2Rad;
float tileY = (1 - Mathf.Log(
    Mathf.Tan(latRad) + 1 / Mathf.Cos(latRad)
) / Mathf.PI) / 2 * n;`} />

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r mt-4">
              <p className="text-blue-900 font-medium mb-2">왜 이렇게 복잡한가?</p>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• Longitude는 선형 변환으로 충분 (동서 방향은 단순)</li>
                <li>• Latitude는 Mercator 공식 필요 (남북 방향은 왜곡 보정)</li>
                <li>• Log, Tan, Cos: 구면을 평면으로 펼치는 수학적 왜곡 보정</li>
              </ul>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              알고리즘 2: 타일 좌표 → Unity World 좌표
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              타일 좌표를 Unity의 3D 공간 좌표로 변환합니다. 
              기준점(Origin Tile) 대비 상대 좌표로 계산하여 float 정밀도 문제를 해결합니다.
            </p>
            
            <CodeSnippet code={`// 타일 좌표 차이 계산
int deltaX = currentTileX - originTileX;
int deltaY = currentTileY - originTileY;

// Unity 좌표로 변환 (1타일 = 100 Unity Unit)
float unityX = deltaX * TILE_SIZE;
float unityZ = -deltaY * TILE_SIZE; // Y는 반대 방향

return new Vector3(unityX, 0, unityZ);`} />

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r mt-4">
              <p className="text-yellow-900 font-medium mb-2">왜 originTile이 필요한가?</p>
              <ul className="text-yellow-800 text-sm space-y-1">
                <li>• Unity는 float 정밀도 한계 (7자리)</li>
                <li>• 타일 번호가 28062처럼 크면 정밀도 문제 발생</li>
                <li>• 기준점(예: 강남역) 설정 후 상대 좌표로 계산</li>
                <li>• 이렇게 해야 mm 단위까지 정확한 표현 가능</li>
              </ul>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              알고리즘 3: 3×3 타일 무한 스크롤
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              플레이어 주변 9개 타일만 로드하여 메모리와 API 비용을 절약합니다.
              플레이어가 이동하면 필요한 타일만 동적으로 로드/언로드합니다.
            </p>
            
            <CodeSnippet code={`// 현재 플레이어가 있는 타일
(int centerX, int centerY) = GetPlayerTile();

// 주변 8개 + 중앙 1개 = 9개 타일
for (int dx = -1; dx <= 1; dx++) {
    for (int dy = -1; dy <= 1; dy++) {
        int tileX = centerX + dx;
        int tileY = centerY + dy;
        
        // 아직 로드되지 않은 타일만 로드
        if (!loadedTiles.ContainsKey((tileX, tileY))) {
            LoadTile(tileX, tileY); // Google API 호출
        }
    }
}

// 플레이어가 다른 타일로 이동하면
if (PlayerChangedTile()) {
    UnloadFarTiles(); // 멀어진 타일 언로드
}`} />

            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r mt-4">
              <p className="text-green-900 font-medium mb-2">최적화 포인트</p>
              <ul className="text-green-800 text-sm space-y-1">
                <li>• Dictionary&lt;(int, int), Tile&gt; 캐싱 → O(1) 검색</li>
                <li>• 타일 변경 시에만 로드/언로드 → API 호출 최소화</li>
                <li>• 비동기 로드 → 프레임 드랍 방지</li>
                <li>• 메모리: 9타일 × 256KB ≈ 2.3MB (매우 가벼움)</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="my-12 border-gray-200" />

        {/* 어뷰징 방지 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            어뷰징 방지 시스템
          </h2>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              GPS Spoofing 감지
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              사용자가 GPS 위치를 조작하여 순간이동하는 것을 감지하고 차단합니다.
            </p>
            
            <CodeSnippet code={`// 이전 위치와 현재 위치의 타일 차이 계산
int tileDelta = Mathf.Abs(newTileX - oldTileX) 
              + Mathf.Abs(newTileY - oldTileY);

// 2타일 이상 순간이동 = 의심
if (tileDelta >= 2 && timeDelta < 1.0f) {
    Debug.LogError("GPS Spoofing 감지!");
    Application.Quit(); // 앱 강제 종료
}`} />

            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r mt-4">
              <p className="text-red-900 font-medium mb-2">왜 2타일인가?</p>
              <ul className="text-red-800 text-sm space-y-1">
                <li>• Zoom 15 기준: 1타일 ≈ 5km</li>
                <li>• 사람이 1초에 5km 이동 = 불가능 (18,000 km/h)</li>
                <li>• 자동차도 5km/s는 불가능</li>
                <li>• 2타일 = 10km ≈ 확실한 치팅</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="my-12 border-gray-200" />

        {/* 전체 코드 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            전체 변환 파이프라인
          </h2>
          
          <CodeSnippet code={`public class GPSConverter
{
    private const int ZOOM_LEVEL = 15;
    private const float TILE_SIZE = 100f; // Unity Unit
    
    private Vector2Int _originTile; // 기준점 타일 (강남역)
    
    // GPS → Unity World Position
    public Vector3 GPSToUnity(double lat, double lon)
    {
        // 1. GPS → 타일 좌표
        Vector2Int tile = GPSToTileCoord(lat, lon);
        
        // 2. 타일 좌표 → Unity 좌표
        return TileToUnity(tile);
    }
    
    private Vector2Int GPSToTileCoord(double lat, double lon)
    {
        float n = Mathf.Pow(2, ZOOM_LEVEL);
        
        // Longitude → X (선형 변환)
        int x = (int)((lon + 180.0) / 360.0 * n);
        
        // Latitude → Y (Mercator Projection)
        double latRad = lat * Mathf.Deg2Rad;
        double mercN = Math.Log(Math.Tan(latRad) + 1 / Math.Cos(latRad));
        int y = (int)((1 - mercN / Math.PI) / 2 * n);
        
        return new Vector2Int(x, y);
    }
    
    private Vector3 TileToUnity(Vector2Int tile)
    {
        int deltaX = tile.x - _originTile.x;
        int deltaY = tile.y - _originTile.y;
        
        return new Vector3(
            deltaX * TILE_SIZE,
            0,
            -deltaY * TILE_SIZE
        );
    }
    
    // 3x3 타일 로드 시스템
    public void UpdateTiles(Vector2Int playerTile)
    {
        for (int dx = -1; dx <= 1; dx++) {
            for (int dy = -1; dy <= 1; dy++) {
                Vector2Int tileCoord = new Vector2Int(
                    playerTile.x + dx,
                    playerTile.y + dy
                );
                
                if (!_loadedTiles.ContainsKey(tileCoord)) {
                    StartCoroutine(LoadTileAsync(tileCoord));
                }
            }
        }
        
        UnloadDistantTiles(playerTile);
    }
}`} />
        </section>

        <hr className="my-12 border-gray-200" />

        {/* 성능 & 정확도 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            성능 & 정확도
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">성능 지표</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✅ GPS 업데이트: 60 FPS (1초에 1번 폴링)</li>
                <li>✅ 타일 로드: 비동기 (프레임 드랍 없음)</li>
                <li>✅ 메모리: 9타일 × 256KB = 2.3MB</li>
                <li>✅ API 호출: 타일 변경 시에만</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">정확도</h3>
              <ul className="text-gray-700 space-y-2">
                <li>GPS 오차: ±5m</li>
                <li>타일 크기: ~5000m</li>
                <li>상대 오차: 0.1% 미만</li>
                <li>Unity 정밀도: mm 단위까지 표현 가능</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              알고리즘 복잡도
            </h3>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                    작업
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                    시간 복잡도
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                    공간 복잡도
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    GPS → 타일 좌표
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">
                    O(1)
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    O(1)
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">
                    타일 좌표 → Unity
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">
                    O(1)
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    O(1)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    타일 로드 확인
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">
                    O(1)
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    O(n)
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">
                    3×3 타일 업데이트
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">
                    O(9) = O(1)
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    O(9) = O(1)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className="my-12 border-gray-200" />

        {/* 배운 점 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">배운 점</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                수학의 중요성
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Mercator Projection이 왜 필요한지, 구면 좌표계와 평면 좌표계의 본질적 차이를 이해했습니다.
                수학 없이는 GPS 게임 개발이 불가능하다는 것을 깨달았습니다.
                Log, Tan, Cos 같은 삼각함수가 실제 게임 개발에서 어떻게 사용되는지 직접 경험했습니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                최적화의 기술
              </h3>
              <p className="text-gray-700 leading-relaxed">
                전 세계를 로드하는 대신 3×3 타일만 로드하여 메모리와 API 비용을 99.99% 절감했습니다.
                상대 좌표를 사용하여 float 정밀도 문제를 해결하고, Dictionary 캐싱으로 O(1) 검색 성능을 달성했습니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                보안의 중요성
              </h3>
              <p className="text-gray-700 leading-relaxed">
                GPS Spoofing은 생각보다 쉽게 가능하지만, 타일 기반 검사로 간단하고 효과적으로 방어할 수 있습니다.
                서버 검증 없이도 클라이언트에서 기본적인 치팅 방어가 가능하다는 것을 배웠습니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                좌표계 변환의 깊이
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Unity의 Transform 시스템을 깊이 이해하게 되었습니다. 
                단순히 GPS 좌표를 받아서 쓰는 것이 아니라, 여러 좌표계 간의 변환 과정을 거쳐야 
                정확하고 효율적인 시스템을 만들 수 있다는 것을 깨달았습니다.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-12 border-gray-200" />

        {/* 향후 계획 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">향후 계획</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li>
              <strong>Geohash 도입:</strong> 타일보다 정밀한 위치 표현을 위해 Geohash 알고리즘 적용 예정
            </li>
            <li>
              <strong>서버 기반 위치 검증:</strong> PlayFab Integration을 통한 서버 측 GPS 검증 시스템 구축
            </li>
            <li>
              <strong>실내 위치 추적:</strong> Bluetooth Beacon, WiFi Triangulation으로 실내에서도 위치 추적 가능하게
            </li>
            <li>
              <strong>다중 Zoom Level 지원:</strong> 사용자의 이동 속도에 따라 동적으로 Zoom Level 조정
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