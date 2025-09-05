import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";
const projects = [
  {title: 'Qlab', description: 'Aplicativo educativo centrado en la quimica para estudiandes de los grados de primaria y bachillerato', techStack: ['React', 'TypeScript','css','firebase'], githubLink: 'https://github.com/joymar300/Qlab.git', liveDemoLink: 'https://qlab-b8d8e.web.app/'},
  {title: 'Train it', description: 'Aplicativo educativo centrado en ayudar a estudiandes de los grados de bachillerato en sus saberes PRO e ICFES', techStack: ['React', 'TypeScript', 'Nextjs','Tailwind','Postgres'], githubLink: 'https://github.com/joymar300/nextui-trainit.git', liveDemoLink: 'https://nextui-trainit.vercel.app/'},
  {title: 'Weltsite', description: 'Aplicativo educativo centrado en ayudar a los estudiantes de primaria con la materia de historia', techStack: ['React', 'firebase'], githubLink: 'https://github.com/joymar300/WELSITE.git', liveDemoLink: 'https://welsite.web.app/'},
  {title: 'Pokedex', description: 'Aplicativo de prueba para consumir API REST y usar tailwind', techStack: ['React', 'tailwindcss', 'TypeScript'], githubLink: 'https://github.com/joymar300/pokedex.git', liveDemoLink: 'https://pokedex-qgfu8xdvs-joymars-projects.vercel.app/'},

]; 

export function Project() {
  return (
    <Container id="project">
      <h2>Mis Proyectos</h2>
      <div className="projects">

        {
          projects.map((project, index) => (
            <>
              <ScrollAnimation animateIn="flipInX">
                <div className="project">
                  <header>
                    <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <title>Folder</title>
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <div className="project-links">
                      <a href={project.githubLink} target="_blank" rel="noreferrer">
                        <img src={githubIcon} alt="GitHub" />
                      </a>
                    { project.liveDemoLink ?  
                      <a href={project.liveDemoLink} target="_blank" rel="noreferrer">
                      <img src={externalLink} alt="Visit site" />
                      </a>: null
                    
                  }
                    </div>
                  </header>
                  <div className="body">
                    <h3>  {project.title}</h3>
                    <p>
                      {project.description}
                    </p>
                  </div>
                  <footer>
                    <ul className="tech-list">
                      {project.techStack.map((tech, idx) => (
                        <li key={idx}>{tech}</li>
                      ))}
                 
                    </ul>
                  </footer>
                </div>
              </ScrollAnimation>
            
            </>
          ))
        }
       
      </div>
    </Container>
  );
}