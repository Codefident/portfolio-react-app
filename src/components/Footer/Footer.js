import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

import './Footer.css';

export default function Footer() {
    return (
        <Slide delay={7000} direction="up">
            <Fade delay={7000}>
                <div className="footer">
                    <a target="_blank" rel="noreferrer" href={"https://github.com/Codefident"}>🙋‍♀️ my GitHub 🙋‍♂️</a>
                </div>
            </Fade>
        </Slide>
    );
};
