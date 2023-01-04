import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "../common/NavBar";
import Home from "../pages/common/Home";
import NotFound from "../pages/common/NotFound";
import Quotes from '../pages/quotes/smart'
import MainConcept from '../concepts/index'
import ClassCompApp from '../classComp-app/index'

function Routers() {
  return (
    <Router>
      <header>
        <NavBar />
        <Routes>
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/concept" element={<MainConcept />} />
          <Route path="/class-comp-app" element={<ClassCompApp />} />
          <Route path="/" exact={true} element={<Home />} />
          <Route path="*" exact={true} element={<NotFound />} />
        </Routes>
      </header>
    </Router>
  );
}
export default Routers;
