import React from 'react'

export default function index({ image, content, title }) {
    return (
        <div className='deliveryCard'>
            <img src={require(`../../../assets/${image}.png`)} className='deliveryCardImage' />
            <h2 className='deliveryCardHeading'>{title}</h2>
            <p className='deliveryCardContent'>{content}</p>
        </div>
    )
}
