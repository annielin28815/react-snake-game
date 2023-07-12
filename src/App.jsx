import { useState } from 'react';
import './App.css';

function App() {
  const [ snake, setSnake ] = useState({ x: 0, y: 0 });
  
  return (
    <div className="App">
      <h1>貪食蛇</h1>
      <div className="game-area">
        {Array(20)
          .fill(0)
          .map((_, rowY) =>
            Array(20)
              .fill(0)
              .map((_, colX) => {
                let celltype = "";
                if (apple.x === colX && apple.y === rowY) {
                  celltype = "apple";
                }
                if (snake.some((body) => body.x === colX && body.y === rowY))
                  celltype = "snake";

                return (
                  <div className={`cell ${celltype}`} key={`${colX}-${rowY}`} />
                );
              })
          )}
      </div>
    </div>
  );
}

export default App;
