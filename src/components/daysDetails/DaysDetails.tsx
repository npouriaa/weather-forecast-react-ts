import { useContext, useState } from "react";
import "../../styles/daysDetails/daysDetails.css";
import TabsButtons from "./TabsButtons";
import TabsContent from "./TabsContent";
import { DataContext } from "../../context/DataContext";

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
  const { data } = useContext(DataContext);


  return (
    <div className="days-details-con">
      <TabsButtons
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        data={data.forecast.forecastday}
      />
      <TabsContent activeTab={activeTab} data={data.forecast.forecastday} />
    </div>
  );
};

export default DaysDetails;
