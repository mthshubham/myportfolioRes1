import React from 'react'
import  styled  from 'styled-components';

const Abachivement = () => {
  return (
    <Myachivement>
        <h2>My Achivements ...</h2>
    </Myachivement>
  );
}


const Myachivement=styled.div`
margin:20px;
background: #171717;
border-radius: 10px;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.3); 
padding: 20px;



`;

export default Abachivement;