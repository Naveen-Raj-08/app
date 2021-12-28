import "./scss/style.scss";
import {
  Route,
  Link,
  Routes,
  Redirect,
  useLocation,
  Outlet,
  Navigate,
} from "react-router-dom";

// import { ImageGrid } from "./components/ImageGrid";
import { SignupForm } from "./components/SignupForm";
// import { UploadForm } from "./components/UploadForm";
import { NoRoute } from "./components/NoRoute";
import { LoginForm } from "./components/LoginForm";
import { Home } from "./components/Home";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { useEffect, useState } from "react";
import { appStore } from "./firebase/config";

function App() {
  return (
    <div className="container app-wrapper">
      <Routes>
        <Route exact path="/" element={<PrivateRoute />}>
          <Route exact path="/" element={<Home />} />
        </Route>
        <Route path="/home" element={<PrivateRoute />}>
          <Route exact path="/home" element={<Home />} />
        </Route>
        <Route exact path="/signup" element={<SignupForm />} />
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="*" element={<NoRoute />} />
      </Routes>
    </div>
  );
}

const PrivateRoute = () => {
  const [isLogin, setisLogin] = useState(true);

  useEffect(() => {
    appStore
      .collection("isAuth")
      .get()
      .then((snap) => {
        let isAuth = {};
        snap.docs.map((doc) => (isAuth = doc.data()));
        console.log(isAuth.isLogin);
        setisLogin(isAuth.isLogin);
      });
  }, []);

  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default App;
