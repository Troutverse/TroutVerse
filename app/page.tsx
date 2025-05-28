import Profile from "@/components/Profile";

export default function HomePage() {
  return (
    <section className="text-center mt-8">
      <h1 className="text-4xl font-bold mb-4">Hi, I&apos;m Trout</h1>
      <Profile />
      <p className="mb-4">Frontend Developer | React | Next.js | TypeScript</p>
      <p>Welcome to my portfolio website!</p>
    </section>
  );
}
