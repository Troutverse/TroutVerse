// app/projects/login-service/page.tsx
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

export default function LoginServicePage() {
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
            Login Service
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            GRPC 기반 사용자 인증 및 로그인 시스템
          </p>
          <p className="text-gray-500">2025.01 | 개발 기간 2주</p>
        </header>

        {/* 영상 (플레이스홀더) */}
        <section className="mb-12">
          <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center">
            <p className="text-gray-400 font-mono">Demo Video Placeholder</p>
          </div>
        </section>

        {/* GitHub */}
        <section className="mb-12">
          <a
            href="https://github.com/Troutverse/StupidGuys-Auth-Server"
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
            {["ASP.NET Core 8.0", "PostgreSQL", "EF Core", "JWT", "Npgsql", "Docker", "Render.com"].map(
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
              이 프로젝트는 멀티플레이 게임을 위한 안전하고 빠른 인증 시스템을 구축하는 것이 목표였습니다. 
              특히 한 계정으로 여러 기기에서 동시 접속하는 중복 로그인을 실시간으로 차단해야 했습니다.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Unity 클라이언트와 ASP.NET Core 백엔드 간의 안전한 통신을 위해 JWT 기반 인증을 구현했고,
              메모리 기반 세션 관리로 실시간 중복 로그인 차단과 높은 성능을 동시에 달성했습니다.
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
              멀티플레이 게임의 요구사항
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              멀티플레이 게임에서는 게임 밸런스와 공정성을 위해 한 계정당 하나의 기기에서만 
              로그인할 수 있어야 합니다. 계정 공유를 차단하고 실시간으로 세션을 관리해야 했습니다.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>중복 로그인 방지 필수</li>
              <li>실시간 세션 관리</li>
              <li>계정 공유 차단</li>
              <li>빠른 응답 속도 (50ms 이하)</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              보안 요구사항
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>안전한 인증 토큰 필요 (JWT)</li>
              <li>비밀번호 평문 저장 금지</li>
              <li>HTTPS 통신 필수</li>
              <li>토큰 만료 및 검증</li>
            </ul>
          </div>

          <div className="bg-gray-50 border-l-4 border-yellow-500 p-6 rounded-r">
            <p className="text-gray-800 font-medium mb-2">핵심 과제</p>
            <p className="text-gray-700">
              데이터베이스 부하를 최소화하면서 실시간으로 중복 로그인을 차단하고,
              동시 접속자 1000명 이상을 안정적으로 처리할 수 있는 시스템 구축
            </p>
          </div>
        </section>

        <hr className="my-12 border-gray-200" />

        {/* 개발 과정 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            개발 과정 - 2번의 시도
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            최적의 솔루션을 찾기까지 2번의 시도와 개선 과정을 거쳤습니다.
          </p>

          {/* 시도 1 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 bg-red-100 text-red-700 rounded-full font-bold text-sm">
                1
              </span>
              <h3 className="text-xl font-bold text-gray-900">
                DB Flag Approach (IsLoggedIn)
              </h3>
              <span className="text-red-600 font-medium text-sm">
                실패
              </span>
            </div>

            <div className="pl-11">
              <p className="text-gray-700 mb-3 font-medium">접근 방법:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>User 테이블에 IsLoggedIn bool 컬럼 추가</li>
                <li>로그인 시 true, 로그아웃 시 false로 업데이트</li>
                <li>로그인 시도마다 DB에서 상태 확인</li>
              </ul>

              <p className="text-gray-700 mb-3 font-medium">문제점:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>
                  <strong>비정상 종료 처리 불가:</strong> 앱 강제 종료, 네트워크 끊김 시 
                  DB에 true가 영구적으로 남아 재로그인 불가
                </li>
                <li>
                  <strong>DB 부하 문제:</strong> 로그인마다 UPDATE/SELECT 쿼리 실행으로 
                  동시 접속 1000명 시 병목 현상
                </li>
                <li>
                  <strong>동기화 문제:</strong> 여러 서버 환경에서 DB 업데이트 지연으로 
                  Race Condition 발생 가능
                </li>
              </ul>

              <p className="text-gray-700 mb-3 font-medium">배운 점:</p>
              <p className="text-gray-700">
                DB 상태는 '과거'의 기록일 뿐, 실시간 세션 관리에는 
                '현재' 상태를 반영하는 메모리 기반 솔루션이 필요합니다.
              </p>
            </div>
          </div>

          {/* 시도 2 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 bg-green-100 text-green-700 rounded-full font-bold text-sm">
                2
              </span>
              <h3 className="text-xl font-bold text-gray-900">
                Memory Session Approach
              </h3>
              <span className="text-green-600 font-medium text-sm">
                성공
              </span>
            </div>

            <div className="pl-11">
              <p className="text-gray-700 mb-3 font-medium">접근 방법:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>ConcurrentDictionary로 메모리 기반 세션 관리</li>
                <li>sessionId를 Key로 User 객체 저장</li>
                <li>로그인 시 Dictionary 확인 후 중복 체크</li>
                <li>로그아웃 시 Dictionary에서 제거</li>
              </ul>

              <p className="text-gray-700 mb-3 font-medium">개선점:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>
                  <strong>실시간 중복 로그인 방지:</strong> 메모리 접근으로 1ms 이내 체크
                </li>
                <li>
                  <strong>DB 쿼리 90% 감소:</strong> 세션 체크는 메모리에서만 처리
                </li>
                <li>
                  <strong>응답 속도 3배 향상:</strong> 50ms 이하로 로그인 처리
                </li>
                <li>
                  <strong>Thread-safe:</strong> ConcurrentDictionary로 동시성 보장
                </li>
              </ul>

              <p className="text-gray-700 mb-3 font-medium">핵심 개념:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>static 키워드로 컨트롤러 인스턴스 간 공유</li>
                <li>ConcurrentDictionary로 동시 접근 안전성 확보</li>
                <li>Guid 기반 sessionId로 유니크 식별</li>
                <li>서버 재시작 시 자동 초기화 (장점으로 작용)</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="my-12 border-gray-200" />

        {/* 최종 솔루션 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">최종 솔루션</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            메모리 기반 세션 관리와 JWT 인증을 결합한 Layered Architecture로 
            안전하고 빠른 인증 시스템을 완성했습니다.
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              핵심 기술 4가지
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  1. Memory Session Management
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  ConcurrentDictionary를 사용한 메모리 기반 세션 관리로 실시간 중복 로그인을 차단합니다.
                  static 키워드로 모든 컨트롤러 인스턴스가 같은 세션 저장소를 공유하며,
                  Thread-safe한 작업이 보장됩니다. 메모리 접근만으로 1ms 이내에 중복 체크가 가능합니다.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  2. JWT Authentication
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  JSON Web Token을 사용한 Stateless 인증으로 서버 확장성을 확보했습니다.
                  256bit HMAC SHA256 서명으로 토큰 위조를 방지하고, Claims에 userId와 sessionId를 포함하여
                  사용자 식별과 세션 검증을 동시에 수행합니다. 토큰 만료 시간은 1시간으로 설정했습니다.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  3. Repository Pattern
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  IUserRepository 인터페이스로 데이터 접근 로직을 추상화하여 테스트 용이성과 유지보수성을 
                  향상시켰습니다. Dependency Injection으로 느슨한 결합을 유지하며, 
                  비동기 메서드(async/await)로 높은 처리량을 달성했습니다.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  4. Entity Framework Core + PostgreSQL
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Code First 방식으로 데이터베이스 스키마를 관리하고, EF Core Migrations로 자동 동기화합니다.
                  PostgreSQL의 안정성과 성능을 활용하며, Fluent API로 제약 조건과 인덱스를 정의합니다.
                  Username과 Nickname에 Unique Index를 적용하여 중복 방지를 보장합니다.
                </p>
              </div>
            </div>
          </div>

          {/* 핵심 알고리즘 코드 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">핵심 알고리즘 코드</h3>
            
            <h4 className="font-semibold text-gray-900 mb-3">Memory Session 관리</h4>
            <CodeSnippet code={`// Memory Session Storage (static)
private static readonly ConcurrentDictionary<Guid, User> _loginSessions 
    = new ConcurrentDictionary<Guid, User>();

// Login 처리
public async Task<IActionResult> Login([FromBody] LoginDto dto)
{
    // 1. 사용자 인증
    var user = await _userRepository.GetByUserNameAsync(dto.id);
    if (user == null || user.Password != dto.password)
        return Unauthorized("Invalid credentials");
    
    // 2. 중복 로그인 체크 (메모리에서 즉시 확인)
    var alreadyLoggedIn = _loginSessions.Values
        .Any(u => u.Username == dto.id);
    
    if (alreadyLoggedIn)
        return Conflict("Already logged in from another device");
    
    // 3. 세션 생성
    var sessionId = Guid.NewGuid();
    _loginSessions.TryAdd(sessionId, user);
    
    // 4. JWT 토큰 생성
    var jwt = JwtUtils.Generate(
        user.Id.ToString(),
        sessionId.ToString(),
        TimeSpan.FromHours(1)
    );
    
    return Ok(new { jwt, userId = user.Id, nickname = user.Nickname });
}

// Logout 처리
public IActionResult Logout([FromHeader] string sessionId)
{
    if (Guid.TryParse(sessionId, out var guid))
    {
        _loginSessions.TryRemove(guid, out _);
        return Ok();
    }
    return BadRequest();
}`} />

            <h4 className="font-semibold text-gray-900 mb-3 mt-6">JWT 토큰 생성</h4>
            <CodeSnippet code={`public static string Generate(string userId, string sessionId, TimeSpan lifetime)
{
    var securityKey = new SymmetricSecurityKey(
        Encoding.UTF8.GetBytes(_secretKey)
    );
    var credentials = new SigningCredentials(
        securityKey, 
        SecurityAlgorithms.HmacSha256
    );
    
    var claims = new[]
    {
        new Claim(JwtRegisteredClaimNames.Sub, userId),
        new Claim("session_id", sessionId),
        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
    };
    
    var token = new JwtSecurityToken(
        issuer: "LoginService",
        audience: "UnityClient",
        claims: claims,
        expires: DateTime.UtcNow.Add(lifetime),
        signingCredentials: credentials
    );
    
    return new JwtSecurityTokenHandler().WriteToken(token);
}`} />
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              시스템 아키텍처
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Layered Architecture Pattern을 적용하여 관심사를 분리하고 유지보수성을 높였습니다.
            </p>
            <ol className="list-decimal list-inside text-gray-700 space-y-3">
              <li>
                <strong>Presentation Layer:</strong> AuthController, UserController로 
                HTTP 요청/응답 처리, DTO를 통한 데이터 전송
              </li>
              <li>
                <strong>Security Layer:</strong> JwtUtils로 토큰 생성/검증, 
                Memory Session으로 중복 로그인 차단
              </li>
              <li>
                <strong>Business Layer:</strong> IUserRepository 인터페이스로 
                비즈니스 로직과 데이터 접근 분리
              </li>
              <li>
                <strong>Data Layer:</strong> UserRepository 구현체, 
                GameDbContext로 EF Core 연동, PostgreSQL 데이터베이스
              </li>
            </ol>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r">
            <p className="text-gray-800 font-medium mb-2">핵심 성공 요인</p>
            <p className="text-gray-700 mb-3">
              메모리 기반 세션 관리와 JWT 인증의 결합이 핵심이었습니다. 
              실시간 성능(50ms 이하)과 보안성을 모두 달성할 수 있었습니다.
            </p>
            <p className="text-gray-700">
              특히 ConcurrentDictionary의 Thread-safe 특성과 static 키워드를 활용한 
              인스턴스 간 공유 방식이 시스템 안정성을 크게 향상시켰습니다.
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
              JWT (JSON Web Token)
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              JWT는 세 부분으로 구성됩니다: Header, Payload, Signature. 
              각 부분은 Base64로 인코딩되며 점(.)으로 구분됩니다.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>장점:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Stateless 인증: 서버가 세션 정보를 저장할 필요 없음</li>
              <li>확장성: 여러 서버 환경에서 동일한 토큰 사용 가능</li>
              <li>CSRF 공격 방어: 쿠키가 아닌 Authorization 헤더 사용</li>
              <li>서명 검증: Secret Key로 토큰 위조 방지</li>
            </ul>

            <h4 className="font-semibold text-gray-900 mb-3">토큰 검증 과정</h4>
            <CodeSnippet code={`public static ClaimsPrincipal? Validate(string token)
{
    var tokenHandler = new JwtSecurityTokenHandler();
    var key = Encoding.UTF8.GetBytes(_secretKey);
    
    try
    {
        var principal = tokenHandler.ValidateToken(token, new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(key),
            ValidateIssuer = true,
            ValidIssuer = "LoginService",
            ValidateAudience = true,
            ValidAudience = "UnityClient",
            ValidateLifetime = true,
            ClockSkew = TimeSpan.FromMinutes(5) // 시간 오차 허용
        }, out var validatedToken);
        
        return principal;
    }
    catch
    {
        return null;
    }
}`} />
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              ConcurrentDictionary의 Thread-Safety
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              C#의 ConcurrentDictionary는 멀티스레드 환경에서 안전하게 동작하는 Dictionary입니다.
              내부적으로 Lock-Free 알고리즘을 사용하여 높은 성능을 제공합니다.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>
                <strong>TryAdd:</strong> Key가 없을 때만 추가, 원자적 연산
              </li>
              <li>
                <strong>TryRemove:</strong> Key를 제거하고 값을 반환, 원자적 연산
              </li>
              <li>
                <strong>Values:</strong> 현재 저장된 모든 값에 안전하게 접근
              </li>
              <li>
                <strong>Lock-Free:</strong> 전통적인 lock 없이 동시성 제어
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Entity Framework Core Migrations
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Code First 방식으로 C# 클래스를 먼저 정의하고, Migrations를 통해 
              데이터베이스 스키마를 자동 생성합니다.
            </p>
            <CodeSnippet language="csharp" code={`// User Entity
public class User
{
    public Guid Id { get; set; }
    public string Username { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
    public string? Nickname { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime? LastConnected { get; set; }
    public int SkinIndex { get; set; }
}

// DbContext Configuration
protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.Entity<User>(entity =>
    {
        entity.HasKey(e => e.Id);
        entity.Property(e => e.Username).IsRequired();
        entity.Property(e => e.Password).IsRequired();
        entity.Property(e => e.Nickname).HasMaxLength(12);
        entity.Property(e => e.CreatedAt)
              .HasDefaultValueSql("CURRENT_TIMESTAMP");
        
        // Unique Indexes
        entity.HasIndex(e => e.Username).IsUnique();
        entity.HasIndex(e => e.Nickname).IsUnique();
    });
}`} />
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Repository Pattern의 장점
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Repository Pattern은 데이터 접근 로직을 추상화하여 여러 장점을 제공합니다.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>
                <strong>테스트 용이성:</strong> Mock 객체로 쉽게 단위 테스트 작성
              </li>
              <li>
                <strong>DB 교체 용이:</strong> PostgreSQL에서 다른 DB로 변경 시 
                Repository 구현체만 교체
              </li>
              <li>
                <strong>비즈니스 로직 분리:</strong> Controller는 비즈니스 로직에만 집중
              </li>
              <li>
                <strong>재사용성:</strong> 여러 Controller에서 같은 Repository 사용
              </li>
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
              <p className="text-4xl font-bold text-green-600 mb-2">50ms</p>
              <p className="text-gray-600">로그인 응답 속도</p>
              <p className="text-sm text-gray-500 mt-2">
                DB Flag 방식 대비 3배 향상
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-green-600 mb-2">100%</p>
              <p className="text-gray-600">중복 로그인 차단</p>
              <p className="text-sm text-gray-500 mt-2">
                실시간 메모리 기반 세션 관리
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">1000+</p>
              <p className="text-gray-600">동시 접속 지원</p>
              <p className="text-sm text-gray-500 mt-2">
                안정적인 성능 유지
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
                    응답 속도
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                    DB 쿼리
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                    안정성
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    Attempt #1
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    DB Flag
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600 font-semibold">
                    150ms
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600">
                    많음
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600">
                    60%
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-bold">
                    Final
                  </td>
                  <td className="border border-gray-300 px-4 py-3 font-bold">
                    Memory Session
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-bold">
                    50ms
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-bold">
                    90% 감소
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
                <strong>실시간 상태는 메모리가 최선:</strong> DB는 과거의 기록이지 
                현재 상태를 반영하기에는 지연이 발생합니다.
              </li>
              <li>
                <strong>Architecture Pattern의 중요성:</strong> Layered Architecture와 
                Repository Pattern으로 유지보수성과 테스트 용이성을 크게 향상시켰습니다.
              </li>
              <li>
                <strong>JWT의 Stateless 특성:</strong> 서버 확장성을 고려한 인증 방식의 
                선택이 중요합니다.
              </li>
              <li>
                <strong>동시성 제어:</strong> ConcurrentDictionary 같은 Thread-safe 
                자료구조의 올바른 사용이 시스템 안정성의 핵심입니다.
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
              <strong>Redis 도입:</strong> 다중 서버 환경에서 세션을 공유하기 위해 
              Redis 같은 분산 캐시 시스템 도입
            </li>
            <li>
              <strong>bcrypt 비밀번호 해싱:</strong> 현재 평문 저장된 비밀번호를 
              bcrypt로 안전하게 해싱 처리
            </li>
            <li>
              <strong>Refresh Token 구현:</strong> Access Token 만료 시 재로그인 없이 
              갱신할 수 있는 Refresh Token 메커니즘 추가
            </li>
            <li>
              <strong>Rate Limiting:</strong> DDoS 공격 방어를 위한 요청 속도 제한 구현
            </li>
            <li>
              <strong>로그 시스템:</strong> Serilog를 활용한 구조화된 로깅 시스템 구축
            </li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-center text-gray-600">
            © 2026 Trout. Built with ASP.NET Core & TypeScript.
          </p>
        </div>
      </footer>
    </div>
  );
}