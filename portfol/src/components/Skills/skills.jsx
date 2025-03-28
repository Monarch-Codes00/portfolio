import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">My Persona</span>
            <span className="skillDesc">I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript, React  as well as design software such as Figma .</span>
            <div className="skillBars">
                {/* <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>This is a demo text, you can write your own content here.</p>
                    </div>
                </div> */}
                <div className="skillBar">
               
                    <div className="skillBarText">
                        <h2>Website Design</h2>
                        <p>Clean user friendly and interactive website designs with multiple variations.</p>
                    </div>
                </div>
                <div className="skillBar">
                  
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <p>Whether its banking ,commerce or  a streaming app, I've got you covered  </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;