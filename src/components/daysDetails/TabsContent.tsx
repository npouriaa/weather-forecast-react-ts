import "../../styles/daysDetails/tab.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { ForeCastDayType } from "../Data.types";

type TabsContentProps = {
  data: ForeCastDayType[];
  activeTab: number;
};

const TabsContent = ({ data, activeTab }: TabsContentProps) => {
  return (
    <div className="tab-content-con">
      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        freeMode={true}
        modules={[FreeMode, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
      >
        {data[activeTab].hour.map((hour, index) => (
          <SwiperSlide key={index}>
            <div key={index} className="hour-item">
              <p>{hour.time.split(" ")[1]}</p>
              <img src={`${hour.condition.icon}`} alt="condition-icon" />
              <h4 className={`${hour.temp_c > 20 && "warm-color"}`}>
                {hour.temp_c}°C
              </h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TabsContent;
