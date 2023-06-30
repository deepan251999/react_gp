import React from 'react'
import ServiceItem from './ServiceItem';
import {FaBasketballBall} from "react-icons/fa";
import {FiFileText} from "react-icons/fi";
import {BiTachometer,BiWorld,BiArch}from "react-icons/bi";


import "./service.css";
function Service() {
    const serviceReuse = [{"serviceIcon":<FaBasketballBall style={{fontSize:"25px"}}/>,"serviceHead":"Lorem Ipsum","servicePara":"Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"},
    {"serviceIcon":<FiFileText style={{fontSize:"25px"}}/>,"serviceHead":"Sed ut perspiciatis","servicePara":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"},
    {"serviceIcon":<BiTachometer style={{fontSize:"25px"}}/>,"serviceHead":"Magni Dolores","servicePara":"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia"},
    {"serviceIcon":<BiWorld style={{fontSize:"25px"}}/>,"serviceHead":"Nemo Enim","servicePara":"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis"},
    {"serviceIcon":<BiArch style={{fontSize:"25px"}}/>,"serviceHead":"Dele cardo","servicePara":"Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur"},
    {"serviceIcon":<BiArch style={{fontSize:"25px"}}/>,"serviceHead":"Divera don","servicePara":"Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur"},]
  return (
    <div className='service_container_fluid'>
        <div className="service_container">
            <h2>SERVICES</h2>
            <p>CHECK OUR SERVICES</p>
            <div className="service_container_item">
                {
                    serviceReuse.map((item)=>{
                        return(<ServiceItem serviceData={item}/>)
                    })
                }
            </div>
        </div>
        <div className='service_container_item2'>
            <div className="service_container_item2_bg">
                <div className="service_container">
                <h6>Call To Action</h6>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button>Call To Action</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service;

