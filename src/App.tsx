import { useSelector } from "react-redux";
import "./App.css";
import { selectIsLoading } from "./data/selectors";
import Landing from "./pages/Landing";
import Loader from "./components/Loader/Loader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/e-commerce";
import Tab from "./components/Navigation";
import Profile from "./pages/e-commerce/Profile";
import Home from "./pages/e-commerce/Home";

function App() {
  const isLoading = useSelector(selectIsLoading);
  return (
    <BrowserRouter>
      {isLoading && <Loader />}
      {!isLoading && <Tab />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/e-commerce" element={<MainPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
