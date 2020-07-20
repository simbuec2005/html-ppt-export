import React, { useEffect } from 'react';

export default function Text({ pptx }) {
    useEffect(() => {
        let slide = pptx.addSlide();
        slide.addText("Text Slide");
    }, []);
    return null;
}


