import { TabData } from "./DaysDetails";
import { getDateDescription } from "../../utils/getDateDescription";
import "../../styles/daysDetails/tab.css";

type TabsButtonsProps = {
  data: TabData[];
  activeTab: number;
  setActiveTab: (value: number) => void;
};

const TabsButtons = ({ data, activeTab, setActiveTab }: TabsButtonsProps) => {
  return (
    <ul className="tab-header">
      {data.map((item, index) => (
        <li className={`${index === activeTab && "active-tab"}`} onClick={() => setActiveTab(index)} key={index}>
          {getDateDescription(item.date)}
        </li>
      ))}
    </ul>
  );
};

export default TabsButtons;
