import React from "react";
import Aplus from '../assets/Aplus.png';
import CIOS from '../assets/CIOS.png';
import CSIS from '../assets/CSIS.png';
import NetworkPlus from '../assets/NetworkPlus.png';
import SecurityPlus from '../assets/SecurityPlus.png';


const SkillsCerts = () => {
    return (
        <>
            <section className="skills" id='skills'>
                <h2 className="heading">Skills &amp; <span>Certifications</span></h2>

                <div className="services-container">
                    <div className="services-box">
                        <i className='bx bx-code-block'></i>
                        <h2>Specialized Skills</h2>

                        <i className="devicon-html5-plain" title="HTML5"></i>
                        <i className="devicon-javascript-plain" title="JavaScript"></i>
                        <i className="devicon-css3-plain" title="CSS"></i><br />
                        <i className="devicon-ruby-plain" title="Ruby"></i>
                        <i className="devicon-react-original colored" title="React"></i>
                        <i className="devicon-vscode-plain colored" title="VSCode"></i>
                        <i className="devicon-vscode-plain"></i>
                        <i className="devicon-jest-plain" title="Jest"></i>
                        <i className="devicon-rails-plain" title="Rails"></i>
                        <i className="devicon-nodejs-plain" title="Node JS"></i>
                    </div>
        
                    <div className="services-box">
                        <i className='bx bxs-certification'></i> 
                        <h2>Certifications</h2>
                        <img src= {Aplus} alt="A+ Certification" height={100} />
                        <img src= {NetworkPlus} alt="Network+ Certification" height={100} />
                        <img src= {SecurityPlus} alt="Security+ Certification" height={100} /><br />
                        <img src={CIOS} alt="CompTIA IT" height={100}/>
                        <img src={CSIS} alt="CompTIA IT" height={100} />

                    </div>
                </div>
            </section>
        </>
    )
}

export default SkillsCerts;