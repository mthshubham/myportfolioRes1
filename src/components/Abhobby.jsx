import React from 'react'
import  styled  from 'styled-components'


const Abhobby = () => {
  return (
    <Myedudiv>
        <h2>My Hobbies ......</h2>
        <ul>
            <li>Repiring and Understanding working of Electronic items</li>
            <li>Playing with Electronic items</li>
            <li>Exploring new Electronic devices </li>
            <li>Bike Riding aimlessly</li>
        </ul>
    </Myedudiv>
  );
}

const Myedudiv=styled.div`
margin:20px;
background: #171717;
border-radius: 10px;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.3); 
padding: 20px;

.parent{
    display:flex;
    // justify-content:center;
}

hr{
    width:80vw;
}
.child{
    width:25vw;
    margin:0 20px;
}

`;

export default Abhobby;