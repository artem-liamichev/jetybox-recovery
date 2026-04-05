import { useTranslation } from "react-i18next";
import Application from "./Application";
import Footer from "./Footer";
import brandLanding from "../assets/project-cases/brand-landing.png";
import brandSocial from "../assets/project-cases/brand-social.png";
import brandGallery from "../assets/project-cases/brand-gallery.png";
import brandMobile from "../assets/project-cases/brand-mobile.png";
import brandCatalog from "../assets/project-cases/brand-catalog.png";
import glazingHero from "../assets/project-cases/glazing-hero.png";
import glazingCards from "../assets/project-cases/glazing-cards.png";
import glazingSite from "../assets/project-cases/glazing-site.png";
import kitchenHero from "../assets/project-cases/kitchen-hero.png";
import kitchenBenefits from "../assets/project-cases/kitchen-benefits.png";
import kitchenQuiz from "../assets/project-cases/kitchen-quiz.png";
import kitchenCrm from "../assets/project-cases/kitchen-crm.png";
import medicalProduct from "../assets/project-cases/medical-product.png";
import medicalQuiz from "../assets/project-cases/medical-quiz.png";
import recyclingBoard from "../assets/project-cases/recycling-board.png";
import recyclingLanding from "../assets/project-cases/recycling-landing.png";
import timeToTalkHero from "../assets/project-cases/time-to-talk-hero.png";
import repairLinks from "../assets/project-cases/repair-links.png";
import repairReport from "../assets/project-cases/repair-report.png";
import repairSummary from "../assets/project-cases/repair-summary.png";

const PROJECT_IMAGES = {
  1: [brandLanding, brandSocial, brandGallery, brandMobile, brandCatalog],
  2: [glazingHero, glazingCards, glazingSite],
  3: [kitchenHero, kitchenBenefits, kitchenQuiz, kitchenCrm],
  4: [medicalProduct, medicalQuiz],
  5: [recyclingBoard, recyclingLanding],
  6: [timeToTalkHero],
  7: [],
  8: [repairLinks, repairReport, repairSummary],
};

const PROJECT_CATEGORY_KEYS = {
  1: "projects.design",
  2: "projects.marketing",
  3: "projects.development",
  4: "projects.development",
  5: "projects.marketing",
  6: "projects.development",
  7: "projects.marketing",
  8: "projects.marketing",
};

function collectSequentialValues(source, baseKey) {
  const values = [];

  for (let index = 1; index <= 12; index += 1) {
    const value = source?.[`${baseKey}-${index}`];

    if (!value) {
      break;
    }

    values.push(value);
  }

  return values;
}

function collectProjectResults(bundle, projectId) {
  const section = bundle?.[`resultsProject${projectId}`];

  if (!section) {
    return [];
  }

  return Object.keys(section)
    .filter((key) => /^taskProject\d+(-\d+)?$/.test(key))
    .sort((left, right) => {
      const [leftMain, leftSub = "0"] = left.replace("taskProject", "").split("-");
      const [rightMain, rightSub = "0"] = right
        .replace("taskProject", "")
        .split("-");

      if (Number(leftMain) !== Number(rightMain)) {
        return Number(leftMain) - Number(rightMain);
      }

      return Number(leftSub) - Number(rightSub);
    })
    .map((key) => section[key]);
}

function isUrl(value) {
  return /^https?:\/\//i.test(value);
}

function ProjectCasePage({ projectId }) {
  const { t, i18n } = useTranslation();
  const bundle = i18n.getResourceBundle(i18n.resolvedLanguage, "translation");
  const projectImages = PROJECT_IMAGES[projectId];

  if (!projectImages) {
    return null;
  }

  const team = collectSequentialValues(bundle?.projects, `developedByProject${projectId}`);
  const results = collectProjectResults(bundle, projectId);
  const taskText = t(`projects.taskProject-${projectId}`);

  return (
    <>
      <main className="min-h-screen bg-[#2c2c2c] px-4 pb-0 pt-8 md:px-0">
        <section className="pt-[34px] md:mx-auto md:max-w-[1170px] md:pt-[14px] md:px-4">
          <a
            href="/projects"
            onClick={(event) => {
              event.preventDefault();
              window.history.pushState({}, "", "/projects");
              window.dispatchEvent(new PopStateEvent("popstate"));
              window.scrollTo({ top: 0, behavior: "auto" });
            }}
            className="hidden text-left font-[Helvetica] text-[14px] text-white md:inline-block"
          >
            {t("projectsPageLink", { defaultValue: "Наши проекты" })}
          </a>

          <h1 className="max-w-[320px] text-left font-[Plateia] text-[34px] uppercase leading-[0.95] text-white md:mt-16 md:mb-12 md:max-w-[1120px] md:text-4xl md:leading-[1.02]">
            {t(`projects.projectName-${projectId}`)}
          </h1>

          <div className="mt-7 space-y-6 text-left text-white md:mt-[44px] md:grid md:grid-cols-[minmax(0,620px)_minmax(0,320px)] md:items-start md:gap-x-[78px] md:space-y-0">
            <div className="md:max-w-[620px]">
              <h2 className="font-[Helvetica] text-sm text-white/70">
                {t("projects.task")}:
              </h2>
              <p className="mt-6 max-w-[330px] font-[Helvetica] text-[13px] leading-[1.35] text-white/85 md:max-w-[560px] md:text-[18px] md:leading-[1.45] md:text-white">
                {taskText}
              </p>
            </div>

            {team.length > 0 && (
              <div className="md:max-w-[320px]">
                <h2 className="font-[Helvetica] text-sm text-white/70 md:text-[16px] md:text-white">
                  {t("projects.developedBy")}:
                </h2>
                <div className="mt-6 flex flex-col gap-1 font-[Helvetica] text-[13px] leading-[1.25] text-white/85 md:text-[18px] md:leading-[1.45] md:text-white">
                  {team.map((member) => (
                    <p key={member}>{member}</p>
                  ))}
                </div>
              </div>
            )}
          </div>

          {projectImages.length > 0 && (
            <div className="mt-6 flex flex-col gap-3 md:mt-[58px] md:gap-5">
              {projectImages.map((projectImage, index) => (
                <div
                  key={`${projectId}-image-${index}`}
                  className="overflow-hidden rounded-[2px] border border-white/10 bg-[#1f1f1f]"
                >
                  <img
                    src={projectImage}
                    alt={`${t(`projects.projectName-${projectId}`)} ${index + 1}`}
                    className="h-auto w-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          <section className="mt-7 text-left">
            <h2 className="mb-2 text-left font-bold text-white">
              {t("projects.results")}:
            </h2>
            <ol className="flex list-decimal flex-col gap-2.5 pl-4 font-[Helvetica] text-[13px] leading-[1.35] text-white/85 marker:text-white/85">
              {results.map((item, index) => (
                <li key={`${projectId}-${index}`}>
                  {isUrl(item) ? (
                    <a
                      href={item}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-all underline underline-offset-2"
                    >
                      {item}
                    </a>
                  ) : (
                    item
                  )}
                </li>
              ))}
            </ol>
          </section>
        </section>
      </main>
      <div className="mt-[56px]">
        <Application />
      </div>
      <div className="hidden px-4 md:block">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white to-transparent md:m-auto md:max-w-[1170px]"></div>
      </div>
      <Footer />
    </>
  );
}

export default ProjectCasePage;
