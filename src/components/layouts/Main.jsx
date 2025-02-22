import { Outlet } from "react-router-dom";
import Heaeder from "../Header/Heaeder";

const Main = () => {
    return (
        <div>
            <Heaeder></Heaeder>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;