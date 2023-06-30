import React from 'react'

function AboutItem(props) {
  return (
    <div style={{display:"flex",padding:"20px 10px"}}>
            <div>
             
                 <img src={props.aboutData.aboutIcon} alt="" style={{margin:"10px",width:"40px"}}/>
            </div>

              <div>
                <h1 style={{fontSize:"20px",lineHeight:"2.5rem"}}>{props.aboutData.aboutHead}</h1>
                <p style={{fontSize:"15px",color:"#848484"}}>{props.aboutData.aboutPara}</p>
              </div>
    </div>
  )
}

export default AboutItem;