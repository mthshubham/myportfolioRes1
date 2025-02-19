import React from 'react'
import  styled  from 'styled-components';

const Abeducation = () => {
  return (
    <Myedudiv>
        <h2> My Qualifications ..</h2>
        <div className="parent">
        <div className="child">
            <ul>
                <li>
                    <dl>MCA
                    <dt>Unviersity </dt>
                    <dd><a href='#' target="_blank">Graphic Era University <br />Dehradoon Uttrakhand 24001</a></dd>                    
                    </dl>                
                </li>         
            </ul>
        </div>
        <div className="child">
            <h5>Marks:</h5>
            <img src='https://img.icons8.com/color/96/report-card.png' alt="Marksheet"/>
        </div>
        <div className="child">
            <h4>My fav..</h4>
            <dl>
                <dt>Teacher</dt>
                <dd>...</dd>
                <dt>Classmates</dt>
                <dd>....</dd>
            </dl>
        </div>
        </div>
        <hr/>
{/* ----------------------------------------------------- */}
        <div className="parent">
        <div className="child">
            <ul>
                <li>
                    <dl>BCA
                    <dt>College </dt>
                    <dd><a href='#' target="_blank">S.N.S College <br/> Motihari Bihar 845401</a></dd>                    
                    </dl>                
                </li>         
            </ul>
        </div>
        <div className="child">
            <h5>Marks:</h5>
            <img src='https://img.icons8.com/color/96/report-card.png' alt="Marksheet"/>
        </div>
        <div className="child">
            <h4>My fav..</h4>
            <dl>
                <dt>Teacher</dt>
                <dd>...</dd>
                <dt>Classmates</dt>
                <dd>....</dd>
            </dl>
        </div>
        </div>
        <hr/>

{/* ------------------------------ */}
        <div className="parent">
        <div className="child">
            <ul>
                <li>
                    <dl>10+2<sup>th</sup>
                    <dt>College </dt>
                    <dd><a href='#' target="_blank">M.H.K College <br />Moihari Bihar845401</a></dd>                    
                    </dl>                
                </li>         
            </ul>
        </div>
        <div className="child">
            <h5>Marks: </h5>
            <img src='https://img.icons8.com/color/96/report-card.png' alt="Marksheet"/>
        </div>
        <div className="child">
            <h4>My fav..</h4>
            <dl>
                <dt>Teacher</dt>
                <dd>...</dd>
                <dt>Classmates</dt>
                <dd>....</dd>
            </dl>
        </div>
        </div>
        <hr/>

{/* --------------------- */}
        <div className="parent">
        <div className="child">
            <ul>
                <li>
                    <dl>10<sup>th</sup>
                    <dt>Shooling </dt>
                    <dd><a href='#' target="_blank">Blue Sky Public School <br />Muzzafarpur Bihar</a></dd>                    
                    </dl>                
                </li>         
            </ul>
        </div>
        <div className="child">
            <h5>Marks: 10 cgpa</h5>
            <img src='https://img.icons8.com/color/96/report-card.png' alt="Marksheet"/>
        </div>
        <div className="child">
            <h4>My fav..</h4>
            <dl>
                <dt>Teacher</dt>
                <dd>...</dd>
                <dt>Classmates</dt>
                <dd>....</dd>
            </dl>
        </div>
        </div>
    </Myedudiv>
    
  )
};

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




export default Abeducation