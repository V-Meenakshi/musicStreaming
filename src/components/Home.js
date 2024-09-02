import { useContext } from "react";
import { GlobalContext } from "../App";
import SideBar from "./SideBar";
import Login from "./Login";
import Player from "./Player";
import Display from "./Display";

function Home(){
    const {globalIsLogin} = useContext(GlobalContext);
    return (
        <div>
            {globalIsLogin?
            <div style={{height:"100%"}}>
                <div className="d-flex" style={{height:'90%'}}>
                    <SideBar />
                    <Display />
                </div>
                <Player />
            </div>
            :<Login />}
        </div>
    );
}
export default Home;