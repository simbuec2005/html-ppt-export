import React, { useEffect } from 'react';

export default function Image({ pptx }) {
    useEffect(() => {
        let slide = pptx.addSlide();
        slide.addImage({ path:'logo192.png', x:1, y:1, w:8.0, h:4.0 });
    }, []);
    return null;
}


