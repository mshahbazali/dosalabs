import React from 'react'

export default function index() {
    return (
        <div className='lastSection'>
            <div className='aboutContainer'>
                <div className='aboutContainerLeft'>
                    <img src={require('../../assets/aboutimage.png')} alt="" className='aboutContainerLeftImage' />
                </div>
                <div className='aboutContainerLeftRight'>
                    <span className='aboutContainerRightTitle'>WHAT THEY SAY</span>
                    <h2 className='aboutContainerRightHeading'>What Our Customers Say About Us</h2>
                    <p className='customerReview'>“Fudo is the best. Besides the many and delicious meals, the service is also very good, especially in the very  fast delivey. I highly recommend Fudo  to you”.</p>
                    <div className='customerReviewContainer'>
                        <img src={require("../../assets/boy.jpg")} alt="" className='customerImage' />
                        <div className='customerMetaDataConatiner'>
                            <span className='customerName'>Theresa Jordan</span>
                            <p className='customerPosition'>Food Enthusiast</p>
                        </div>
                    </div>
                    <div className='ratingContainer'>
                        <img src={require("../../assets/star.png")} alt="" className='starImage' />
                        <span className='ratingNumber'>4.8</span>
                    </div>
                </div>
            </div>
            {/* Footer  */}
            <div className='footerContainer'>
                <div className='fsection1'>
                    <img src={require("../../assets/logo.png")} alt="" className='footerLogo' />
                    <p className='aboutContent'>Our job is to filling your tummy with delicious food and  with fast and free delivery.</p>
                    <div className='socialNetwork'>
                        <img src={require("../../assets/instagram.png")} alt="" className='socialIcon' />
                        <img src={require("../../assets/facebook.png")} alt="" className='socialIcon' />
                        <img src={require("../../assets/twitter.png")} alt="" className='socialIcon' />
                    </div>
                </div>
                <div className='fsection2'>
                    <span className='footerHeading'>About</span>
                    <ul className='footerNav'>
                        <li className='footerNavItem'>About Us</li>
                        <li className='footerNavItem'>Features</li>
                        <li className='footerNavItem'>News</li>
                        <li className='footerNavItem'>Menu</li>
                    </ul>
                </div>
                <div className='fsection3'>
                    <span className='footerHeading'>Company</span>
                    <ul className='footerNav'>
                        <li className='footerNavItem'>Why Fudo?</li>
                        <li className='footerNavItem'>Partner With Us</li>
                        <li className='footerNavItem'>FAQ</li>
                        <li className='footerNavItem'>Blog</li>
                    </ul>
                </div>
                <div className='fsection4'>
                    <span className='footerHeading'>Support</span>
                    <ul className='footerNav'>
                        <li className='footerNavItem'>Account</li>
                        <li className='footerNavItem'>Support Center</li>
                        <li className='footerNavItem'>Feedback</li>
                        <li className='footerNavItem'>Contact Us</li>
                        <li className='footerNavItem'>Accessibilty</li>
                    </ul>
                </div>
                <div className='fsection5'>
                    <span className='footerHeading'>Get in Touch</span>
                    <p className='newsLatterContentFirst'>Question or feedback?</p>
                    <p className='newsLatterContentSecond'>We’d love to hear from you</p>
                    <div className='newslatter'>
                        <input type="text" className='newslatterInput' placeholder='Email Address' />
                        <img src={require("../../assets/emailbtn.png")} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <p className='copyrightCredit'>Ⓒ Copyright 2022 Dosa Labs | All Right Reserved | Designed and Developed by AbdullahNaeem</p>
            </div>
        </div>
    )
}
