import logo from "./logo.svg";
import './App.css';

import { Fade } from "react-awesome-reveal";

import WelcomeBanner from "./components/WelcomeBanner/WelcomeBanner";


function App() {
    return(
        <div className="App">
            <Fade delay={1000} duration={2000}>
                <header className="App-header">
                    <WelcomeBanner/>
                </header>
            </Fade>
        </div>
    );
}

export default App;
