import React from 'react';
import pptxgen from "pptxgenjs";
import Ppt from './Ppt';

function App() {
  const exportAsPpt = () => {
    // 1. Create a new Presentation
    let pptx = new pptxgen();

    // 2. Add a Slide
    // let slide = pres.addSlide();

    pptx.tableToSlides("myHtmlTableID");

    // Optionally, include a Master Slide name for pre-defined margins, background, logo, etc.
    pptx.tableToSlides("myHtmlTableID", { master: "MASTER_SLIDE" });
    
    // Optionally, add images/shapes/text/tables to each Slide
    pptx.tableToSlides("myHtmlTableID", {
      addText: { text: "Dynamic Title", options: { x: 1, y: 0.5, color: "0088CC" } }
    });
    pptx.writeFile("Demo-Line-Chart");
  }
  return (
    <div className="App">
      <button onClick={exportAsPpt}> Export </button>
      Content
      <table id="myHtmlTableID" class="tabCool">
        <thead>
          <tr>
            <th data-pptx-min-width="0.6" style={{width: '5%'}}>Row</th>
            <th data-pptx-min-width="0.8" style={{width:'10%'}}>Last Name</th>
            <th data-pptx-min-width="0.8" style={{width:'10%'}}>First Name</th>
            <th data-pptx-width="8.5" style={{width:'75%'}}>Description</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}

export default App;
