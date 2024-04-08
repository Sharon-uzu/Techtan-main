import React from 'react'
import flogo from '../../Images/logo.png'
import arr from '../../Images/arr.png'

const Footer = () => {
  return (
    <div>
        <footer>
            <section>
                <div className='lg'>
                    <img src={flogo} alt="" />
                </div>

                <div>
                    <h5>Our Services</h5>
                    <a> Traning</a>
                    <a>Consultancy</a>
                    <a>Tech Off-shoring</a>
                    <a>Technical Support</a>
                    <a>BlockChain Academy</a>
                </div>

                <div>
                    <h5>Courses</h5>
                    <a> Data Analysis</a>
                    <a>Product Design</a>
                    <a>Web Development</a>
                    <a>Graphics Design</a>
                    <a>Digital Marketing</a>
                </div>

                <div>
                    <h5>Events</h5>
                 
                    <a>TechTalk</a>
                    <a>Founders TimeOut</a>
                    
                </div>

                <div className='form'>
                    <h5>Contact</h5>
                    <a href="mailto:hi@mytechtan.com">hi@mytechtan.com</a>
                    <a href="tel:090-78567-405">090-78567-405</a> <br />

                    <h5>Get latest information on our training </h5>
                    <form className='f-form'>
                        <input type="email" placeholder='Email Address'/>
                        <button type="submit">
                            <img src={arr} alt="" />
                        </button>
                    </form>
                </div>
            </section>
        </footer>
    </div>
  )
}

export default Footer