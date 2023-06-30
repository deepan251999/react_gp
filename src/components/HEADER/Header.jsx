import React from 'react'
import HeaterItem from './HeaterItem.jsx';
import "./header.css";
import Icon2 from "../../Assets/icons/store-solid.svg";
import Icon3 from "../../Assets/icons/bar-chart-square-solid-24.png";
import Icon4 from "../../Assets/icons/calendar-solid-24.png";
import Icon5 from "../../Assets/icons/data-solid-24.png";
import Icon6 from "../../Assets/icons/paint-roll-solid-24.png";

function Header() {
  const headerReuse =[{"headicon":Icon2,"headpara":"Lorem Ipsum"},{"headicon":Icon3,"headpara":"Dolor Sitema"},{"headicon":Icon4,"headpara":"Sedare Perspiciatis"},{"headicon":Icon5,"headpara":"Magni Dolores"},{"headicon":Icon6,"headpara":"Nemos Enimade"}]
  // const 
  return (
    <div className='header_container'>
        <div className="header_bg">
            <div className="header_contain"style={{width:"90%",margin:"auto",height:"100vh"}}>
                  <h1 style={{textAlign:"center",margin:"auto"}}>Powerful Digital Solutions With Gp<span>.</span></h1>
                  <h2>We are team of talented digital marketers</h2>

                  <div className='head'>
                  {
                      headerReuse.map((item)=>{
                        return(<HeaterItem headerData={item}/>)
                      })
                  }
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Header;