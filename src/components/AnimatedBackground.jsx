import React from 'react';

const AnimatedBackground = () => {
    const renderCube = (className) => (
        <div className={`cube-wrapper ${className}`}>
            <div className="cube-faces">
                <div className="face front"></div>
                <div className="face back"></div>
                <div className="face right"></div>
                <div className="face left"></div>
                <div className="face top"></div>
                <div className="face bottom"></div>
            </div>
        </div>
    );

    return (
        <div className="animated-bg-container">
            {renderCube('cube-1')}
            {renderCube('cube-2')}
            {renderCube('cube-3')}
            {renderCube('cube-4')}
            {renderCube('cube-5')}
            <div className="bg-overlay"></div>
        </div>
    );
};

export default AnimatedBackground;
