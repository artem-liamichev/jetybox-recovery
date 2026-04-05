import { useTranslation } from "react-i18next";
import instagram from "../assets/instagram-icon.svg";
import telegram from "../assets/tg-icon.svg";
import vkontakte from "../assets/vk-icon.svg";
import youtube from "../assets/youtube-icon.svg";
import projectOption1 from "../assets/projects/project-option1-CMNKsZbD.webp";
import projectOption2 from "../assets/projects/project-option2-Rt5cQfm6.webp";
import projectOption3 from "../assets/projects/project-option3-C5FzJd0M.webp";
import projectOption4 from "../assets/projects/project-option4-B3HLh6op.webp";
import projectOption5 from "../assets/projects/project-option5-B80r92Gl.webp";
import projectOption6 from "../assets/projects/project-option6-BDHwvjz8.webp";
import projectOption7 from "../assets/projects/project-option7-B8FqdnDD.webp";
import projectOption8 from "../assets/projects/project-option8-BCmU23X-.webp";

const LOGO_SRC = "/assets/logo-Jpnsoa0I.png";

function ProjectsPage() {
  const { i18n, t } = useTranslation();
  const isRu = i18n.resolvedLanguage === "ru";

  const projects = [
    {
      image: projectOption1,
      categoryKey: "projects.design",
      titleKey: "projects.projectName-1",
    },
    {
      image: projectOption2,
      categoryKey: "projects.marketing",
      titleKey: "projects.projectName-2",
    },
    {
      image: projectOption3,
      categoryKey: "projects.development",
      titleKey: "projects.projectName-3",
    },
    {
      image: projectOption4,
      categoryKey: "projects.development",
      titleKey: "projects.projectName-4",
    },
    {
      image: projectOption5,
      categoryKey: "projects.marketing",
      titleKey: "projects.projectName-5",
    },
    {
      image: projectOption6,
      categoryKey: "projects.development",
      titleKey: "projects.projectName-6",
    },
    {
      image: projectOption7,
      categoryKey: "projects.marketing",
      titleKey: "projects.projectName-7",
    },
    {
      image: projectOption8,
      categoryKey: "projects.marketing",
      titleKey: "projects.projectName-8",
    },
  ];

  return (
    <main className="min-h-screen bg-[#2c2c2c] px-4 pb-8 pt-8 md:px-6">
      <section className="pt-[34px] md:mx-auto md:max-w-[1170px] md:pt-[72px]">
        <h1 className="text-left font-[Plateia] text-[18px] uppercase leading-none tracking-[0.02em] text-white md:text-[40px]">
          {isRu ? "Наши проекты" : "Our projects"}
        </h1>

        <div className="mt-5 grid gap-4 md:mt-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.titleKey}
              className="relative z-10 mr-9 min-h-[250px] w-full min-w-[300px] overflow-hidden rounded-[2px] border border-white/10 bg-[#1f1f1f] md:mr-0 md:min-w-0"
            >
              <img
                src={project.image}
                alt={t(project.titleKey)}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.88)] via-[rgba(10,10,10,0.2)] to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-2.5 text-left md:p-4">
                <span className="text-left font-[Helvetica] text-base leading-none text-white/70">
                  {t(project.categoryKey)}
                </span>
                <h2 className="text-left font-[Helvetica] text-2xl font-bold leading-[1.05] text-white">
                  {t(project.titleKey)}
                </h2>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="mt-10 border-t border-white/10 pt-5 md:mx-auto md:mt-16 md:max-w-[1170px]">
        <img
          src={LOGO_SRC}
          alt="Jetybox"
          className="h-5 w-auto object-contain md:h-9"
        />
        <p className="mt-2 font-['Proxima-Nova'] text-[8px] leading-none text-white/70 md:text-sm">
          {t("dedugin")}
        </p>
        <div className="mt-3 flex flex-row gap-[6px] md:mt-5 md:gap-[10px]">
          <a
            href="https://www.instagram.com/jetybox"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button flex h-[18px] w-[18px] items-center justify-center rounded-[2px] bg-white md:h-[26px] md:w-[26px]"
          >
            <img src={instagram} alt="Instagram" className="h-2.5 w-2.5 md:h-4 md:w-4" />
          </a>
          <a
            href="https://vk.com/jetybox"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button flex h-[18px] w-[18px] items-center justify-center rounded-[2px] bg-white md:h-[26px] md:w-[26px]"
          >
            <img src={vkontakte} alt="VK" className="h-2.5 w-2.5 md:h-4 md:w-4" />
          </a>
          <a
            href="https://t.me/jetybox"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button flex h-[18px] w-[18px] items-center justify-center rounded-[2px] bg-white md:h-[26px] md:w-[26px]"
          >
            <img src={telegram} alt="Telegram" className="h-2.5 w-2.5 md:h-4 md:w-4" />
          </a>
          <a
            href="https://www.youtube.com/@jetybox"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button flex h-[18px] w-[18px] items-center justify-center rounded-[2px] bg-white md:h-[26px] md:w-[26px]"
          >
            <img src={youtube} alt="YouTube" className="h-2.5 w-2.5 md:h-4 md:w-4" />
          </a>
        </div>
      </footer>
    </main>
  );
}

export default ProjectsPage;
