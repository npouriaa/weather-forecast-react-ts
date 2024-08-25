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
      <footer>
        Made by{" "}
        <a target="_blank" href="https://www.linkedin.com/in/npouriaa">
          Npouiaa
        </a>
      </footer>
    </div>
  );
};

export default App;
