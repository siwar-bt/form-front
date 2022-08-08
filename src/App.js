
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./pages/welcome/Welcome"
import FormBuilder from "./Components/FormBuilder"
import Home from "./pages/home/Home"
import List from "./pages/list/List"
import Single from "./pages/single/Single"
import FormList from "./pages/list/FormList"
import Signin from "..//src//pages//login//signin"
import Signup from "..//src//pages//login//signup"
function App() {
    return (
        <Router>
            <Routes>
                <Route index element={<Welcome />} />
                <Route path="FormBuilder" index element={<FormBuilder />} />
                <Route path="home" index element={<Home />} />
                

                <Route path="users" element={<List />} />
                <Route path="users/userID" element={<Single />} />
                <Route path="Forms" element={<FormList />}>
                    <Route index />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;