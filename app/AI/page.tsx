import FetchSite from '@/components/FetchSite';
import ImageTo3DViewer from '@/components/ImageTo3Dmodel';

export default function AI() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <FetchSite />
      <ImageTo3DViewer />
    </div>
  );
}