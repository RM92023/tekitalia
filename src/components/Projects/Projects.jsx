import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './Projects.css';

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="projects">
      <h2>Proyectos</h2>
      <Slider {...settings}>
        <div className="project-item">
          <h3>Contenedores Reacondicionados</h3>
          <img src="/1.jpeg" alt="Proyecto 1" className="project-image" />
          <p>Los contenedores refrigerados están hechos en base a estructura de acero inoxidable y aluminio full lavable. Posee aislación de poliuretano.
          </p>
        </div>
        <div className="project-item">
          <h3>Contenedores Reacondicionados</h3>
          <img src="/2.jpeg" alt="Proyecto 1" className="project-image" />
          <p>Los contenedores refrigerados están hechos en base a estructura de acero inoxidable y aluminio full lavable. Posee aislación de poliuretano.
          </p>
        </div>
        <div className="project-item">
          <h3>Contenedores Reacondicionados</h3>
          <img src="/3.jpeg" alt="Proyecto 1" className="project-image" />
          <p>Los contenedores refrigerados están hechos en base a estructura de acero inoxidable y aluminio full lavable. Posee aislación de poliuretano.
          </p>
        </div>
        <div className="project-item">
          <h3>Contenedores Reacondicionados</h3>
          <img src="/4.jpeg" alt="Proyecto 1" className="project-image" />
          <p>Los contenedores refrigerados están hechos en base a estructura de acero inoxidable y aluminio full lavable. Posee aislación de poliuretano.
          </p>
        </div>
        <div className="project-item">
          <h3>Contenedores Reacondicionados</h3>
          <img src="/5.jpeg" alt="Proyecto 1" className="project-image" />
          <p>Los contenedores refrigerados están hechos en base a estructura de acero inoxidable y aluminio full lavable. Posee aislación de poliuretano.
          </p>
        </div>
        <div className="project-item">
          <h3>Contenedores Reacondicionados</h3>
          <img src="/6.jpeg" alt="Proyecto 1" className="project-image" />
          <p>Los contenedores refrigerados están hechos en base a estructura de acero inoxidable y aluminio full lavable. Posee aislación de poliuretano.
          </p>
        </div>
        <div className="project-item">
          <h3>Contenedores Reacondicionados</h3>
          <img src="/7.jpeg" alt="Proyecto 1" className="project-image" />
          <p>Los contenedores refrigerados están hechos en base a estructura de acero inoxidable y aluminio full lavable. Posee aislación de poliuretano.
          </p>
        </div>
        <div className="project-item">
          <h3>Contenedores Reacondicionados</h3>
          <img src="/8.jpeg" alt="Proyecto 1" className="project-image" />
          <p>Los contenedores refrigerados están hechos en base a estructura de acero inoxidable y aluminio full lavable. Posee aislación de poliuretano.
          </p>
        </div>
        <div className="project-item">
          <h3>Contenedores Reacondicionados</h3>
          <img src="/9.jpeg" alt="Proyecto 1" className="project-image" />
          <p>Los contenedores refrigerados están hechos en base a estructura de acero inoxidable y aluminio full lavable. Posee aislación de poliuretano.
          </p>
        </div>
        <div className="project-item">
          <h3>Contenedores Reacondicionados</h3>
          <img src="/10.jpeg" alt="Proyecto 1" className="project-image" />
          <p>Los contenedores refrigerados están hechos en base a estructura de acero inoxidable y aluminio full lavable. Posee aislación de poliuretano.
          </p>
        </div>
      </Slider>
    </section>
  );
}

export default Projects;
