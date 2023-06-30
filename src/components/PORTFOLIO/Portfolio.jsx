import React from 'react'
import PortfolioItem from "./PortfolioItem"
import "./portfolio.css";
import Img12 from "../../Assets/images/counts-img.jpg";
import {BsEmojiSmile,BsJournalBookmark,BsClock} from "react-icons/bs";
import {BiMedal} from "react-icons/bi"
function Portfolio() {
    const portfolioReuse = [{"portfolioIcon":<BsEmojiSmile style={{margin:"0 10px",color:"#ffc451"}}/>,"portfolioHead":"65","portfolioStrong":"Happy Clients","portfolioPara":" consequuntur voluptas nostrum aliquid ipsam architecto ut."},
    {"portfolioIcon":<BsJournalBookmark style={{margin:"0 10px",color:"#ffc451"}}/>,"portfolioHead":"85","portfolioStrong":"Projects","portfolioPara":" adipisci atque cum quia aspernatur totam laudantium et quia dere tan"},
    {"portfolioIcon":<BsClock style={{margin:"0 10px",color:"#ffc451"}}/>,"portfolioHead":"35","portfolioStrong":"Years of experience ","portfolioPara":"aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel"},
    {"portfolioIcon":<BiMedal style={{margin:"0 10px",color:"#ffc451"}}/>,"portfolioHead":"20","portfolioStrong":"Awards","portfolioPara":" rerum asperiores dolor alias quo reprehenderit eum et nemo pad der"}]
  return (
    <div className='portfolio_container_fluid'>
        <div className="portfolio_container">
            <h2>PORTFOLIO</h2>
            <p>CHECK OUR PORTFOLIO</p>


            <div className="portfolio_container2">
                <div className="portfolio_container2_img">
                    <img src={Img12} alt="" />
                </div>

                <div className="portfolio_container2_content">
                    <p>Voluptatem dignissimos provident quasi</p>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</span>
                    <div className='portfolio_item_container'>
                        {
                            portfolioReuse.map((item)=>{
                                return(<PortfolioItem portfolioData={item}/>)
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
                   {/* TESTIMONALS */}
            <div className="testimonals_container_fluid">
                <div className="testimonals_container">
                    
                </div>
            </div>
    </div>
  )
}

export default Portfolio;