import { CiSearch } from "react-icons/ci";
import "../styles/search.css";
import { FormEvent, useContext, useState } from "react";
import axios, { AxiosError } from "axios";
import { DataContext } from "../context/DataContext";
import { DataType } from "./Data.types";

type WeatherApiError = {
  error: {
    code: number;
    message: string;
  };
};

const Search = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const { setLoading, setError, setData } = useContext(DataContext);
  const API_KEY = "149367f5894c473db05141715242008";

  const onFinish = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      setError("");
      const response = await axios.get<DataType>(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${inputValue}&days=7`
      );
      const dataObj: DataType = {
        location: {
          name: response.data.location.name,
          region: response.data.location.region,
          country: response.data.location.country,
          localtime: response.data.location.localtime,
        },
        current: {
          temp_c: response.data.current.temp_c,
          condition: response.data.current.condition,
          wind_kph: response.data.current.wind_kph,
          humidity: response.data.current.humidity,
        },
        forecast: {
          forecastday: response.data.forecast.forecastday,
        },
      };
      setData(dataObj);
    } catch (error) {
      const err = error as AxiosError;
      const errorResponse = err.response?.data as WeatherApiError;
      const message =
        errorResponse?.error?.message || "An unknown error occurred";
      setError(message);
      console.log(error);
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={onFinish}>
      <button>
        <CiSearch size={25} />
      </button>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        required
        type="text"
        placeholder="Search anywhere..."
      />
    </form>
  );
};

export default Search;
