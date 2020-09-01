import React, { useState, useEffect } from 'react';
import { fabric } from 'fabric';

const App = () => {
  const [canvas, setCanvas] = useState('');

  useEffect(()=> {
    setCanvas(initCanvas())
  }, [])

  const initCanvas = () => (
    new fabric.Canvas('canvas', {
      height: 800,
      width: 800,
      backgroundColor: 'rgb(100,100,180)',
      selectionColor: 'green'
    })
  )

  return (
    <div>
      Tuesday Practice
      <canvas id="canvas"/>
    </div>
  );
}

export default App;
