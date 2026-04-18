import { useEffect, useState } from "react";
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
  9: [],
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
  9: "projects.marketing",
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

function renderTextWithLinks(value) {
  const parts = String(value).split(/(https?:\/\/[^\s]+)/g);

  return parts.map((part, index) => {
    if (!/^https?:\/\//i.test(part)) {
      return part;
    }

    const url = part.replace(/[.,;:)]$/, "");
    const suffix = part.slice(url.length);

    return (
      <span key={`${url}-${index}`}>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="break-all underline underline-offset-2"
        >
          {url}
        </a>
        {suffix}
      </span>
    );
  });
}

const PADEL_LINKS = {
  padelclub: "https://t.me/padelclub_ru",
  padelFriends: "https://t.me/padelfriends",
  padelBay: "https://padel-bay.com/rus",
  reelOne: "https://www.instagram.com/reel/DNDvt8IR8ft/",
  reelTwo: "https://www.instagram.com/reel/DMckf6vIk59/",
  reelThree: "https://www.instagram.com/reel/DL5Q3bkIUML/",
  avrorapadel: "https://avrorapadel.ru/",
  custom: "https://jetypadel.ru/kastom-padel",
  analyticsVideo: "https://www.instagram.com/p/DHTmHK8IdX2/",
  jetyboxProjects: "https://jetybox.com/projects",
  sportReel:
    "https://drive.google.com/file/d/1r4EeiMT5vNkWwkIfZjsXyHcNo3dzP-4X/view?usp=drive_link",
  padelVideo:
    "https://drive.google.com/file/d/1ls-Bv8slrHt3ErqtBzJgLftL44_GofWA/view?usp=sharing",
  allVideos:
    "https://docs.google.com/document/d/1y0UIiCDWI1yNp7hNEHkY3BZsF_sT9rafKYQJ-WPp5V4/edit?tab=t.0",
  jetypadel: "https://jetypadel.ru/",
};

const PADEL_MEDIA = {
  padelProOne:
    "https://static.tildacdn.com/tild3830-6230-4934-a631-366661643161/image.png",
  padelProTwo:
    "https://static.tildacdn.com/tild3036-3739-4338-b962-633464336432/image.png",
  analytics:
    "https://static.tildacdn.com/tild3138-3463-4162-a635-353738306436/3535.png",
  sales:
    "https://static.tildacdn.com/tild3732-3561-4266-b536-666331336263/image_2024-07-23_11-.png",
};

function ExternalLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#D69B56] underline underline-offset-4 transition hover:text-[#FDDFBC]"
    >
      {children}
    </a>
  );
}

function ImageLightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [image, onClose]);

  if (!image) {
    return null;
  }

  return (
    <button
      type="button"
      className="fixed inset-0 z-[1200] flex cursor-zoom-out items-center justify-center bg-black/90 p-4 backdrop-blur-sm md:p-8"
      onClick={onClose}
      aria-label="Close image"
    >
      <img
        src={image.src}
        alt={image.alt}
        className="max-h-full max-w-full rounded-[2px] object-contain shadow-2xl"
      />
    </button>
  );
}

function ProjectImage({ src, alt, className, onOpen }) {
  return (
    <button
      type="button"
      className="block cursor-zoom-in text-left"
      onClick={() => onOpen({ src, alt })}
      aria-label={alt}
    >
      <img src={src} alt={alt} className={className} />
    </button>
  );
}

function PadelSection({ title, children }) {
  return (
    <section className="border-t border-white/10 py-8 md:py-10">
      <h2 className="font-[Helvetica] text-[28px] font-bold leading-[1.08] text-white md:text-[42px]">
        {title}
      </h2>
      <div className="mt-5 flex flex-col gap-4 font-[Helvetica] text-[16px] leading-[1.55] text-white/82 md:text-[22px] md:leading-[1.45]">
        {children}
      </div>
    </section>
  );
}

