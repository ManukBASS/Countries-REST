import "./App.css";
import { Route, Routes } from "react-router";
import AllCountries from "./Components/AllCountries/AllCountries";
import CountryInfo from "./Components/CountryInfo/CountryInfo";

function App() {
  return (
    <>
      <div className="header">
        <div className="container">
          <h5>Where in the world?</h5>
        </div>
      </div>
      <div className="container">
        <Routes>
          <Route path="/" element={<AllCountries />} />
          <Route path="/country/:countryName" element={<CountryInfo />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
