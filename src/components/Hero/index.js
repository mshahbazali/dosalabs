import React from 'react'

export default function index() {
    return (
        <div className='heroContainer'>
            <div className='heroContainerLeft'>
                <h2 className='firstHeading'>Delicious</h2>
                <h2 className='secondHeading'>Quench the Hunger</h2>
                <p className='heroContent'>Our job is to filling your tummy with delicious food and  with fast and free delivery</p>
                <button className='heroCta'>Explore More</button>
            </div>
            <div className='heroContainerRight'>
                <img src={require("../../assets/heroImage.png")} className="heroImage" />
            </div>
        </div>
    )
}
