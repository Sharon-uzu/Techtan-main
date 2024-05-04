import React, {useState} from 'react';
import vector from '../../Images/Vector 1.png'
import { FaGem } from "react-icons/fa";
import Modal from "react-modal";
import { PiVideoThin } from "react-icons/pi";
import { MdOutlineNoteAlt } from "react-icons/md";
import { TbUsersGroup } from "react-icons/tb";
import { FaFileDownload } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { RiPassValidLine } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { FaTabletAlt } from "react-icons/fa";
import { SiInternetcomputer } from "react-icons/si";
import { MdSwitchAccessShortcutAdd } from "react-icons/md";
import { RiVipFill } from "react-icons/ri";
import { SiAudiotechnica } from "react-icons/si";
import { FaSlideshare } from "react-icons/fa6";
import { SiGooglescholar } from "react-icons/si";
import { LuNetwork } from "react-icons/lu";







const Packages = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  function openModal(){
    setIsModalOpen(true)
  }

  function closeModal(){
    setIsModalOpen(false)
  }


  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const toggleModal1 = () => {
    setIsModalOpen1(!isModalOpen1);
  };
  function openModal1(){
    setIsModalOpen1(true)
  }

  function closeModal1(){
    setIsModalOpen1(false)
  }

  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const toggleModal2 = () => {
    setIsModalOpen2(!isModalOpen2);
  };
  function openModal2(){
    setIsModalOpen2(true)
  }

  function closeModal2(){
    setIsModalOpen2(false)
  }

  return (
    <div>
        <section className='pkg'>
            <h3>Premium Packages</h3>
            
            <img src={vector} alt=""  className='v1'/>
            <p>You can become a Techtan premium member and enjoy exclusive offers with your membership card.</p>

            <div className="view">

                <div className="view-c">
                    <div className='tp'>
                        <FaGem className='p-img p2'/>
                        <h5> Siver Plan</h5>
                        
                        <section>
                          <p>12 months validity period</p>
                          <p>Access to 3 main courses</p>
                          <p className='pi'>Get 1 internet router</p>
                          <p className='pi'>Get 1 tablet for free</p>
                        </section>

                        <main>
                          <button onClick={openModal}>VIEW </button>
                        </main>
                        
                    </div>

                    <div className='tp'>
                        <FaGem className='p-img p1'/>
                        <h5>Gold Plan</h5>
                        <section>
                          <p>18 months validity period</p>
                          <p>Access to 2 main courses</p>
                          <p className='pi'>Scholarship to one of your kids/ward</p>
                          <p className='pi'>Get 1 tablet for free</p>
                        </section>

                        <main>
                          <button onClick={openModal1}>VIEW </button>
                        </main>
                    </div>

                    <div className='tp'>
                        <FaGem className='p-img p3'/>
                        <h5>Diamond Plan</h5>
                        <section>
                          <p>24 months validity period</p>
                          <p>Access to 3 main courses</p>
                          <p className='pi'>Scholarship to two of your kids/wards</p>
                          <p className='pi'>Get 1 tablet for free</p>
                        </section>

                        <main>
                          <button onClick={openModal2}>VIEW </button>
                        </main>
                    </div>
                </div>

            </div>
            
        </section>

        {/* siver */}

        <Modal
            isOpen={isModalOpen}
            onRequestClose={toggleModal}
            contentLabel="Example Modal"
            className={`bg-transparnt`}
            style={{ 
              overlay: {
                position: "fixed",
                display:'flex',
                justifyContent: 'center',
                alignItems: 'center',
                top: "0",
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "hsla(0, 0%, 0%, .8)",
                zIndex:100000,
                
              },
            }}
          >
           
           <section className='modal'>

            <div className='pack'>

              <div className='close'>

                <button  onClick={closeModal}>x</button>

              </div>

              

                    <h3 style={{color:'silver'}}>SILVER <span style={{color:'#000'}}>NGN1,000,000</span></h3>

                    <div>
                      <RiPassValidLine className='p-i'/>
                      <p>12 months validity period</p>
                    </div>

                    <div>
                      <FaBook className='p-i'/>
                      <p>Access to 3 main courses</p>
                    </div>

                    <div>
                      <FaTabletAlt className='p-i'/>
                      <p>Get 1 tablet for free</p>
                    </div>

                    <div>
                      <SiInternetcomputer className='p-i'/>
                      <p>Get 1 5G-internet Router</p>
                    </div>

                    <div>
                      <FaBook className='p-i'/>
                      <p>Access to 2 short term courses</p>
                    </div>

                    <div>
                      <MdSwitchAccessShortcutAdd className='p-i'/>
                      <p>Unlimited Access to the Hub</p>
                    </div>

                    <div>
                      <RiVipFill className='p-i'/>
                      <p>VIP slot at the TalkTech event by Techtan.</p>
                    </div>

                    <div>
                      <SiAudiotechnica className='p-i'/>
                      <p>Technical support for your businesses.</p>
                    </div>

                    <div>
                      <FaSlideshare className='p-i'/>
                      <p>0.01% share of Techtan(vested for 3years)</p>
                    </div>

                    <div>
                      <GrCertificate className='p-i'/>
                      <p>Certifications</p>
                    </div>


                    <button className='btn' style={{backgroundColor:'silver'}}><Link to='/enroll'>Get Your Membership Card</Link></button>


                </div>

           </section>
              
                

              

           
            
          </Modal>


          {/* gold */}

        <Modal
            isOpen={isModalOpen1}
            onRequestClose={toggleModal1}
            contentLabel="Example Modal"
            className={`bg-transparnt`}
            style={{ 
              overlay: {
                position: "fixed",
                display:'flex',
                justifyContent: 'center',
                alignItems: 'center',
                top: "0",
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "hsla(0, 0%, 0%, .8)",
                zIndex:100000,
                
              },
            }}
          >
           
           <section className='modal'>

            <div className='pack'>

              <div className='close'>

                <button  onClick={closeModal1}>x</button>

              </div>

              

                    <h3>GOLD <span style={{color:'#000'}}>NGN2,000,000</span></h3>

                    <div>
                      <RiPassValidLine className='p-i'/>
                      <p>18 months validity period</p>
                    </div>

                    <div>
                      <FaBook className='p-i'/>
                      <p>Access to 2 main courses</p>
                    </div>

                    <div>
                      <FaBook className='p-i'/>
                      <p>Access to 1 course in Blockchain Academy</p>
                    </div>

                    <div>
                      <FaTabletAlt className='p-i'/>
                      <p>Get 1 tablet for free</p>
                    </div>

                    <div>
                      <SiInternetcomputer className='p-i'/>
                      <p>Get 1 5G-internet Router</p>
                    </div>

                    <div>
                      <FaBook className='p-i'/>
                      <p>Access to 2 short term courses</p>
                    </div>

                    <div>
                      <MdSwitchAccessShortcutAdd className='p-i'/>
                      <p>Unlimited Access to the Hub</p>
                    </div>

                    <div>
                      <RiVipFill className='p-i'/>
                      <p>VIP slot at the TalkTech event by Techtan.</p>
                    </div>

                    <div>
                      <SiAudiotechnica className='p-i'/>
                      <p>Technical support for your businesses.</p>
                    </div>

                    <div>
                      <FaSlideshare className='p-i'/>
                      <p>0.015% share of Techtan(vested for 3years)</p>
                    </div>

                    <div>
                      <SiGooglescholar className='p-i'/>
                      <p>Scholarship to one of your kids/ward or siblings (8 -13 Yrs) to learn a Tech skill at Code Ambassadors. </p>
                    </div>

                    <div>
                      <GrCertificate className='p-i'/>
                      <p>Certifications</p>
                    </div>

                    


                    <button className='btn'><Link to='/enroll'>Get Your Membership Card</Link></button>


                </div>

           </section>
              
                

              

           
            
          </Modal>




          {/* DIAMOND */}

        <Modal
            isOpen={isModalOpen2}
            onRequestClose={toggleModal2}
            contentLabel="Example Modal"
            className={`bg-transparnt`}
            style={{ 
              overlay: {
                position: "fixed",
                display:'flex',
                justifyContent: 'center',
                alignItems: 'center',
                top: "0",
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "hsla(0, 0%, 0%, .8)",
                zIndex:100000,
                
              },
            }}
          >
           
           <section className='modal'>

            <div className='pack'>

              <div className='close'>

                <button  onClick={closeModal2}>x</button>

              </div>

              

                    <h3 style={{color:'lightblue'}}>DIAMOND <span style={{color:'#000'}}>NGN3,500,000</span></h3>

                    <div>
                      <RiPassValidLine className='p-i'/>
                      <p>24 months validity period</p>
                    </div>

                    <div>
                      <FaBook className='p-i'/>
                      <p>Access to 3 main courses</p>
                    </div>

                    <div>
                      <FaBook className='p-i'/>
                      <p>Access to 1 course in Blockchain Academy</p>
                    </div>

                    <div>
                      <FaTabletAlt className='p-i'/>
                      <p>Get 1 tablet for free</p>
                    </div>

                    <div>
                      <SiInternetcomputer className='p-i'/>
                      <p>Get 1 5G-internet Router</p>
                    </div>

                    <div>
                      <FaBook className='p-i'/>
                      <p>Access to 3 short term courses</p>
                    </div>

                    <div>
                      <MdSwitchAccessShortcutAdd className='p-i'/>
                      <p>Unlimited Access to the Hub</p>
                    </div>

                    <div>
                      <RiVipFill className='p-i'/>
                      <p>VIP slot at the TalkTech event by Techtan.</p>
                    </div>

                    <div>
                      <RiVipFill className='p-i'/>
                      <p>A website for your business.</p>
                    </div>

                    <div>
                      <SiAudiotechnica className='p-i'/>
                      <p>Technical support for your businesses.</p>
                    </div>

                    <div>
                      <FaSlideshare className='p-i'/>
                      <p>0.025% share of Techtan(vested for 3years)</p>
                    </div>

                    <div>
                      <SiGooglescholar className='p-i'/>
                      <p>Scholarship to two of your kids/ward or siblings (8 -13 Yrs) to learn a Tech skill at Code Ambassadors. </p>
                    </div>

                    <div>
                      <LuNetwork  className='p-i'/>
                      <p>Admission into Techtans Angel network (TAN)</p>
                    </div>

                    <div>
                      <GrCertificate className='p-i'/>
                      <p>Certifications</p>
                    </div>


                    <button className='btn' style={{backgroundColor:'lightblue'}}><Link to='/enroll'>Get Your Membership Card</Link></button>


                </div>

           </section>
              
                

              

           
            
          </Modal>

    </div>
  )
}

export default Packages