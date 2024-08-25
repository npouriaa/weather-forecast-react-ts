type ConditionType = {
  text: string;
  icon: string;
};

type HourType = {
  time: string;
  temp_c: number;
  condition: ConditionType;
};
export type ForeCastDayType = {
  date: string;
  day: { maxtemp_c: number; mintemp_c: number };
  hour: HourType[];
};

export type DataType = {
  location: {
    name: string;
    region : string
    country: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    condition: ConditionType;
    wind_kph: number;
    humidity: number;
  };
  forecast: {
    forecastday: ForeCastDayType[];
  };
};
