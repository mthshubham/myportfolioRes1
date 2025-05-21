import React from 'react'
import "./Home.css";
import ProfileImage from './ProfileImage';
import AutoTerminal from './AutoTerminal';
import Iknowcards from './Iknowcards';
import styled from 'styled-components';
import Myskillicons from './Myskillicons';
import SkillTree from './SkillTree';
import { SwipeCarousel}  from './SwipeCarousel'

const Home = () => {
  return (
    <>
      <div className='Hometop'>
        <hr/>
        <div className='mycard'>
          <h1>Hey, I'm Shubham Sharma!</h1>
          <h3>Assistant Professor at <br/><a href='https://geu.ac.in/' target={"_blank"}>Graphic Era University </a></h3>
          <p>_____&nbsp;&nbsp;&nbsp;&nbsp;Fullstack Java-Devloper , web-Devloper and  Android App Devloper &nbsp;&nbsp;&nbsp;&nbsp;____</p>
          <p>
            <img src="https://img.icons8.com/dusk/64/web.png" alt="Web icons" /> &nbsp;&nbsp; &nbsp;&nbsp;
            <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-android-dating-app-flaticons-lineal-color-flat-icons-2.png" alt="Android Icons" />
          </p>
        </div>

        <div className='mycard'>
          <ProfileImage />        
        </div>  
        <hr />
      </div>

      <div className="center">
        <AutoTerminal />
      </div>

      <SkillTree />

      <h3>My Skills</h3>
      <div className="iknow">
        <Iknowcards name="Html" source="https://img.icons8.com/color/96/html-5--v1.png" alter="html-5--v1" data="data" gitlink=""/>
        <Iknowcards name="Java" source="https://img.icons8.com/color/96/java-coffee-cup-logo--v1.png"  alter="java-coffee-cup-logo--v1" data="data" gitlink=""/>
        <Iknowcards name="CSS" source="https://img.icons8.com/color/96/css3.png" alter="css3"data="data" gitlink=""/>
      </div>
    </>
  )
}

export default Home