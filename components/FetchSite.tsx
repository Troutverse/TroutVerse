'use client';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';

type SiteInfo = {
  title?: string;
  description?: string;
  bodyText?: string;
  images?: string[];
  error?: string;
};

export default function FetchSite() {
  const [url, setUrl] = useState('');
  const [siteInfo, setSiteInfo] = useState<SiteInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [showAI, setShowAI] = useState(false);

  const fetchInfo = async () => {
    setLoading(true);
    setSiteInfo(null);
    try {
      const res = await fetch(`/api/fetchSiteInfo?url=${encodeURIComponent(url)}`);
      const data = await res.json();
      setSiteInfo(data);
    } catch (err) {
      setSiteInfo({ error: 'Failed to fetch data' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-4xl font-bold mb-4 text-center text-blue-700">🔍 AI Tools Showcase</h1>
      <p className="text-center text-gray-600 mb-6">
        이 페이지에서는 다양한 AI 도구들을 사용할 수 있습니다. 각 AI 도구를 클릭하면 해당 기능을 열어 실제로 테스트할 수 있습니다.
      </p>

      {!showAI && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowAI(true)}
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-4 rounded-lg shadow hover:from-green-500 hover:to-blue-600 transition text-lg"
          >
            🌐 사이트 정보 분석 AI 시작하기
          </button>
        </div>
      )}

      {showAI && (
        <div className="mt-8">
          <div className="flex gap-2 mb-6">
            <input
              type="text"
              placeholder="Enter site URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={fetchInfo}
              className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-lg shadow hover:from-blue-600 hover:to-indigo-600 transition"
            >
              Fetch
            </button>
          </div>

          {loading && (
            <div className="flex flex-col items-center justify-center py-10 animate-pulse">
              <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
              <p className="mt-4 text-lg text-gray-700">분석 중...</p>
            </div>
          )}

          {siteInfo && siteInfo.error && (
            <div className="p-4 bg-red-100 border border-red-300 text-red-700 rounded-lg mb-4">
              Error: {siteInfo.error}
            </div>
          )}

          {siteInfo && !siteInfo.error && (
            <div className="border rounded-lg p-6 bg-gray-50">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">{siteInfo.title}</h2>
              <p className="mb-3 text-gray-700 italic">{siteInfo.description}</p>
              <p className="mb-6 text-sm text-gray-600 leading-relaxed">{siteInfo.bodyText}</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {siteInfo.images?.slice(0, 9).map((img, idx) => (
                  <div key={idx} className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                    <img
                      src={img}
                      alt={`img-${idx}`}
                      className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}