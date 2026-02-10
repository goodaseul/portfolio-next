export default function Loading() {
  return (
    <div className="p-6 md:p-10">
      <div className="animate-pulse space-y-4">
        <div className="h-8 w-40 bg-gray-200 rounded" />
        <div className="h-40 bg-gray-200 rounded" />
        <div className="h-40 bg-gray-200 rounded" />
        <div className="h-40 bg-gray-200 rounded" />
      </div>
    </div>
  );
}
