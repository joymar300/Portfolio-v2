import { Container } from "./styles";
import python from "../../assets/python.svg"
import java from "../../assets/java.svg"
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
// import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import foto from "../../assets/foto.jpg"

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>sobre mi</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Soy un desarrollador de software que da el 100% en cada proyecto de corto a largo plazo, tanto en el ambiente laboral como en el personal.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            Construyo diferentes tipos de aplicaciones web utilizando tecnologías como JavaScript, React, Vue, HTML, CSS y Bootstrap.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            Me apasiona aprender nuevas tecnologías y mejorar mis habilidades de desarrollo para crear aplicaciones web innovadoras y eficientes.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={400} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div className="education">
            <h3>Education:</h3>
            <h4> ANÁLISIS Y DESARROLLO DE SISTEMAS DE INFORMACIÓN (ADSI)</h4>
            <p>Servicio Nacional de Aprendizaje (SENA)</p>
            <p>2021-2023</p>


          </div>
          <div className="education">
          
            <h4>INGENIERIA DE SISTEMA</h4>
            <p>Universidad Libre y a Distancia (UNAD)</p>
            <p>2024-cursando</p>


          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={550} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div className="experience">
            <h3>Experience:</h3><h4>DESARROLLADOR JR C#</h4>
            <p>H UJUETA S.A.S | Octubre 2023 - Abril 2024</p>
            <p>Desarrollador web en el departamento de sistemas en empresa ferretera. Ejecutaba labores de asistencia al cliente sobre el uso de los aplicativos, hacer mantenimiento constante a los aplicativos y a las API según las necesidades de los usuarios y problemas o bugs presentados.</p>
          </div>
          <div className="experience">
            <h3></h3><h4>DESARROLLADOR BACK-END NESTJS</h4>
            <p>VIALCODE | febrero 2025 - junio 202</p>
            <p>Desarrollador back end en empresa creadora de software y aplicativos web. Ejecutaba labores de mantenimiento y creación de diferentes API para los diferentes servicios bajo metodos de arquitectura clean code.</p>
          </div>

        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Main Skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={vueIcon} alt="Vue" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.21 * 1000}>
          <img src={foto} alt="Vinayak Singh" style={{borderRadius: '20px'}} />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
