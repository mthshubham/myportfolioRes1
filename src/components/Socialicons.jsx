import React from 'react'
import './Socialicons.css';
import { useState,useEffect } from 'react';



const Socialicons = ({socialpath,sociallink}) => {
    const [showIcon, setShowIcon] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowIcon(true);
      }, 500); // 2 seconds
  
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <div className="social">
        {showIcon && <a href={sociallink} target="_blank"> <img src={socialpath} className="icon" alt="Icon" /></a>}
      </div>
    );
};

export default Socialicons