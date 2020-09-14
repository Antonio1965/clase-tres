import React from 'react';

function About (props){
    return(
        <section class="about" >
        <video></video>
        <img src="./images/foto PAPI.jpg" style={{maxWidth:"200px" }}alt="Foto de papi" />
      
        <p>
          {props.textos}
        </p>
      </section>
    )
}
export default About;