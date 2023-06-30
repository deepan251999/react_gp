import React from 'react'

function ServiceItem(props) {
  return (
    <div className='service_item'>
      <p style={{width: "60px",height: "60px",margin:"0 auto 20px auto",background:"#ffc451",borderRadius:"6px",display:"flex",justifyContent:"center",alignItems:"center",padding:"0"}}>{props.serviceData.serviceIcon}</p>
        <h6>{props.serviceData.serviceHead}</h6>
        <p>{props.serviceData.servicePara}</p>
    </div>
  )
}

export default ServiceItem