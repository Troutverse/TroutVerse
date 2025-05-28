import Image from 'next/image';

export default function Profile() {
  return (
    <div className="flex flex-col items-center mt-8">
      <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-white">
        <Image
          src="/Profile.jpg" // public 폴더 안에 1.jpg 파일을 넣어주세요
          alt="Profile Picture"
          width={160}
          height={160}
          className="object-cover w-full h-full"
        />
      </div>
      <h2 className="text-2xl font-semibold mt-4">Trout</h2>
      <p className="text-gray-600">Frontend Developer</p>
    </div>
  );
}