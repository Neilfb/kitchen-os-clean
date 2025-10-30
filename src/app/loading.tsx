export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block w-16 h-16 border-4 border-product-fss-green border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-brand-medium-text font-medium">Loading...</p>
      </div>
    </div>
  );
}
