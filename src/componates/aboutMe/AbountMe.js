import React from 'react'
import './AboutMe.css'
import me from "../../assets/Home/AboutMepp.jpg"
export default function AbountMe() {
  return (
  <div class= "full">
  <div class="container">
  <div class="image">
    <img src={me}/>
  </div>
  <div class="text">
    <p>As an accomplished ORMB and Control-M developer, I bring a strong foundation in software development and a passion for continuous learning to deliver innovative solutions. With a cum laude graduation from the University of Illinois at Chicago (UIC), I have developed a solid understanding of software engineering principles and techniques.

I thrive in dynamic environments that require problem-solving and critical thinking. By leveraging my knowledge and experience, I have successfully developed and maintained robust applications, ensuring optimal performance and adherence to industry standards. With a strong focus on continuous improvement, I am dedicated to staying up-to-date with the latest technologies and methodologies in order to deliver cutting-edge solutions.

My commitment to excellence has been recognized through my graduation with cum laude honors from UIC. This achievement is a testament to my strong work ethic, academic prowess, and dedication to personal growth.</p>
  </div>
</div>
</div>

  );
}
