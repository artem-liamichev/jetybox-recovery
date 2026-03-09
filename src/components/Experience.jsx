import useDetectScroll from "@smakss/react-scroll-direction"
import Spline from "@splinetool/react-spline";



function Experience() {
    const { scrollDir } = useDetectScroll()


    window.onscroll = () => {
        const canvasChild = document.getElementById("canvas_child")
        const firstSlide = document.getElementById("first_slide")
        const currentScroll = window.scrollY    



        if (currentScroll <= 50) {
            canvasChild.className = "child_canvas"
            firstSlide.style.display = "none"
        } 
        if(currentScroll >= 50 && currentScroll <= 550 && scrollDir === 'down') {
            canvasChild.className = "sticky"
            firstSlide.style.display = "none"
        }
        if(currentScroll >= 550) {
            firstSlide.style.display = "block"
        }
        if (currentScroll >= 551 && currentScroll <= 690) {
            canvasChild.className = "child_canvas"
        }
    }

    return (
        <div id="canvas" className="parent_canvas">
            <div id="canvas_child" className="child_canvas">
                <Spline width="100" heigth="100" scene="https://prod.spline.design/oIn55snhGohRZ7TL/scene.splinecode"/>
            </div>
        </div>
    )
}

export default Experience