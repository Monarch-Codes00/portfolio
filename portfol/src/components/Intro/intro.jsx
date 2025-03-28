import React from 'react';
import './intro.css';
import bg from '../../assets/sanp.jpg';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';



const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Chris</span> <br />Frontend Developer</span>
                <p className="introPara">I am a Frontend developer with 2 years experience<br />I build all sorts of projects ranging from visually appealing and user friendly websites<br></br> To console based applications.</p>
                <button className="btn"><img src={btnImg} alt="Hire" className='btnImg'/> Hire Me</button>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;