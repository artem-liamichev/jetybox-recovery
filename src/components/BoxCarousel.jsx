import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation';
import "swiper/css/bundle";
import { EffectCoverflow, Navigation } from 'swiper/modules'
import { useTranslation } from "react-i18next"
import Spline from '@splinetool/react-spline'
import { useRef } from 'react';


export default function App() {
    const { t, i18n } = useTranslation()
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

    return (
    <>
        <Swiper
            className="swiper_wrapper"
            modules={[EffectCoverflow, Navigation]}
            effect={'coverflow'}
            navigation={true}
            loop={true}
            grabCursor={true}
            centeredSlides={true}
            spaceBetween={40}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 0,
                stretch: 4,
                depth: 50,
                modifier: 10,
                slideShadows: false
            }}
        >
            <SwiperSlide className='swiper_slide'>
                <div id="first_slide">
                    <Spline className='spline_slide' scene={t("design_url")}/>
                    <h2 className='swiper_title'>{t("Design")}</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper_slide'>
                <Spline className='spline_slide' scene={t("ad_url")}/>
                <h2 className='swiper_title'>{t("Advertising")}</h2>
            </SwiperSlide>
            <SwiperSlide className='swiper_slide'>
                <Spline className='spline_slide' scene={t("dev_url")}/>
                <h2 className='swiper_title'>{t("Development")}</h2>
            </SwiperSlide>
            <SwiperSlide className='swiper_slide'>
                <Spline className='spline_slide' scene={t("analytics_url")}/>
                <h2 className='swiper_title'>{t("Analytics")}</h2>
            </SwiperSlide>
            <SwiperSlide className='swiper_slide'>
                <Spline className='spline_slide' scene={t("telephony_url")}/>
                <h2 className='swiper_title'>{t("Telephony")}</h2>
            </SwiperSlide>
            <SwiperSlide className='swiper_slide'>
                <Spline className='spline_slide' scene={t("crm_url")}/>
                <h2 className='swiper_title'>{t("CRM Systems")}</h2>
            </SwiperSlide>
        </Swiper>
    </>
    )
}