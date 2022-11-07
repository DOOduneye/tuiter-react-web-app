import { Routes, Route } from "react-router";
import Home from "./Home";
import Explore from "./Explore";

const Tuiter = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/explore" element={<Explore />} />
        </Routes>
    );
}

export default Tuiter;