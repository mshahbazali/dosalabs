import React from 'react'
import { DeliveryCard } from '../index'
export default function index() {
    return (
        <div className='sectionOneContainer'>
            <div className='subheadingContainer'>
                <span className='subheading'>WHAT WE SERVE</span>
            </div>
            <div className='headingContainer'>
                <h2 className='heading'>Your Favorite Food Delivery Partner</h2>
            </div>
            <div className='deliveryCardContainer'>
                <div className='deliveryCard'>
                    <img src={require(`../../assets/deliveryImage1.png`)} className='deliveryCardImage' />
                    <h2 className='deliveryCardHeading'>Easy To Order</h2>
                    <p className='deliveryCardContent'>You only need a few steps in ordering food</p>
                </div>
                <div className='deliveryCard'>
                    <img src={require(`../../assets/deliveryImage2.png`)} className='deliveryCardImage2' />
                    <h2 className='deliveryCardHeading'>Fastest Delivery</h2>
                    <p className='deliveryCardContent'>Delivery that is always ontime even faster</p>
                </div>
                <div className='deliveryCard'>
                    <img src={require(`../../assets/deliveryImage3.png`)} className='deliveryCardImage3' />
                    <h2 className='deliveryCardHeading'>Best Quality</h2>
                    <p className='deliveryCardContent'>Not only fast for us quality is also number one</p>
                </div>
            </div>
        </div>
    )
}
