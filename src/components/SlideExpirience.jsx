import Spline from "@splinetool/react-spline";
import BoxCarousel from "./BoxCarousel.jsx";
import { useTranslation } from "react-i18next";
import box_magic from "../assets/box-magic.svg"


function SlideExpirience() {

    const { t, i18n } = useTranslation()
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

    return (
        <div id="swiper" className="swiper_container">
            <h2 className="swiper_header">{t("carousel_title")}</h2>
            <div className="swiper_content">
                <img src={box_magic} className="swiper_box_magic"/>
                <BoxCarousel/>
            </div>
        </div>
    )
}

export default SlideExpirience