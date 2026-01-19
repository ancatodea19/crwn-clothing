import { Route, Routes } from "react-router";
import Home from "./routes/Home/Home";
import Shop from "./routes/Shop/Shop";
import Navigation from "./routes/Navigation/Navigation";
import SignIn from "./routes/Sign-in/Sign-in";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/sign-in" element={<SignIn />} />
            </Route>
        </Routes>
    );
};

export default App;
