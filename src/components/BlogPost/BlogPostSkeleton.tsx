export const BlogPostSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full animate-pulse py-12">
      <div className="h-10 w-64 mt-4 rounded-full bg-gray-300" />

      <div className="my-16 h-12 w-3/5 bg-gray-300" />

      <div className="my-24 w-full h-96 bg-gray-300" />

      {new Array(8).fill(null).map((_, i) => (
        <div className="mb-4 h-4 w-[720px] bg-gray-300" />
      ))}

      <br />
      <br />

      {new Array(8).fill(null).map((_, i) => (
        <div className="mb-4 h-4 w-[720px] bg-gray-300" />
      ))}
    </div>
  );
};
