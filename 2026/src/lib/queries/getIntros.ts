import notion from "../notion";
import {
  CertificationItem,
  EducationItem,
  InfoItem,
  SkillItem,
  WorkItem,
} from "../types/models";
import {
  CertificationPage,
  EducationPage,
  InfoPage,
  SkillPage,
  WorkPage,
} from "../types/notion";

const INFO_DB = process.env.NOTION_DATABASE_INFO_ID!;
const WORK_DB = process.env.NOTION_DATABASE_WORK_ID!;
const CERTI_DB = process.env.NOTION_DATABASE_CERTI_ID!;
const SKILL_DB = process.env.NOTION_DATABASE_SKILL_ID!;
const EDU_DB = process.env.NOTION_DATABASE_EDU_ID!;

async function queryDb(database_id: string) {
  const res = await notion.databases.query({ database_id });
  return res.results;
}

function mapInfo(pages: InfoPage[]): InfoItem[] {
  return pages.map((page) => ({
    id: page.id,
    title: page.properties.Title.title[0]?.plain_text ?? "",
    info: page.properties.Info.rich_text[0]?.plain_text ?? "",
  }));
}

function mapWork(pages: WorkPage[]): WorkItem[] {
  return pages.map((page) => ({
    id: page.id,
    title: page.properties.Title.title[0]?.plain_text ?? "",
    date: page.properties.Date.rich_text[0]?.plain_text ?? "",
    located: page.properties.Located.rich_text[0]?.plain_text ?? "",
    description: page.properties.Description.rich_text[0]?.plain_text ?? "",
  }));
}

function mapCerti(pages: CertificationPage[]): CertificationItem[] {
  return pages.map((page) => ({
    id: page.id,
    title: page.properties.Title.title[0]?.plain_text ?? "",
    date: page.properties.Date.rich_text[0]?.plain_text ?? "",
    located: page.properties.Located.rich_text[0]?.plain_text ?? "",
    description: page.properties.Description.rich_text[0]?.plain_text ?? "",
  }));
}
function mapEdu(pages: EducationPage[]): EducationItem[] {
  return pages.map((page) => ({
    id: page.id,
    title: page.properties.Title.title[0]?.plain_text ?? "",
    date: page.properties.Date.rich_text[0]?.plain_text ?? "",
    description: page.properties.Description.rich_text[0]?.plain_text ?? "",
  }));
}

function mapSkill(pages: SkillPage[]): SkillItem[] {
  return [...pages]
    .sort((a, b) => {
      const aOrder = a.properties.Order.number ?? 0;
      const bOrder = b.properties.Order.number ?? 0;
      return aOrder - bOrder;
    })
    .map((page) => ({
      id: page.id,
      title: page.properties.Title.title[0]?.plain_text ?? "",
      isVisible: page.properties.IsVisible.checkbox ?? false,
      order: page.properties.Order.number ?? 0,
    }));
}

export async function getIntros() {
  try {
    const [infoRes, workRes, certificationRes, skillRes, educationRes] =
      await Promise.all([
        queryDb(INFO_DB),
        queryDb(WORK_DB),
        queryDb(CERTI_DB),
        queryDb(SKILL_DB),
        queryDb(EDU_DB),
      ]);

    const info = mapInfo(infoRes as InfoPage[]);
    const work = mapWork(workRes as WorkPage[]);
    const certification = mapCerti(certificationRes as CertificationPage[]);
    const education = mapEdu(educationRes as EducationPage[]);
    const skill = mapSkill(skillRes as SkillPage[]);

    return {
      info,
      work,
      certification,
      skill,
      education,
    };
  } catch (e) {
    console.error("Failed to fetch intros:", e);
    return { info: [], work: [], certification: [], skill: [], education: [] };
  }
}
