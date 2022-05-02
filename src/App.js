import './App.css';

import { Fade, Slide } from "react-awesome-reveal";

import WelcomeBanner from "./components/WelcomeBanner/WelcomeBanner";
import BannerBottomText from './components/BannerBottomText/BannerBottomText';
import ProjectItem from './components/ProjectItem/ProjectItem';
import Footer from './components/Footer/Footer';


const projects = [
    {
        name: "Kulki",
        url: "https://codefident.github.io/kulki/",
        github: "https://github.com/Codefident/kulki",
        img: "."
    },
    {
        name: "WebPlayer",
        url: "#",
        github: "https://github.com/Codefident/web-player",
        img: "."
    },
    {
        name: "Pacman - map generator",
        url: "https://codefident.github.io/pacman-map-generator/",
        github: "https://github.com/Codefident/pacman-map-generator",
        img: "."
    }
]


function App() {

    const projectsNumber = projects.length;
    let delay = 2000;

    const projectsList = projects.map((project, i) => {
        delay += 1000;
        return (
            <Slide key={i} delay={delay} direction='right'>
                <ProjectItem index={i} name={project.name} url={project.url} github={project.github} img={project.img}/>
            </Slide>
        );
    })

    return(
        <div className="App">

            <div className="App-content">

                <Fade cascade delay={1000} duration={2000}>
                    <Slide delay={1000} direction='up'>
                        <WelcomeBanner/>
                    </Slide>
                    <Slide delay={2000} direction='up'>
                        <BannerBottomText/>
                    </Slide>
                </Fade>
                
                <div className="App-projects-list">
                    <Fade cascade delay={3000} duration={1000 * projectsNumber} damping={0.3}>
                        {projectsList}
                    </Fade>
                </div>

                <Footer/>
            </div>
            
        </div>
    );
}

export default App;
