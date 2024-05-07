import React, { useState } from 'react';
import './customAccordion.css'

const CustomAccordionItem = ({ title, content }) => {
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
                <div>{title}</div>
                <div className='accordBtn'>{isOpen ? "-" : "+"}</div>
            </div>
            { isOpen && (
                <div className='accordContent'>
                    {content}
                </div>
            ) }
        </div>
    );
};

export default CustomAccordionItem;
