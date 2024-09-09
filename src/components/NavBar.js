import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

function NavBar(){
    return (
        <div>
            <div className="d-flex align-items-center m-2 justify-content-between" style={{width:"100%",height:"6%"}}>
                <div className="d-flex align-items-center m-2 gap-2">
                    <img className="bg-white p-2 rounded-circle" src={assets.leftArrow_icon} alt="larrow" style={{width:'30px',cursor:'pointer'}}/>
                    <img className="bg-white p-2 rounded-circle" src={assets.rightArrow_icon} alt="rarrow" style={{width:'30px',cursor:'pointer'}}/>
                </div>
                <div className="d-flex align-items-center gap-3">
                    <button className="rounded-pill p-2">Explore Premium</button>
                    <button className="rounded-pill p-2">Intall App</button>
                    <Link to="/profile" style={{textDecoration:'none'}}>
                        <p className="text-black p-2 rounded-circle d-flex align-items-center justify-content-center mt-3 me-2" style={{backgroundColor:'darkmagenta',width:'35px',height:'35px'}}>K</p>
                    </Link>    
                </div>
            </div>
            <div className="d-flex  gap-2 ms-3 mt-4">
                <p className="bg-white text-black px-2 rounded-pill">All</p>
                <p className="bg-black text-white px-2 rounded-pill">Music</p>
                <p className="bg-black text-white px-2 rounded-pill">Podcasts</p>
            </div>
        </div>
    );
}
export default NavBar;