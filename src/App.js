import React, { useState, useEffect } from 'react';
import { fabric } from 'fabric';

const App = () => {
  const [canvas, setCanvas] = useState('');
  const [imgURL, setImgURL] = useState('');
  
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
      img.scale(0.75);
      canvi.add(img);
      canvi.renderAll();
    })
    setImgURL('')
  }

  return (
    <div>
      <h1>Fabric.js on React - fabric.Canvas('…')</h1>
      <button onClick={() => addRect(canvas)}>Rectangle</button>
      <input type="text" value={imgURL} onChange={ e => setImgURL(e.target.value)} />
      <button onClick={() => addImg(imgURL, canvas)}>Add Image</button>

      <br/><br/>
      <canvas id="canvas"/>
    </div>
  );
}

export default App;
