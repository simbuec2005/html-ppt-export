import React, { useState, useEffect } from 'react';
import pptxgen from "pptxgenjs";
import Text from './components/Text';
import Image from './components/Image';
import MasterSlide from './components/MasterSlide';
import PlaceholderSlide from './components/PlaceholderSlide';

function App() {
  const [pptx, setPptx] = useState(null);

  useEffect(() => {
    setPptx(new pptxgen());
  }, [])

  const exportAsPpt = () => {
    pptx.writeFile("Demos");
  }

  return (
    <div className="App">
      <button onClick={exportAsPpt}> Export </button>
      {
        pptx && (
          <>
            <MasterSlide pptx={pptx} />
            <PlaceholderSlide pptx={pptx} />
            <Text pptx={pptx} />
            <Image pptx={pptx} />
          </>
        )
      }
    </div>
  );
}

export default App;
