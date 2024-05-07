import React, { useState, useEffect } from 'react';
import './carousels.css'; 

const Carousels = () => {
    const data = [
        "Enhance fortune 50 company’s insights teams research capabilities",
        "Improve customer engagement through data-driven strategies",
        "Optimize operational efficiency with advanced analytics",
        "Drive innovation with actionable insights",
        "Maximize ROI with data-driven decision-making"
    ];
    
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
        }, 2000); // Change slide every 2 seconds

        return () => clearInterval(interval);
    }, [data.length]);

    return (
        <div className='carousel'>
            <div className='slides'>
                {data.map((item, index) => (
                    <div key={index} className={index === activeIndex ? 'slide active' : 'slide'}>
                        {item}
                    </div>
                ))}
            </div>
            <div className='dots'>
                {data.map((_, index) => (
                    <span
                        key={index}
                        className={index === activeIndex ? 'dot active' : 'dot'}
                        onClick={() => setActiveIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Carousels;
