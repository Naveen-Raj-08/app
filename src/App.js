import "./scss/style.scss";
import { Route, Link, Routes, Redirect, useLocation } from "react-router-dom";

// import { ImageGrid } from "./components/ImageGrid";
import { SignupForm } from "./components/SignupForm";
// import { UploadForm } from "./components/UploadForm";
import { NoRoute } from "./components/NoRoute";
import { LoginForm } from "./components/LoginForm";
import { Home } from "./components/Home";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <div className="container app-wrapper">
      <Routes>
        {/* <ProtectedRoute path="/" component={<Home />} /> */}
        <Route exact path="/signup" element={<SignupForm />} />
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="*" element={<NoRoute />} />
      </Routes>
    </div>
  );
}

export default App;
