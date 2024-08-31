import { useContext } from "react";
import { GlobalContext } from "./App";
import Navigation from "./Navigation";
import Login from "./Login";

function Home(){
    const {globalIsLogin} = useContext(GlobalContext);
    return (
        <div>
            {globalIsLogin?
            <div>
                <Navigation />
            </div>
            :<Login />}
        </div>
    );
}
export default Home;