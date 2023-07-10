import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import PageNotFound from "../pages/404";
import { useSelector } from "react-redux";

const AppRouting = () => {
  const _state = useSelector((state: any) => state);
  const { authentication } = _state;
  const authenticated = !!authentication.data.access_token;

  return (
    <Router>
      <div>
        <Routes>
          {authenticated ? (
            <Route path="/home/*" element={<Home />} />
          ) : (
            <Route path="/login" element={<Login />} />
          )}
          <Route path="/*" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouting;
