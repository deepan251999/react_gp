import React from 'react';

function PortfolioItem(props) {
  return (
    <div className='portfolio_item'>
        <div className='portfolio_item_left'>
            <p>{props.portfolioData.portfolioIcon}</p>
        </div>
        <div className='portfolio_item_right'>
            <h5>{props.portfolioData.portfolioHead}</h5>
            <div style={{display:"flex"}}>
            <span><strong>{props.portfolioData.portfolioStrong}</strong>
            {props.portfolioData.portfolioPara}</span>
            </div>
        </div>
    </div>
  )
}

export default PortfolioItem;