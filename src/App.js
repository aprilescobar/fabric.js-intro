import React, { useState, useEffect } from 'react';
import { fabric } from 'fabric';

const App = () => {
  const [canvas, setCanvas] = useState('');
  
  const pupImgUrl = 'https://cdn11.bigcommerce.com/s-89ffd/images/stencil/1280x1280/products/69946/233734/4977524588399_c5b078635c4e59ccba264b234103ec19__91013.1580785065.jpg?c=2?imbypass=on'

  useEffect(()=> {
    setCanvas(initCanvas());
  }, []);

  const initCanvas = () => (
    new fabric.Canvas('canvas', {
      height: 800,
      width: 800,
      backgroundColor: 'pink',
    })
  );

  const addRect = canvi => {
    const rect = new fabric.Rect({
      height: 280,
      width: 200,
      fill: 'yellow'
    });
    canvi.add(rect);
    canvi.renderAll();
  };

  const addImg = (url, canvi) => {
    new fabric.Image.fromURL(url, img => {
      img.scale(0.25)
      canvi.add(img)
      canvi.renderAll()
    })
  }

  return (
    <div>
      <h1>Fabric.js on React - fabric.Canvas('…')</h1>
      <button onClick={() => addRect(canvas)}>Rectangle</button>
      <button onClick={() => addImg(pupImgUrl, canvas)}>Add Pup</button>

      <br/><br/>
      <canvas id="canvas"/>
    </div>
  );
}

export default App;
