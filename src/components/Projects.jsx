import React from 'react';

function Projets (){
    return(
        <section className="projects">
        <div className="item">
          <img src="./images/bg2.jpg" loading="lazy" alt="proyecto ux" />
          <h3>Proyecto 1</h3>
          <p>Descripcion</p>
          <a href="/">Enlace al proyecto</a>
        </div>
        <div className="item">
          <img src="./images/bg2.jpg" loading="lazy" alt="proyecto web" />
          <h3>Proyecto 1</h3>
          <p>Descripcion</p>
          <a href="/">Enlace al proyecto</a>
        </div>
        <div className="item">
          <img src="./images/proyecto.jpg" loading="lazy" alt="proyecto mobile" />
          <h3>Proyecto 1</h3>
          <p>Descripcion</p>
          <a href="/">Enlace al proyecto</a>
        </div>
      </section>
    )
}
export default Projets;