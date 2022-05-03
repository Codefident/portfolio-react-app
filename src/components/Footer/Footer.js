import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

import './Footer.css';

export default function Footer(props) {
    const delay = 3000;
    return (
        <Slide delay={delay} direction="up">
            <Fade delay={delay}>
                <div className="footer">
                    <a 
                        target="_blank" 
                        rel="noreferrer" 
                        href={"https://github.com/Codefident"}
                    >
                        <img src={require('../../GitHub-Mark-Light-32px.png')} alt="GitHub"/>
                    </a>
                </div>
            </Fade>
        </Slide>
    );
};
