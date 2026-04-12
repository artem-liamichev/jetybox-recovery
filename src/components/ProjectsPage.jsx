import { useTranslation } from "react-i18next";
import Footer from "./Footer";
import projectOption1 from "../assets/projects/project-option1-CMNKsZbD.webp";
import projectOption2 from "../assets/projects/project-option2-Rt5cQfm6.webp";
import projectOption3 from "../assets/projects/project-option3-C5FzJd0M.webp";
import projectOption4 from "../assets/projects/project-option4-B3HLh6op.webp";
import projectOption5 from "../assets/projects/project-option5-B80r92Gl.webp";
import projectOption6 from "../assets/projects/project-option6-BDHwvjz8.webp";
import projectOption7 from "../assets/projects/project-option7-B8FqdnDD.webp";
import projectOption8 from "../assets/projects/project-option8-BCmU23X-.webp";

function ProjectsPage() {
  const { i18n, t } = useTranslation();
  const isRu = i18n.resolvedLanguage === "ru";
  const navigateTo = (path) => {
    window.history.pushState({}, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const projects = [
    {
      id: 1,
      image: projectOption1,
      categoryKey: "projects.design",
      titleKey: "projects.projectName-1",
    },
    {
      id: 2,
      image: projectOption2,
      categoryKey: "projects.marketing",
      titleKey: "projects.projectName-2",
    },
    {
      id: 3,
      image: projectOption3,
      categoryKey: "projects.development",
      titleKey: "projects.projectName-3",
    },
    {
      id: 4,
      image: projectOption4,
      categoryKey: "projects.development",
      titleKey: "projects.projectName-4",
    },
    {
      id: 5,
      image: projectOption5,
      categoryKey: "projects.marketing",
      titleKey: "projects.projectName-5",
    },
    {
      id: 6,
      image: projectOption6,
      categoryKey: "projects.development",
      titleKey: "projects.projectName-6",
    },
    {
      id: 7,
      image: projectOption7,
      categoryKey: "projects.marketing",
      titleKey: "projects.projectName-7",
    },
    {
      id: 8,
      image: projectOption8,
      categoryKey: "projects.marketing",
      titleKey: "projects.projectName-8",
    },
  ];

  return (
    <main className="min-h-screen bg-[#2c2c2c] px-4 pb-8 pt-8 md:px-0 md:pb-0">
      <section className="pt-[34px] md:mx-auto md:max-w-[1108px] md:pt-[64px]">
        <h1 className="text-left font-[Plateia] text-[18px] uppercase leading-none tracking-[0.02em] text-white md:mb-[48px] md:text-[38px] md:leading-none">
          {isRu ? "Наши проекты" : "Our projects"}
        </h1>

        <div className="mt-5 grid gap-4 md:mt-0 md:flex md:flex-row md:flex-wrap md:gap-7">
          {projects.map((project) => (
            <button
              key={project.titleKey}
              type="button"
              onClick={() => navigateTo(`/projects/${project.id}`)}
              className="relative z-10 mr-9 min-h-[250px] w-full min-w-[300px] overflow-hidden rounded-[2px] border border-white/10 bg-[#1f1f1f] md:mr-0 md:h-[378px] md:w-[540px] md:min-w-[540px] md:max-w-[540px]"
            >
              <img
                src={project.image}
                alt={t(project.titleKey)}
                className="h-full min-h-[250px] w-full min-w-[300px] object-cover md:min-h-[378px] md:min-w-[540px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.88)] via-[rgba(10,10,10,0.2)] to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-2.5 text-left md:left-5 md:bottom-4 md:p-0">
                <span className="text-left font-[Helvetica] text-xl font-normal leading-6 text-white md:text-xl md:leading-6">
                  {t(project.categoryKey)}
                </span>
                <h2 className="text-left font-[Helvetica] text-2xl font-bold leading-[1.05] text-white md:text-2xl">
                  {t(project.titleKey)}
                </h2>
              </div>
            </button>
          ))}
        </div>
      </section>

      <div className="mt-10 md:mt-[62px]">
        <Footer />
      </div>
    </main>
  );
}

export default ProjectsPage;
