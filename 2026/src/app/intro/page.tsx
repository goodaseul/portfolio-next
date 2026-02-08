import CertificationSection from "@/components/intro/CertificationSection";
import EducationSection from "@/components/intro/EducationSection";
import InfoSection from "@/components/intro/InfoSection";
import WorkSection from "@/components/intro/WorkSection";
import { getIntros } from "@/lib/queries/getIntros";

export default async function IntroPage() {
  const { info, work, certification, education } = await getIntros();
  return (
    <>
      <div className="w-full h-1 bg-point"></div>
      <section className="p-6 md:p-10">
        <InfoSection items={info} />
        <WorkSection items={work} />
        <CertificationSection items={certification} />
        {/*  <SkillSection items={skill} />
         */}
        <EducationSection items={education} />
      </section>
    </>
  );
}
