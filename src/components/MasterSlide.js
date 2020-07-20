import React, { useEffect } from 'react';

export default function MasterSlide({ pptx }) {
    useEffect(() => {
        pptx.layout = "LAYOUT_WIDE";
        pptx.defineSlideMaster({
          title: "MASTER_SLIDE",
          bkgd: "FFFFFF",
          objects: [        
            { rect: { x: 0.0, y: 7, w: "100%", h: 0.75, fill: "F1F1F1" } },        
            { image: { x: 12, y: 6, w: 1, h: 0.75, path: "logo192.png" } },
            { line: { x: 0, y: 7, w:"100%", h:0.0, line:'FF0000', lineSize:5 } },
            { text: { text: "Footer Notes", options: { x: 0, y: 7, w: 5.5, h: 0.75 } } },
          ],
          // slideNumber: { x: 0.3, y: "90%" },
        });
        let slide = pptx.addSlide({ masterName: "MASTER_SLIDE" });
        slide.addText("Top Slide", { x: 0.5, y: 0.7, fontSize: 18 });
    }, []);
    return null;
}


