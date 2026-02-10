"use client";

export default function GlobalError({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="p-10 text-center">
      <p className="text-sm text-gray-600">데이터를 불러오지 못했습니다.</p>
      <button
        onClick={reset}
        className="mt-4 px-3 py-1 text-sm bg-point text-black rounded"
      >
        다시 시도
      </button>
    </div>
  );
}
