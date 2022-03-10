import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "../scss/Partners.scss";

export default function Partners() {
    SwiperCore.use([Autoplay]);
    return (
        <div className="partners">
            <div>
                <Swiper
                    spaceBetween={200}
                    slidesPerView={"auto"}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    centeredSlides={true}
                    modules={[Autoplay]}
                >
                    <SwiperSlide>
                        <div className="partner-slide noselect">
                            <img src="/src/assets/partners/ledger.svg" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="partner-slide noselect">
                            <img
                                src="/src/assets/partners/opensea.svg"
                                alt=""
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="partner-slide noselect">
                            <img
                                src="/src/assets/partners/ethereum.svg"
                                alt=""
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="partner-slide noselect">
                            <img src="/src/assets/partners/apple.svg" alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