function PadelCasePage() {
  const { i18n } = useTranslation();
  const [lightboxImage, setLightboxImage] = useState(null);
  const isEnglish = i18n.resolvedLanguage === "en";

  const navigateBack = (event) => {
    event.preventDefault();
    window.history.pushState({}, "", "/projects");
    window.dispatchEvent(new PopStateEvent("popstate"));
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  if (isEnglish) {
    return (
      <>
        <main className="bg-[#2c2c2c] px-4 pb-0 pt-0 text-left md:px-0 md:pt-8">
          <article className="mx-auto max-w-[960px] pb-10 pt-0 md:px-4 md:pt-[14px]">
            <a
              href="/projects"
              onClick={navigateBack}
              className="hidden font-[Helvetica] text-[14px] text-white/70 transition hover:text-white md:inline-block"
            >
              Our projects
            </a>

            <header className="py-10 md:py-16">
              <h1 className="font-[Helvetica] text-[36px] font-bold leading-[1.04] text-white md:text-[62px]">
                JetyPadel Cases: marketing, analytics, and growth for padel projects
              </h1>
            </header>

            <div className="mb-6 space-y-6 text-left text-white md:mb-10 md:grid md:grid-cols-[minmax(0,620px)_minmax(0,320px)] md:items-start md:gap-x-[78px] md:space-y-0">
              <div className="md:max-w-[620px]">
                <h2 className="font-[Helvetica] text-sm text-white/70">
                  Task:
                </h2>
                <p className="mt-6 max-w-[330px] font-[Helvetica] text-[13px] leading-[1.35] text-white/85 md:max-w-[560px] md:text-[18px] md:leading-[1.45] md:text-white">
                  Build systematic promotion for JetyPadel and related padel projects: audits for communities and clubs, lead generation, websites, content, equipment customization, and end-to-end analytics.
                </p>
              </div>

              <div className="md:max-w-[320px]">
                <h2 className="font-[Helvetica] text-sm text-white/70 md:text-[16px] md:text-white">
                  Developed by:
                </h2>
                <div className="mt-6 flex flex-col gap-1 font-[Helvetica] text-[13px] leading-[1.25] text-white/85 md:text-[18px] md:leading-[1.45] md:text-white">
                  <p>JetyBox</p>
                  <p>JetyPadel</p>
                </div>
              </div>
            </div>

            <PadelSection title="JetyPadel cases: how we grow projects in the padel industry">
              <p>
                JetyPadel is marketing, analytics, and growth for padel projects. We work with clubs, communities, federations, developers, and equipment brands, building systematic promotion in the padel niche.
              </p>
              <p>Below are selected implemented cases and work directions.</p>
            </PadelSection>

            <PadelSection title="Marketing audits for padel communities and clubs">
              <p>
                We conducted marketing audits and prepared growth, content, and monetization recommendations for the following projects:
              </p>
              <ul className="flex list-disc flex-col gap-3 pl-5">
                <li>
                  <strong>Padel Community</strong> - Telegram community:{" "}
                  <ExternalLink href={PADEL_LINKS.padelclub}>
                    padelclub_ru
                  </ExternalLink>
                </li>
                <li>
                  <strong>WARSAW PADEL BANDA</strong> - Polish padel community
                </li>
                <li>
                  <strong>Padel Friends Community (Luzhniki)</strong>:{" "}
                  <ExternalLink href={PADEL_LINKS.padelFriends}>
                    padelfriends
                  </ExternalLink>
                </li>
                <li>
                  <strong>Padel Bay</strong> - padel club:{" "}
                  <ExternalLink href={PADEL_LINKS.padelBay}>
                    padel-bay.com/rus
                  </ExternalLink>
                </li>
              </ul>
              <p>As part of the audits, we analyzed:</p>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li>growth points</li>
                <li>content and engagement</li>
                <li>acquisition channels</li>
                <li>monetization and partnerships</li>
              </ul>
            </PadelSection>

            <PadelSection title="Lead generation for court construction and installation">
              <p>
                For <strong>NevaSport</strong>, we provide qualified <strong>leads for padel court construction and installation</strong>.
              </p>
              <p>The work includes:</p>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li>attracting entrepreneurs and investors</li>
                <li>filtering requests</li>
                <li>transferring leads</li>
                <li>channel analytics and optimization</li>
              </ul>
              <p>This direction is especially relevant for regional markets.</p>
            </PadelSection>

            <PadelSection title="Content and media for padel clubs">
              <p>
                We implemented a <strong>joint content project</strong> for the <strong>PadelPro</strong> padel club in Saint Petersburg:
              </p>
              <ProjectImage
                src={PADEL_MEDIA.padelProOne}
                alt="Content for PadelPro padel club"
                className="w-[196px] max-w-full rounded-[2px] border border-white/10 object-cover"
                onOpen={setLightboxImage}
              />
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li>video production</li>
                <li>social media content</li>
                <li>engagement work</li>
                <li>increasing club awareness</li>
              </ul>
              <ProjectImage
                src={PADEL_MEDIA.padelProTwo}
                alt="Media for PadelPro padel club"
                className="w-[520px] max-w-full rounded-[2px] border border-white/10 object-cover"
                onOpen={setLightboxImage}
              />
              <p>The content became the starting point for cooperation with the club.</p>
              <p>
                Examples:{" "}
                <ExternalLink href={PADEL_LINKS.reelOne}>Video</ExternalLink>,{" "}
                <ExternalLink href={PADEL_LINKS.reelTwo}>Video</ExternalLink>,{" "}
                <ExternalLink href={PADEL_LINKS.reelThree}>Video</ExternalLink>
              </p>
            </PadelSection>

            <PadelSection title="Website creation for padel clubs">
              <p>
                For <strong>AvroraPadel</strong>, we developed a launch website for a club in Saint Petersburg.
              </p>
              <p>
                <strong>
                  <ExternalLink href={PADEL_LINKS.avrorapadel}>
                    avrorapadel.ru
                  </ExternalLink>
                </strong>
              </p>
              <p>Tasks:</p>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li>club presentation</li>
                <li>attracting first clients</li>
                <li>preparing for paid traffic</li>
                <li>building the SEO foundation</li>
              </ul>
              <p>The website became the foundation for further marketing.</p>
            </PadelSection>

            <PadelSection title="Customization of rackets and equipment">
              <p>JetyPadel also works with:</p>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li>
                  <strong>individual customization</strong>
                </li>
                <li>
                  <strong>wholesale production</strong>
                </li>
                <li>branding for clubs, academies, and tournaments</li>
              </ul>
              <p>We work together with partners on:</p>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li>rackets</li>
                <li>equipment</li>
                <li>accessories</li>
                <li>corporate and club batches</li>
              </ul>
              <p>
                Customization is used as a marketing and image-building tool.
              </p>
              <p>
                More details on the website:{" "}
                <ExternalLink href={PADEL_LINKS.custom}>
                  jetypadel.ru/kastom-padel
                </ExternalLink>
              </p>
            </PadelSection>

            <PadelSection title="End-to-end analytics for the project">
              <p>Marketing department report</p>
              <ProjectImage
                src={PADEL_MEDIA.analytics}
                alt="JetyPadel marketing department report"
                className="w-full rounded-[2px] border border-white/10 object-cover"
                onOpen={setLightboxImage}
              />
              <div className="h-px w-full bg-white/20" />
              <p>Sales department report</p>
              <ProjectImage
                src={PADEL_MEDIA.sales}
                alt="JetyPadel sales department report"
                className="w-full rounded-[2px] border border-white/10 object-cover"
                onOpen={setLightboxImage}
              />
              <p>
                <ExternalLink href={PADEL_LINKS.analyticsVideo}>
                  Video - End-to-end Analytics
                </ExternalLink>
              </p>
              <p>
                <strong>Main JetyBox website with tasks/results:</strong>
                <br />
                <ExternalLink href={PADEL_LINKS.jetyboxProjects}>
                  jetybox.com/projects
                </ExternalLink>
              </p>
              <p>Examples of content we have already created:</p>
              <p>
                <ExternalLink href={PADEL_LINKS.sportReel}>
                  Video - Sports Reel
                </ExternalLink>
                <br />
                <ExternalLink href={PADEL_LINKS.padelVideo}>
                  Video - Padel
                </ExternalLink>
              </p>
              <p>
                <ExternalLink href={PADEL_LINKS.allVideos}>All videos</ExternalLink>
              </p>
            </PadelSection>

            <PadelSection title="If you are growing a project in the padel industry and want:">
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li>more clients</li>
                <li>clear marketing</li>
                <li>strong content</li>
                <li>systematic growth</li>
              </ul>
              <p>
                The{" "}
                <strong>
                  <ExternalLink href={PADEL_LINKS.jetypadel}>JetyPadel</ExternalLink>
                </strong>{" "}
                team is ready to join at any stage.
              </p>
              <p>
                Submit a request at{" "}
                <strong>
                  <ExternalLink href={PADEL_LINKS.jetypadel}>jetypadel.ru</ExternalLink>
                </strong>{" "}
                and we will discuss the cooperation format.
              </p>
            </PadelSection>

            <section className="border-t border-white/10 py-8 text-left md:py-10">
              <h2 className="mb-4 text-left font-bold text-white md:text-[28px]">
                Results:
              </h2>
              <ol className="flex list-decimal flex-col gap-2.5 pl-4 font-[Helvetica] text-[13px] leading-[1.35] text-white/85 marker:text-white/85 md:text-[18px] md:leading-[1.45]">
                <li>Conducted marketing audits for padel communities and clubs, including Telegram communities, Padel Friends Community, and Padel Bay.</li>
                <li>Organized lead generation for padel court construction and installation for NevaSport.</li>
                <li>Launched a content direction for PadelPro: video production, social media materials, and engagement work.</li>
                <li>Developed a launch website for AvroraPadel and prepared it for paid traffic.</li>
                <li>Packaged racket and equipment customization as a marketing and image-building tool.</li>
                <li>Connected end-to-end analytics and collected a base of materials, links, and content examples for further project growth.</li>
              </ol>
            </section>
          </article>
        </main>
        <div className="mt-[56px]">
          <Application />
        </div>
        <div className="hidden px-4 md:block">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white to-transparent md:m-auto md:max-w-[1170px]"></div>
        </div>
        <Footer />
        <ImageLightbox
          image={lightboxImage}
          onClose={() => setLightboxImage(null)}
        />
      </>
    );
  }

  return (
    <>
      <main className="bg-[#2c2c2c] px-4 pb-0 pt-0 text-left md:px-0 md:pt-8">
        <article className="mx-auto max-w-[960px] pb-10 pt-0 md:px-4 md:pt-[14px]">
          <a
            href="/projects"
            onClick={navigateBack}
            className="hidden font-[Helvetica] text-[14px] text-white/70 transition hover:text-white md:inline-block"
          >
            Наши проекты
          </a>

          <header className="py-10 md:py-16">
            <h1 className="font-[Helvetica] text-[36px] font-bold leading-[1.04] text-white md:text-[62px]">
              Кейсы JetyPadel — маркетинг, аналитика и рост проектов в паделе
            </h1>
          </header>

          <div className="mb-6 space-y-6 text-left text-white md:mb-10 md:grid md:grid-cols-[minmax(0,620px)_minmax(0,320px)] md:items-start md:gap-x-[78px] md:space-y-0">
            <div className="md:max-w-[620px]">
              <h2 className="font-[Helvetica] text-sm text-white/70">
                Задача:
              </h2>
              <p className="mt-6 max-w-[330px] font-[Helvetica] text-[13px] leading-[1.35] text-white/85 md:max-w-[560px] md:text-[18px] md:leading-[1.45] md:text-white">
                Выстроить системное продвижение JetyPadel и связанных падел-проектов: аудиты сообществ и клубов, лидогенерация, сайты, контент, кастомизация экипировки и сквозная аналитика.
              </p>
            </div>

            <div className="md:max-w-[320px]">
              <h2 className="font-[Helvetica] text-sm text-white/70 md:text-[16px] md:text-white">
                Разработал:
              </h2>
              <div className="mt-6 flex flex-col gap-1 font-[Helvetica] text-[13px] leading-[1.25] text-white/85 md:text-[18px] md:leading-[1.45] md:text-white">
                <p>JetyBox</p>
                <p>JetyPadel</p>
              </div>
            </div>
          </div>

          <PadelSection title="Кейсы JetyPadel: как мы развиваем проекты в индустрии падела">
            <p>
              JetyPadel — это маркетинг, аналитика и рост для падел-проектов. Мы
              работаем с клубами, сообществами, федерациями, девелоперами и
              брендами экипировки, выстраивая системное продвижение в нише
              падела.
            </p>
            <p>Ниже — часть реализованных кейсов и направлений работы.</p>
          </PadelSection>

          <PadelSection title="Маркетинговые аудиты падел-сообществ и клубов">
            <p>
              Мы провели маркетинговые аудиты и дали рекомендации по росту,
              контенту и монетизации для следующих проектов:
            </p>
            <ul className="flex list-disc flex-col gap-3 pl-5">
              <li>
                <strong>Сообщество Падел</strong> — Telegram-сообщество:{" "}
                <ExternalLink href={PADEL_LINKS.padelclub}>
                  padelclub_ru
                </ExternalLink>
              </li>
              <li>
                <strong>WARSAW PADEL BANDA</strong> — польское падел-сообщество
              </li>
              <li>
                <strong>Padel Friends Community (Лужники)</strong>:{" "}
                <ExternalLink href={PADEL_LINKS.padelFriends}>
                  padelfriends
                </ExternalLink>
              </li>
              <li>
                <strong>Padel Bay</strong> — падел-клуб:{" "}
                <ExternalLink href={PADEL_LINKS.padelBay}>
                  padel-bay.com/rus
                </ExternalLink>
              </li>
            </ul>
            <p>В рамках аудитов:</p>
            <ul className="flex list-disc flex-col gap-2 pl-5">
              <li>анализировали точки роста</li>
              <li>контент и вовлечённость</li>
              <li>каналы привлечения</li>
              <li>монетизацию и партнёрства</li>
            </ul>
          </PadelSection>

          <PadelSection title="Лидогенерация на строительство и монтаж кортов">
            <p>
              Для организации <strong>НеваСпорт</strong> мы обеспечиваем
              передачу <strong>заявок на строительство и монтаж падел-кортов</strong>.
            </p>
            <p>Работа включает:</p>
            <ul className="flex list-disc flex-col gap-2 pl-5">
              <li>привлечение предпринимателей и инвесторов</li>
              <li>фильтрацию заявок</li>
              <li>передачу лидов</li>
              <li>аналитику и оптимизацию каналов</li>
            </ul>
            <p>Это направление особенно актуально для регионов.</p>
          </PadelSection>

          <PadelSection title="Контент и медиа для падел-клубов">
            <p>
              Мы реализовали <strong>совместный контент-проект</strong> для
              падел-клуба <strong>PadelPro</strong> в Санкт-Петербурге:
            </p>
            <ProjectImage
              src={PADEL_MEDIA.padelProOne}
              alt="Контент для падел-клуба PadelPro"
              className="w-[196px] max-w-full rounded-[2px] border border-white/10 object-cover"
              onOpen={setLightboxImage}
            />
            <ul className="flex list-disc flex-col gap-2 pl-5">
              <li>видео-съёмки</li>
              <li>контент для соцсетей</li>
              <li>работа с вовлечённостью</li>
              <li>усиление узнаваемости клуба</li>
            </ul>
            <ProjectImage
              src={PADEL_MEDIA.padelProTwo}
              alt="Медиа для падел-клуба PadelPro"
              className="w-[520px] max-w-full rounded-[2px] border border-white/10 object-cover"
              onOpen={setLightboxImage}
            />
            <p>Контент стал началом сотрудничества с клубом.</p>
            <p>
              Посмотреть примеры:{" "}
              <ExternalLink href={PADEL_LINKS.reelOne}>Видео</ExternalLink>,{" "}
              <ExternalLink href={PADEL_LINKS.reelTwo}>Видео</ExternalLink>,{" "}
              <ExternalLink href={PADEL_LINKS.reelThree}>Видео</ExternalLink>
            </p>
          </PadelSection>

          <PadelSection title="Создание сайтов для падел-клубов">
            <p>
              Для проекта <strong>АврораПадел</strong> мы разработали сайт под
              запуск клуба в Санкт-Петербурге.
            </p>
            <p>
              <strong>
                <ExternalLink href={PADEL_LINKS.avrorapadel}>
                  avrorapadel.ru
                </ExternalLink>
              </strong>
            </p>
            <p>Задачи:</p>
            <ul className="flex list-disc flex-col gap-2 pl-5">
              <li>презентация клуба</li>
              <li>привлечение первых клиентов</li>
              <li>подготовка к рекламному трафику</li>
              <li>закладка SEO-фундамента</li>
            </ul>
            <p>Сайт стал основой для дальнейшего маркетинга.</p>
          </PadelSection>

          <PadelSection title="Кастомизация ракеток и экипировки">
            <p>JetyPadel также занимается:</p>
            <ul className="flex list-disc flex-col gap-2 pl-5">
              <li>
                <strong>индивидуальной кастомизацией</strong>
              </li>
              <li>
                <strong>оптовым производством</strong>
              </li>
              <li>брендированием для клубов, академий и турниров</li>
            </ul>
            <p>Работаем совместно с партнёрами:</p>
            <ul className="flex list-disc flex-col gap-2 pl-5">
              <li>ракетки</li>
              <li>экипировка</li>
              <li>аксессуары</li>
              <li>корпоративные и клубные партии</li>
            </ul>
            <p>
              Кастомизация используется как маркетинговый и имиджевый
              инструмент.
            </p>
            <p>
              Подробнее на сайте:{" "}
              <ExternalLink href={PADEL_LINKS.custom}>
                jetypadel.ru/kastom-padel
              </ExternalLink>
            </p>
          </PadelSection>

          <PadelSection title="Сквозная аналитика для проекта">
            <p>Отчет отдела маркетинга</p>
            <ProjectImage
              src={PADEL_MEDIA.analytics}
              alt="Отчет отдела маркетинга JetyPadel"
              className="w-full rounded-[2px] border border-white/10 object-cover"
              onOpen={setLightboxImage}
            />
            <div className="h-px w-full bg-white/20" />
            <p>Отчет отдела продаж</p>
            <ProjectImage
              src={PADEL_MEDIA.sales}
              alt="Отчет отдела продаж JetyPadel"
              className="w-full rounded-[2px] border border-white/10 object-cover"
              onOpen={setLightboxImage}
            />
            <p>
              <ExternalLink href={PADEL_LINKS.analyticsVideo}>
                Видео - Сквозная Аналитика
              </ExternalLink>
            </p>
            <p>
              <strong>Основной сайт jetybox, где указаны задачи/результаты:</strong>
              <br />
              <ExternalLink href={PADEL_LINKS.jetyboxProjects}>
                jetybox.com/projects
              </ExternalLink>
            </p>
            <p>Примеры контента, которые мы уже делали:</p>
            <p>
              <ExternalLink href={PADEL_LINKS.sportReel}>
                Видео - Спортивный рил
              </ExternalLink>
              <br />
              <ExternalLink href={PADEL_LINKS.padelVideo}>
                Видео - Падел
              </ExternalLink>
            </p>
            <p>
              <ExternalLink href={PADEL_LINKS.allVideos}>Все видео</ExternalLink>
            </p>
          </PadelSection>

          <PadelSection title="Если вы развиваете проект в индустрии падела и хотите:">
            <ul className="flex list-disc flex-col gap-2 pl-5">
              <li>больше клиентов</li>
              <li>понятный маркетинг</li>
              <li>сильный контент</li>
              <li>системный рост</li>
            </ul>
            <p>
              Команда{" "}
              <strong>
                <ExternalLink href={PADEL_LINKS.jetypadel}>JetyPadel</ExternalLink>
              </strong>{" "}
              готова подключиться на любом этапе.
            </p>
            <p>
              Оставьте заявку на{" "}
              <strong>
                <ExternalLink href={PADEL_LINKS.jetypadel}>jetypadel.ru</ExternalLink>
              </strong>{" "}
              — обсудим формат сотрудничества.
            </p>
          </PadelSection>

          <section className="border-t border-white/10 py-8 text-left md:py-10">
            <h2 className="mb-4 text-left font-bold text-white md:text-[28px]">
              Результаты:
            </h2>
            <ol className="flex list-decimal flex-col gap-2.5 pl-4 font-[Helvetica] text-[13px] leading-[1.35] text-white/85 marker:text-white/85 md:text-[18px] md:leading-[1.45]">
              <li>Провели маркетинговые аудиты падел-сообществ и клубов, включая Telegram-сообщества, Padel Friends Community и Padel Bay.</li>
              <li>Организовали лидогенерацию на строительство и монтаж падел-кортов для НеваСпорт.</li>
              <li>Запустили контентное направление для PadelPro: видео-съёмки, материалы для соцсетей и работа с вовлечённостью.</li>
              <li>Разработали сайт для АврораПадел под запуск клуба и подготовку к рекламному трафику.</li>
              <li>Упаковали направление кастомизации ракеток и экипировки как маркетинговый и имиджевый инструмент.</li>
              <li>Подключили сквозную аналитику и собрали базу материалов, ссылок и примеров контента для дальнейшего роста проекта.</li>
            </ol>
          </section>
        </article>
      </main>
      <div className="mt-[56px]">
        <Application />
      </div>
      <div className="hidden px-4 md:block">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white to-transparent md:m-auto md:max-w-[1170px]"></div>
      </div>
      <Footer />
      <ImageLightbox
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </>
  );
}

function ProjectCasePage({ projectId }) {
  const { t, i18n } = useTranslation();
  const [lightboxImage, setLightboxImage] = useState(null);
  const bundle = i18n.getResourceBundle(i18n.resolvedLanguage, "translation");
  const projectImages = PROJECT_IMAGES[projectId];

  if (!projectImages) {
    return null;
  }

  if (projectId === 9) {
    return <PadelCasePage />;
  }

  const team = collectSequentialValues(bundle?.projects, `developedByProject${projectId}`);
  const displayedTeam = team.length > 0 ? team : ["JetyBox"];
  const results = collectProjectResults(bundle, projectId);
  const taskText = t(`projects.taskProject-${projectId}`);

  return (
    <>
      <main className="min-h-screen bg-[#2c2c2c] px-4 pb-0 pt-0 md:pt-8 md:px-0">
        <section className="pt-0 md:mx-auto md:max-w-[1170px] md:pt-[14px] md:px-4">
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

          <h1 className="mt-10 max-w-[320px] text-left font-[Plateia] text-[34px] uppercase leading-[0.95] text-white md:mt-16 md:mb-12 md:max-w-[1120px] md:text-4xl md:leading-[1.02]">
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

            <div className="md:max-w-[320px]">
              <h2 className="font-[Helvetica] text-sm text-white/70 md:text-[16px] md:text-white">
                {t("projects.developedBy")}:
              </h2>
              <div className="mt-6 flex flex-col gap-1 font-[Helvetica] text-[13px] leading-[1.25] text-white/85 md:text-[18px] md:leading-[1.45] md:text-white">
                {displayedTeam.map((member) => (
                  <p key={member}>{member}</p>
                ))}
              </div>
            </div>
          </div>

          {projectImages.length > 0 && (
            <div className="mt-6 flex flex-col gap-3 md:mt-[58px] md:gap-5">
              {projectImages.map((projectImage, index) => (
                <div
                  key={`${projectId}-image-${index}`}
                  className="overflow-hidden rounded-[2px] border border-white/10 bg-[#1f1f1f]"
                >
                  <ProjectImage
                    src={projectImage}
                    alt={`${t(`projects.projectName-${projectId}`)} ${index + 1}`}
                    className="h-auto w-full object-cover"
                    onOpen={setLightboxImage}
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
                  {renderTextWithLinks(item)}
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
      <ImageLightbox
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </>
  );
}

export default ProjectCasePage;
