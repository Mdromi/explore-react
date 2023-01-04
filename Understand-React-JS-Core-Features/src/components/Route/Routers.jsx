import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "../common/NavBar";
import From from "../pages/Form";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import TicTac from "../pages/tictac/TicTac";
import Todo from "../pages/Todo/Todo";
import Profile from "../profile/Profile";
import Poll from '../pages/poll/index'

function Routers() {
  return (
    <Router>
      <header>
        <NavBar />
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/from" element={<From />} />
          <Route path="/tictac" element={<TicTac />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/Poll" element={<Poll />} />
          <Route path="/" exact={true} element={<Home />} />
          <Route path="*" exact={true} element={<NotFound />} />
        </Routes>
      </header>
    </Router>
  );
}
export default Routers;
