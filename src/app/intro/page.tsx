import ProgressBar from "@/components/common/ProgressBar";
import IntroContent from "./_components/IntroContent";
import Loading from "@/components/common/Loading";
import { Suspense } from "react";

export default function IntroPage() {
  return (
    <>
      <ProgressBar />
      <section className="p-6 md:p-10">
        <Suspense fallback={<Loading />}>
          <IntroContent />
        </Suspense>
      </section>
    </>
  );
}
