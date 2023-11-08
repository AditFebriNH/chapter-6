const DetailsSkeleton = () => {
  return (
    <div className="relative h-[100vh] max-h-[100vh] w-full animate-pulse bg-gray-200">
      <div className="absolute bottom-1/3 left-10 z-20 flex w-7/12 translate-y-1/2 flex-col items-start gap-5 text-white">
        <div className="h-16 w-full bg-gray-300"></div>
        <div className="h-8 w-10/12 bg-gray-300"></div>
        <div className="h-36 w-full bg-gray-300"></div>
        <div className="h-8 w-8/12 bg-gray-300"></div>
        <div className="h-12 w-3/12 bg-gray-300"></div>
      </div>
    </div>
  );
};

export default DetailsSkeleton;
