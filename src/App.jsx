import { /*useEffect,*/ useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
// import { getUserInfo } from "./library/api/auth";
import Layout from "./components/Layout";
import Profile from "./pages/Profile/Profile";

function App() {
  const [user, setUser] = useState(null);

  console.log("로그인된 유저 정보", user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout user={user} setUser={setUser} />}>
          <Route index element={<Home user={user} />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route
            path="/profile"
            element={<Profile user={user} setUser={setUser} />}
          />
        </Route>

        <Route
          path="/signIn"
          element={<SignIn user={user} setUser={setUser} />}
        />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
