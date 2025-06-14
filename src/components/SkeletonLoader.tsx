
import { Skeleton } from "@/components/ui/skeleton";

interface SkeletonLoaderProps {
  type: "card" | "hero" | "testimonial";
}

const SkeletonLoader = ({ type }: SkeletonLoaderProps) => {
  if (type === "card") {
    return (
      <div className="bg-white rounded-2xl p-6 border">
        <Skeleton className="h-48 w-full rounded-lg mb-4" />
        <Skeleton className="h-4 w-20 mb-3" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-6 w-3/4 mb-4" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    );
  }

  if (type === "hero") {
    return (
      <div className="min-h-[90vh] flex items-center bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Skeleton className="h-12 w-80 bg-slate-700" />
              <Skeleton className="h-20 w-full bg-slate-700" />
              <Skeleton className="h-6 w-full bg-slate-700" />
              <Skeleton className="h-6 w-3/4 bg-slate-700" />
              <Skeleton className="h-12 w-40 bg-slate-700" />
            </div>
            <Skeleton className="h-[500px] w-full rounded-3xl bg-slate-700" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "testimonial") {
    return (
      <div className="bg-white rounded-3xl p-8 border">
        <div className="text-center">
          <Skeleton className="w-24 h-24 rounded-full mx-auto mb-6" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-3/4 mx-auto mb-6" />
          <Skeleton className="h-6 w-40 mx-auto mb-2" />
          <Skeleton className="h-4 w-32 mx-auto" />
        </div>
      </div>
    );
  }

  return null;
};

export default SkeletonLoader;
