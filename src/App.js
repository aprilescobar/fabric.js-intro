import React, { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import './App.css'

const App = () => {
  const [canvas, setCanvas] = useState('');
  const [imgURL, setImgURL] = useState('');
  // const [canviObjects, setCanviObjects] = useState([])

  const buttonStyle = 'btn btn-default';
  
  useEffect(()=> {
    initCanvas();
  }, []);

  const initCanvas = () => {
    const canvi = new fabric.Canvas('canvas', {
      height: 800,
      width: 800,
      backgroundColor: 'pink',
    })
    setCanvas(canvi);
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
    // setCanviObjects([...canviObjects, rect])
  };

  const addImg = (e, url, canvi) => {
    e.preventDefault();
    new fabric.Image.fromURL(url, img => {
      img.scale(0.75);
      canvi.add(img);
      canvi.renderAll();
      setImgURL('');
      // setCanviObjects([...canviObjects, img])
    });
  }

  const addText = canvas => {
    const txt = new fabric.Textbox('Add Text', {
      shadow: 'rgba(0,0,0,0.3) 5px 5px 5px',
      height: 200,
      width: 300
    }) 
    canvas.add(txt);
    canvas.renderAll();
    // setCanviObjects([...canviObjects, txt])
  }

  const clearAll = canvas => canvas.getObjects().forEach(obj => canvas.remove(obj))

  const canviEvents = canvas => {
    canvas.renderAll()
    console.log(canvas.getObjects())
  }

  return (
    <div className="container">
      <h1>Fabric.js on React - fabric.Canvas('…')</h1>

      <div className="tool-bar">
        <button className={buttonStyle} onClick={() => addRect(canvas)}>Rectangle</button>
        <button className={buttonStyle} onClick={() => addText(canvas)}>Add Textbox</button>
        <button className={buttonStyle} onClick={() => clearAll(canvas)}>Clear All</button>
        <button className={buttonStyle} onClick={() => canviEvents(canvas)}>Test</button>
      </div>

      <form className="form-inline" onSubmit={e => addImg(e, imgURL, canvas)}>
        <div className="col-xs-3">
          <input type="text" className="form-control input-sm" value={imgURL} onChange={ e => setImgURL(e.target.value)} />
          <button className={buttonStyle} type="submit">Add Image</button>
        </div>
      </form>
      
      <br/><br/>
      <div className="canvas">
        <canvas id="canvas"/>
      </div>
    </div>
  );
}

export default App;
