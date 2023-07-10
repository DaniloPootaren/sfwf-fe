import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import PageNotFound from "../pages/404";


const AppRouting = () => {
  const authenticated = false;

  return (
    <Router>
      <div>
        <Routes>
          {authenticated ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/*" element={<PageNotFound />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/*" element={<PageNotFound />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouting;
