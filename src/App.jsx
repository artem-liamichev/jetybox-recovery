import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Application from "./components/Application";
import HowWeWork from "./components/HowWeWork";
import OurAreas from "./components/OurAreas";
import DropdownList from "./components/DropdownList";
import Slider from "./components/Slider";
import Marquee from "./components/Marquee";
import SlideExpirience from "./components/SlideExpirience.jsx";
import ProjectsPage from "./components/ProjectsPage.jsx";
import ProjectCasePage from "./components/ProjectCasePage.jsx";
import Experience from "./components/Experience.jsx";

const LOADER_LOGO_SRC = "/assets/logo-Jpnsoa0I.png";
const HOME_LOADER_FLAG = "show-home-loader";

export default function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [pathname, setPathname] = useState(window.location.pathname);

    const showLoader = () => {
        setIsLoading(true);
        document.body.style.overflow = "hidden";

        return window.setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = "auto";
        }, 1400);
    };

    useEffect(() => {
        const handlePopState = () => setPathname(window.location.pathname);
        window.addEventListener("popstate", handlePopState);

        return () => window.removeEventListener("popstate", handlePopState);
    }, []);

    useEffect(() => {
        setPathname(window.location.pathname);
        window.scrollTo({ top: 0, behavior: "auto" });
    }, [pathname]);

    const isProjectsPage = pathname === "/projects";
    const projectMatch = pathname.match(/^\/projects\/(\d+)$/);
    const projectId = projectMatch ? Number(projectMatch[1]) : null;
    const isProjectCasePage =
        projectId !== null && projectId >= 1 && projectId <= 8;

    useEffect(() => {
        const timer = showLoader();

        return () => {
            window.clearTimeout(timer);
            document.body.style.overflow = "auto";
        };
    }, []);

    useEffect(() => {
        if (pathname !== "/" || !sessionStorage.getItem(HOME_LOADER_FLAG)) {
            return undefined;
        }

        sessionStorage.removeItem(HOME_LOADER_FLAG);
        const timer = showLoader();

        return () => {
            window.clearTimeout(timer);
            document.body.style.overflow = "auto";
        };
    }, [pathname]);

    return (
        <>
            {isLoading && (
                <div className="app-loader-overlay">
                    <div className="app-loader-backdrop" />
                    <div className="loader-container">
                        <div className="loader" aria-hidden="true">
                            {Array.from({ length: 9 }).map((_, index) => (
                                <span
                                    key={index}
                                    className={`loader-block ${index === 8 ? "loader-block-muted" : ""
                                        }`}
                                />
                            ))}
                        </div>
                        <img
                            src={LOADER_LOGO_SRC}
                            alt="Jetybox"
                            className="loader-logo"
                        />
                    </div>
                </div>
            )}
            <Header />
            {isProjectCasePage ? (
                <ProjectCasePage projectId={projectId} />
            ) : isProjectsPage ? (
                <ProjectsPage />
            ) : (
                <>
                    <Hero />
                    <Experience />
                    <SlideExpirience />
                    <Marquee />
                    <div className="relative">
                        <Slider />
                        <DropdownList />
                    </div>
                    <OurAreas />
                    <div className="overflow-hidden">
                        <HowWeWork />
                        <Application />
                    </div>
                    <Footer />
                </>
            )}
        </>
    );
}
