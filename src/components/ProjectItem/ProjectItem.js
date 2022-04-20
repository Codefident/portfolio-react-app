import React, { useState } from 'react';

import './ProjectItem.css';

export default function ProjectItem(props) {

    const [opacity, changeOpacity] = useState(0);

    return (
        <>
        <div className='Project-item-flying-div'>
        </div>    
        <div className='Project-item'>
            <div className='Project-item-name'>{props.name}</div>
            <div className='Project-item-img'>
                <img src={props.img} alt={props.name + " image"}/>
            </div>
        </div>
        </>
    );
}
