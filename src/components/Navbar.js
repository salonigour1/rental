import React from "react";
import "./style.css";
import { BsFillFilePersonFill } from "react-icons/bs";
import { MdOutlineExplore, MdOutlineLocalOffer } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const activeButton = (route) => {
    if (location.pathname == route) return true;
    return false;
  };
  return (
    <div className="footer">
      <footer className="Navbar">
        <div className="icons">
          <MdOutlineExplore
            color={activeButton("/") ? "black" : "grey"}
            onClick={() => navigate("/")}
          />
          <div className={activeButton("/") ? "icon_name active" : "icon_name"}>
            Explore
          </div>
        </div>
        <div className="icons">
          <MdOutlineLocalOffer
            onClick={() => navigate("/offers")}
            color={activeButton("/offers") ? "black" : "grey"}
          />
          <div
            className={
              activeButton("/offers") ? "icon_name active" : "icon_name"
            }
          >
            Offers
          </div>
        </div>
        <div className="icons">
          <BsFillFilePersonFill
            onClick={() => navigate("/profile")}
            color={activeButton("/profile") ? "black" : "grey"}
          />
          <div
            className={
              activeButton("/profile") ? "icon_name active" : "icon_name"
            }
          >
            Profile
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Navbar;
