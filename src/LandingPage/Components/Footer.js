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
                    <a  href='#'> Traning</a>
                    <a href='#'>Consultancy</a>
                    <a href='#'>Tech Off-shoring</a>
                    <a href='#'>Technical Support</a>
                    <a href='#'>BlockChain Academy</a>
                </div>

                <div>
                    <h5>Courses</h5>
                    <a  href='#'> Data Analysis</a>
                    <a href='#'>Product Design</a>
                    <a href='#'>Web Development</a>
                    <a href='#'>Graphics Design</a>
                    <a href='#'>Digital Marketing</a>
                </div>

                <div>
                    <h5>Events</h5>
                 
                    <a href='#'>TechTalk</a>
                    <a href='#'>Founders TimeOut</a>
                    
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