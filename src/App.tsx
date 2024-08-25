import "./App.css";
import CurrentStatus from "./components/CurrentStatus";
import DaysDetails from "./components/daysDetails/DaysDetails";
import Search from "./components/Search";

const App = () => {
  return (
    <div className="app">
      <Search />
      <CurrentStatus />
      <DaysDetails />
    </div>
  );
};

export default App;
