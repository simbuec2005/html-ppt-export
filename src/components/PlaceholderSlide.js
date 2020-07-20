import React, { useEffect } from 'react';

export default function PlaceholderSlide({ pptx }) {
    useEffect(() => {
        pptx.layout = "LAYOUT_WIDE";
        pptx.defineSlideMaster({
          title: "PLACEHOLDER_SLIDE",
          bkgd: "FFFFFF",
          objects: [
            { rect: { x: 0, y: 0, w: "100%", h: 0.75, fill: "F1F1F1" } },
            { text: { text: "Status Report", options: { x: 0, y: 0, w: 6, h: 0.75 } } },
            {
                placeholder: {
                    options: { name: "body", type: "body", x: 0.6, y: 1.5, w: 12, h: 5.25 },
                    text: "(custom placeholder text!)",
                },
            },
        ],
          
        });
        let slide = pptx.addSlide({ masterName: "PLACEHOLDER_SLIDE" });
        slide.addText("Body Placeholder here!", { placeholder: "body" });
    }, []);
    return null;
}


