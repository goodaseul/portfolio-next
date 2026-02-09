import CertificationSection from "@/app/intro/_components/CertificationSection";
import EducationSection from "@/app/intro/_components/EducationSection";
import InfoSection from "@/app/intro/_components/InfoSection";
import SkillSection from "@/app/intro/_components/SkillSection";
import WorkSection from "@/app/intro/_components/WorkSection";
import { getIntros } from "@/lib/queries/getIntros";

export default async function IntroPage() {
  const { info, work, certification, skill, education } = await getIntros();
  return (
    <>
      <section className="p-6 md:p-10">
        <InfoSection items={info} />
        <WorkSection items={work} />
        <CertificationSection items={certification} />
        <EducationSection items={education} />
        <SkillSection items={skill} />
      </section>
    </>
  );
}
