import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper";
import "../scss/BrandSwiper.scss";
import "swiper/css";
import "swiper/css/free-mode";
import AmanuPurple from "../AMANU_PURPLE.png";

export default function BrandSwiper() {
    return (
        <div className="safearea brand">
            <Swiper
                spaceBetween={50}
                slidesPerView={"auto"}
                loop={true}
                autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                }}
                speed={10000}
                modules={[Autoplay, FreeMode]}
                freeMode={true}
            >
                <SwiperSlide>AMANU</SwiperSlide>
                <SwiperSlide>
                    <img src={AmanuPurple} alt="" />
                </SwiperSlide>
                <SwiperSlide>AMANU</SwiperSlide>
                <SwiperSlide>
                    <img src={AmanuPurple} alt="" />
                </SwiperSlide>
                <SwiperSlide>AMANU</SwiperSlide>
                <SwiperSlide>
                    <img src={AmanuPurple} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
