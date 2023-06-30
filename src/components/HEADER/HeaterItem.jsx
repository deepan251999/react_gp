import React from 'react';

function HeaterItem(props) {
  return (
    <div className='head_item'style={{textAlign:"center",padding:"40px"}}>
         <img src={props.headerData.headicon} alt="" style={{background:"#ffc451",width:"32px"}}/>
          <p style={{padding:"15px 0",fontSize:"20px"}}>{props.headerData.headpara}</p>
    </div>
  )
}

export default HeaterItem;