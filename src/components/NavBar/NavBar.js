import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  // set State for navBar Transition
  const [show, handleShow] = useState(false);
  const history = useHistory(); //Can push the next page into the history stack

  //Function to change state if scrolled down more than 100px

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  //UseEffect Hook to transition
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    //Interpolated className to allow navbar_black styling to only appear after transitionNavBar gets used
    <div className={`navbar ${show && "navbar_black"}`}>
      <div className="navbar_container">
        <img
          onClick={() => history.push("/")}
          className="navbar_logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix Logo"
        />
        <img
          onClick={() => history.push("/profile")} //Allows a link to the profile screen while retaining the current page in the history stack
          className="navbar_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Profile Avatar"
        />
      </div>
    </div>
  );
}

export default NavBar;
