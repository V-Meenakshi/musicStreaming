import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { assets } from "../assets/assets"; // Your asset import

function SideBar() {
  // State to handle sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Hamburger Icon Row with Spacing */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px 15px",
          zIndex: "1000",
          cursor: "pointer",
          backgroundColor: "transparent",
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%", // To fill the top space with the icon aligned left
        }}
      >
        <div
          style={{
            marginLeft: "15px", // Space from the left
          }}
        >
          <FontAwesomeIcon
            icon={faBars}
            style={{
              fontSize: "24px",
              color: "white",
            }}
            onClick={toggleSidebar}
          />
        </div>
        <div
          style={{
            marginLeft: "auto", // Space for alignment towards the right (can be used if you need any icons on the right side)
            marginRight: "15px", // Space to right edge
          }}
        >
          {/* Add more icons or branding here if needed */}
        </div>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div style={{ width: "320px", marginTop: "50px" }}>
          {/* Sidebar Container */}
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.25)",
              margin: "8px",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              borderRadius: "8px",
              height: "15%",
              width: "300px",
            }}
          >
            {/* Home Section */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "8px 12px",
                cursor: "pointer",
              }}
            >
              <img
                src={assets.home_icon}
                alt="Home Icon"
                style={{ width: "24px", marginRight: "8px" }}
              />
              <p style={{ marginBottom: "0px", fontWeight: "bold" }}>Home</p>
            </div>

            {/* Search Section */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "8px 12px",
                cursor: "pointer",
              }}
            >
              <img
                src={assets.search_icon}
                alt="Search Icon"
                style={{ width: "24px", marginRight: "8px" }}
              />
              <p style={{ marginBottom: "0px", fontWeight: "bold" }}>Search</p>
            </div>
          </div>

          {/* Library and Playlist Container */}
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.25)",
              margin: "8px",
              marginBottom: "0px",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              borderRadius: "8px",
              height: "81.5%",
              width: "300px",
            }}
          >
            {/* Your Library Section */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingLeft: "12px",
                paddingTop: "8px",
                paddingBottom: "8px",
              }}
            >
              <div style={{ display: "flex" }}>
                <img
                  src={assets.stack_icon}
                  alt="stack Icon"
                  style={{ width: "24px", marginRight: "8px" }}
                />
                <p style={{ marginBottom: "0px", fontWeight: "bold" }}>
                  Your Library
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  cursor: "pointer",
                }}
              >
                <img
                  src={assets.arrow_icon}
                  alt="arrow Icon"
                  style={{ width: "16px", marginRight: "8px" }}
                />
                <img
                  src={assets.plus_icon}
                  alt="plus Icon"
                  style={{ width: "16px", marginRight: "8px" }}
                />
              </div>
            </div>

            {/* Create Playlist Section */}
            <div
              style={{
                padding: "8px",
                backgroundColor: "rgba(0, 0, 0, 0.25)",
                color: "white",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                marginTop: "8px",
                marginLeft: "8px",
                marginRight: "8px",
                fontWeight: "lighter",
              }}
            >
              <h5>Create your first playlist</h5>
              <p>It's easy, we will help you</p>
              <button
                style={{
                  fontSize: "15px",
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "50px",
                  padding: "6px 16px",
                  marginTop: "8px",
                }}
              >
                Create Playlist
              </button>
            </div>

            {/* Browse Podcasts Section */}
            <div
              style={{
                padding: "8px",
                backgroundColor: "rgba(0, 0, 0, 0.25)",
                color: "white",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                marginTop: "8px",
                marginLeft: "8px",
                marginRight: "8px",
              }}
            >
              <h5 style={{ fontWeight: "lighter" }}>
                Let's find some podcasts to follow
              </h5>
              <p style={{ fontWeight: "lighter" }}>We'll keep you updated</p>
              <button
                style={{
                  fontSize: "15px",
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "50px",
                  padding: "6px 16px",
                  marginTop: "8px",
                }}
              >
                Browse Podcasts
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SideBar;
