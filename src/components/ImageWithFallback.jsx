import React, { useState } from 'react';

const ImageWithFallback = ({ src, alt, className, style, fallbackSrc = 'https://via.placeholder.com/600x400?text=WM+Wave+Image+Not+Found' }) => {
    const [imgSrc, setImgSrc] = useState(src);

    const handleError = () => {
        if (imgSrc !== fallbackSrc) {
            setImgSrc(fallbackSrc);
        }
    };

    return (
        <img 
            src={imgSrc} 
            alt={alt} 
            className={className} 
            style={style} 
            onError={handleError} 
        />
    );
};

export default ImageWithFallback;
