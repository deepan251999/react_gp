import React, { useState } from 'react';

function Toggle() {
    const [para,setpara]=useState(true)
    const handle=()=>{
        setpara(!para) ;
    }
  return(
    <div>
        <button onClick={handle}>CLICK ME</button>
       {para && <div><p>hii this is deepan</p>
        <h1>deepan</h1>
        </div>}
    </div>
  )

}

export default Toggle;
