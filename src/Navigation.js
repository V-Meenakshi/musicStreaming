import {Link} from "react-router-dom";
function Navigation(){
    return (
        <div className="navigation" style={{display:"flex",flexDirection:"row",
            justifyContent:"space-between"}}>
            <div style={{ display: "flex", gap: "20px"}}>    
                <Link to="/">
                    <img src={"homelogo.png"} alt="Home" />
                </Link>
                <div className="search">
                    <input  type="search" placeholder="Search" aria-label="Search" />
                    <button  type="submit"><img src={"search.png"} alt="search"/></button>
                </div>
            </div>
            <div style={{ display: "flex", gap: "40px"}}>
                <Link to="">
                    <img src="fav.png" alt="favourites" />
                </Link>
                <Link to="">
                    <img src="download.png" alt="downloads" />
                </Link>
                <Link to="">
                    <img src="plus.png" alt="playlist" />
                </Link>
                <Link to="/profile">
                    <img src="profile.jpg" alt="profile" />
                </Link>
            </div>
        </div>
    );
}
export default Navigation;