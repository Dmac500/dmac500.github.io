import React from 'react'
import Typical from 'react-typical'
import './Profile.css'
export default function Profile() {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='colz'>
            <div className='colz-icon'>
              <a href='https://www.facebook.com/dylan.mccarthy.39589'>
              <i className='fa fa-facebook-square'></i>
            </a>
            <a href='https://www.youtube.com/channel/UCPqVAfR-YAvaY__TekuYsbg/featured'>
              <i className='fa fa-youtube'></i>
            </a>
            <a href='https://www.instagram.com/dmac_5000/'>
              <i className='fa fa-instagram'></i>
            </a>
            <a href='https://www.linkedin.com/in/dylan-mccarthy-78a3451a2/'>
              <i className='fa fa-linkedin-square'></i>
            </a>
            <a href='https://github.com/Dmac500'>
              <i className='fa fa-github'></i>
            </a>
          </div>
          </div>
          <div className='profile-details-name'>
            <span className='primary-text'>
              {""}
              Hello, I'M <span className='highlighted-text'>Dylan McCarthy</span>
              </span>
              </div>
          <div className='profile-details-role'>
            <span className='primary-text'>
              {" "}
              <h1>
              {" "}
              <Typical 
              loop={Infinity}
              steps={[
                "Developer",
                1500,
                "Continuous Grower",
                1500,
                "UFC Fan",
                1500,
                "Engineer",
                1500,
                "Computer Scientist",
                1500,
                "Tutor",
                1500,
              ]}/>
              </h1>
              <span className='profile-role-tagline'>
              “A good programmer is someone who always looks both ways before crossing a one-way street.” - Doug Linder
              </span>
            </span>
            </div>
            <div className='profile-options'>
              <a href='Dylan_McCarthy.pdf' download="Dylan_McCarthy.pdf">
              <button className='btn highlighted-btn'>
              Get Resume
              </button>
              </a>
  
            </div>
        </div>
        <div className='profile-picture'>
          <div className='profile-picture-background'>

          </div>
        </div>
      </div>
    </div>
  );
}
