//import {Link} from "react-router-dom";
import { assets } from "../assets/assets";

function SideBar() {
  return (
    <div style={{width:'320px'}}>
      {/* Sidebar Container */}
      <div className="bg-white bg-opacity-25 m-2 text-white d-flex flex-column justify-content-around rounded" style={{ height: '15%', width: '300px' }}>
        {/* Home Section */}
        <div className="d-flex align-items-center px-3 py-2" style={{cursor:'pointer'}}>
          <img className="me-2" src={assets.home_icon} alt="Home Icon" style={{ width: '24px' }} />
          <p className="mb-0 fw-bold">Home</p>
        </div>

        {/* Search Section */}
        <div className="d-flex align-items-center px-3 py-2" style={{cursor:'pointer'}}>
          <img className="me-2" src={assets.search_icon} alt="Search Icon" style={{ width: '24px' }} />
          <p className="mb-0 fw-bold">Search</p>
        </div>
      </div>

      {/* Library and Playlist Container */}
      <div className="bg-white bg-opacity-25 m-2 mb-0 text-white d-flex flex-column justify-content-top rounded" style={{ height: '81.5%', width: '300px' }}>
        {/* Your Library Section */}
        <div className="d-flex  justify-content-between ps-2 py-2">
          <div className="d-flex">
            <img className="me-2" src={assets.stack_icon} alt="stack Icon" style={{ width: '24px' }} />
            <p className="mb-0 fw-bold">Your Library</p>
          </div>
          <div className="d-flex align-items-center justify-content-end" style={{cursor:'pointer'}}>
            <img className="me-2" src={assets.arrow_icon} alt="arrow Icon" style={{ width: '16px' }} />
            <img className="me-2" src={assets.plus_icon} alt="plus Icon" style={{ width: '16px' }} />
          </div>
        </div>

        {/* Create Playlist Section */}
        <div className="p-2 bg-black bg-opacity-25 text-white rounded fw-light d-flex flex-column align-items-start justify-content-start mt-2 mx-2">
          <h5>Create your first playlist</h5>
          <p>It's easy, we will help you</p>
          <button className="btn btn-light text-dark my-2 rounded-pill" style={{ fontSize: '15px' }}>
            Create Playlist
          </button>
        </div>

        {/* Browse Podcasts Section */}
        <div className="p-2 bg-black bg-opacity-25 text-white rounded d-flex flex-column align-items-start justify-content-start mt-2 mx-2">
          <h5 className="fw-light">Let's find some podcasts to follow</h5>
          <p className="fw-light">We'll keep you updated</p>
          <button className="btn btn-light text-dark my-2 rounded-pill" style={{ fontSize: '15px' }}>
            Browse Podcasts
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
