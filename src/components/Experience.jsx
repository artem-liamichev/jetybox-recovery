import { useEffect } from "react";
import Spline from "@splinetool/react-spline";

function Experience() {
    useEffect(() => {
        const handleScroll = () => {
            const canvasChild = document.getElementById("canvas_child");
            const firstSlide = document.getElementById("first_slide");
            const currentScroll = window.scrollY;

            if (!canvasChild) {
                return;
            }

            if (currentScroll <= 50) {
                canvasChild.className = "child_canvas";
                if (firstSlide) {
                    firstSlide.style.display = "none";
                }
            }

            if (currentScroll >= 50 && currentScroll <= 550) {
                canvasChild.className = "sticky";
                if (firstSlide) {
                    firstSlide.style.display = "none";
                }
            }

            if (firstSlide && currentScroll >= 550) {
                firstSlide.style.display = "block";
            }

            if (currentScroll >= 551 && currentScroll <= 690) {
                canvasChild.className = "child_canvas";
            }
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div id="canvas" className="parent_canvas">
            <div id="canvas_child" className="child_canvas">
                <Spline width="100" heigth="100" scene="https://prod.spline.design/oIn55snhGohRZ7TL/scene.splinecode" />
            </div>
        </div>
    );
}

export default Experience;
