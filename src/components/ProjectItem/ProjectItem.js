import React from 'react';

import './ProjectItem.css';

export default function ProjectItem(props) {

    const projectItemOver = (event) => {
        const projectNameElement = document.querySelectorAll(".Project-item-name")[props.index];
        projectNameElement.style.color = "rgb(50, 205, 50)";
        projectNameElement.style.textShadow = "0px 0px 18px rgb(50, 205, 50)";
    };
    
    const projectItemOut = (event) => {
        const projectNameElement = document.querySelectorAll(".Project-item-name")[props.index];
        projectNameElement.style.color = "black";
        projectNameElement.style.textShadow = "none";
    };
    
    return (   
        <div className='Project-item' onMouseOver={projectItemOver} onMouseOut={projectItemOut}>
            <div className='Project-item-name'>{props.name}</div>
            <div className='Project-item-links'>
                <a className='Project-item-links-link' href={props.github} target="_blank" rel="noreferrer"><code>&lt;code&gt;</code></a>
                <a className='Project-item-links-link' href={props.url} target="_blank" rel="noreferrer">Try it! ▶</a>
            </div>
        </div>
    );
}