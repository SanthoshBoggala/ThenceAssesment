import React, { useState } from 'react';
import './customAccordion.css'

const CustomAccordionItem = ({ id, title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='myAccord'>
            <div 
                className='accordTop'
                onClick={toggleAccordion}
            >
                <div>accordHeading</div>
                <div>{isOpen ? "-" : "+"}</div>
            </div>
            { isOpen && (
                <div className='accordContent'>
                    accordContent accordContent accordContent vvaccordContentaccordContentvvaccordContentvv accordContentv
                </div>
            ) }
        </div>
    );
};

export default CustomAccordionItem;
