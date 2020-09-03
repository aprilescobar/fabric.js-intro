import React, { useState, useEffect } from 'react';
import { fabric } from 'fabric';

const App = () => {
  const [canvas, setCanvas] = useState('');
  const [imgURL, setImgURL] = useState('');
  const testText = 'Add Text'
  
  useEffect(()=> {
    initCanvas();
  }, []);

  const initCanvas = () => {
    const canvi = new fabric.Canvas('canvas', {
      height: 800,
      width: 800,
      backgroundColor: 'pink',
    })
    setCanvas(canvi)
  };

  const addRect = canvi => {
    const rect = new fabric.Rect({
      height: 280,
      width: 200,
      fill: 'yellow',
      cornerColor: 'black',
      cornerSize: 8
    });
    canvi.add(rect);
    canvi.renderAll();
  };

  const addImg = (e, url, canvi) => {
    e.preventDefault();
    new fabric.Image.fromURL(url, img => {
      img.scale(0.75);
      canvi.add(img);
      canvi.renderAll();
    });
    setImgURL('');
  }

  const addText = canvas => {
    const txt = new fabric.Textbox(testText, {
      shadow: 'rgba(0,0,0,0.3) 5px 5px 5px'
    }) 
    canvas.add(txt);
    canvas.renderAll();
  }

  return (
    <div>
      <h1>Fabric.js on React - fabric.Canvas('…')</h1>
      <button onClick={() => addRect(canvas)}>Rectangle</button>
      
      <form onSubmit={e => addImg(e, imgURL, canvas)}>
        <input type="text" value={imgURL} onChange={ e => setImgURL(e.target.value)} />
        <button>Add Image</button>
      </form>

      <button onClick={() => addText(canvas)}>Add Textbox</button>

      <br/><br/>
      <canvas id="canvas"/>
    </div>
  );
}

export default App;
