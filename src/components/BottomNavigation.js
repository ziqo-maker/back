import React, { useEffect,useState } from "react";
import home from "../assets/newlogo.png";
import friends from "../assets/pi.png";
import { useLocation, useNavigate } from 'react-router-dom';

function BottomNavigation(){
    const navigate = useNavigate();
    const location = useLocation();

    const [currentScreen,setCurrentScreen] = useState("/");

    useEffect(() => {
        setCurrentScreen(location.pathname);
    },[location]);
    return <nav className="fixed px-[6px] text-white bottom-2 left-4 right-4 rounded-lg bg-black flex justify-around items-center h-[76px] z-50">
        <div
         onClick={() => navigate("/")}
        className= {'flex flex-col items-center justify-center w-14 h-14'}
        >
        <div className="flex flex-col items-center justify-center">
          <img className="w-7 h-7 object-contain" src={home} alt="M"/>
          <p className="text-xs text-center">Home</p>
        </div>
        </div>
        <div
         onClick={() => navigate("/shares")}
        className= {'flex flex-col items-center justify-center w-14 h-14 rounded-lg'}
        >
        <div className="flex flex-col items-center justify-center">
          <img className="w-7 h-7 object-contain" src={friends} alt="F"/>
          <p className="text-xs text-center">Referrals</p>
        </div>
        </div>
    </nav>
}

export default BottomNavigation;