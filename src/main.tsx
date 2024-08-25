import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { DataContextProvider } from "./context/DataContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <DataContextProvider>
    <App />
  </DataContextProvider>
);
