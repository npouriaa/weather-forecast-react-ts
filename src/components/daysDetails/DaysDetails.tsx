import { useState } from "react";
import "../../styles/daysDetails/daysDetails.css";
import TabsButtons from "./TabsButtons";
import TabsContent from "./TabsContent";

type HoursData = {
  time: string;
  temp_c: number;
  icon: string;
};

export type TabData = {
  date: string;
  hoursData: HoursData[];
};

const DaysDetails = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabsData: TabData[] = [
    {
      date: "2024-08-25",
      hoursData: [
        {
          time: "2024-08-25 00:00",
          temp_c: 21,
          icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
        },
        {
          time: "2024-08-25 00:00",
          temp_c: 21,
          icon: "//cdn.weatherapi.com/weather/64x64/day/377.png",
        },
        {
          time: "2024-08-25 00:00",
          temp_c: 21,
          icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
        },
        {
          time: "2024-08-25 01:00",
          temp_c: 21,
          icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
        },
        {
          time: "2024-08-25 02:00",
          temp_c: 21,
          icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
        },
        {
          time: "2024-08-25 03:00",
          temp_c: 21,
          icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
        },
        {
          time: "2024-08-25 04:00",
          temp_c: 21,
          icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
        },
      ],
    },
    {
      date: "2024-08-26",
      hoursData: [
        {
          time: "2024-08-26 00:00",
          temp_c: 21,
          icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
        },
        {
          time: "2024-08-26 01:00",
          temp_c: 21,
          icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
        },
        {
          time: "2024-08-26 02:00",
          temp_c: 21,
          icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
        },
        {
          time: "2024-08-26 03:00",
          temp_c: 21,
          icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
        },
        {
          time: "2024-08-26 04:00",
          temp_c: 21,
          icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
        },
      ],
    },
    {
      date: "2024-08-27",
      hoursData: [
        {
          time: "2024-08-27 00:00",
          temp_c: 21,
          icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
        },
        {
          time: "2024-08-27 01:00",
          temp_c: 21,
          icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
        },
        {
          time: "2024-08-27 02:00",
          temp_c: 21,
          icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
        },
        {
          time: "2024-08-27 03:00",
          temp_c: 21,
          icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
        },
        {
          time: "2024-08-27 04:00",
          temp_c: 21,
          icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
        },
      ],
    },
    {
      date: "2024-08-28",
      hoursData: [
        {
          time: "2024-08-28 00:00",
          temp_c: 21,
          icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
        },
        {
          time: "2024-08-28 01:00",
          temp_c: 21,
          icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
        },
        {
          time: "2024-08-28 02:00",
          temp_c: 21,
          icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
        },
        {
          time: "2024-08-28 03:00",
          temp_c: 21,
          icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
        },
        {
          time: "2024-08-28 04:00",
          temp_c: 21,
          icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
        },
      ],
    },
    {
      date: "2024-08-29",
      hoursData: [
        {
          time: "2024-08-29 00:00",
          temp_c: 21,
          icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
        },
        {
          time: "2024-08-29 01:00",
          temp_c: 21,
          icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
        },
        {
          time: "2024-08-29 02:00",
          temp_c: 21,
          icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
        },
        {
          time: "2024-08-29 03:00",
          temp_c: 21,
          icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
        },
        {
          time: "2024-08-29 04:00",
          temp_c: 21,
          icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
        },
      ],
    },
    {
      date: "2024-08-30",
      hoursData: [
        {
          time: "2024-08-30 00:00",
          temp_c: 21,
          icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
        },
        {
          time: "2024-08-30 01:00",
          temp_c: 21,
          icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
        },
        {
          time: "2024-08-30 02:00",
          temp_c: 21,
          icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
        },
        {
          time: "2024-08-30 03:00",
          temp_c: 21,
          icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
        },
        {
          time: "2024-08-30 04:00",
          temp_c: 21,
          icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
        },
      ],
    },
    {
      date: "2024-08-31",
      hoursData: [
        {
          time: "2024-08-31 00:00",
          temp_c: 21,
          icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
        },
        {
          time: "2024-08-31 01:00",
          temp_c: 21,
          icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
        },
        {
          time: "2024-08-31 02:00",
          temp_c: 21,
          icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
        },
        {
          time: "2024-08-31 03:00",
          temp_c: 21,
          icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
        },
        {
          time: "2024-08-31 04:00",
          temp_c: 21,
          icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
        },
      ],
    },
  ];

  return (
    <div className="days-details-con">
      <TabsButtons
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        data={tabsData}
      />
      <TabsContent activeTab={activeTab} data={tabsData} />
    </div>
  );
};

export default DaysDetails;
