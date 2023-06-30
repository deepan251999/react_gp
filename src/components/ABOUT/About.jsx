import React from 'react'
import "./about.css";
import Img from "../../Assets/images/about.jpg";
import Img2 from "../../Assets/images/features.jpg";
import {BsCheck2All} from "react-icons/bs";

import Icon7 from "../../Assets/icons/receipt-regular-24.png";
import Icon8 from "../../Assets/icons/cube-alt-regular-24.png";
import Icon9 from "../../Assets/icons/images-regular-24.png";
import Icon10 from "../../Assets/icons/shield-regular-24.png";
import AboutItem from './AboutItem';
function About() {
  const aboutReuse = [{"aboutIcon":Icon7,"aboutHead":"Est labore ad","aboutPara":"Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip"},
  {"aboutIcon":Icon8,"aboutHead":"Harum esse qui","aboutPara":"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt"},
  {"aboutIcon":Icon9,"aboutHead":"Aut occaecati","aboutPara":"Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere"},
  {"aboutIcon":Icon10,"aboutHead":"Beatae veritatis","aboutPara":"Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta"}]
  return (
    <div className='about_container_fluid'>
        <div className="about_container">
            <div className="about_left_content">
                    <h2>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <ul>
                        <li><BsCheck2All className='ico_tick'/>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                        <li><BsCheck2All className='ico_tick'/>Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                        <li><BsCheck2All className='ico_tick'/>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                    </ul>
                    <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
            </div>
            <div className="about_right_image">
                        <div className='about_img'>
                            <img src={Img} alt="" />
                        </div>
            </div>
        </div>


        <div className="about_container">
            <div className="about_right_image">
                        <div className='about_img'>
                            <img src={Img2} alt="" />
                        </div>
            </div>
            <div className="about_left_content3"style={{margin:"20px 10px"}}>
              
             {
                aboutReuse.map((item)=>{
                   return(<AboutItem aboutData={item}/>) 
                })
             }
            </div>
         </div>
    </div>
  )
}

export default About