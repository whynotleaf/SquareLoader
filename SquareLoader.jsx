import "./squareLoader.css";

function SquareLoader({ color = "cyan", size = 50 ,animationTime}) {
  return (
    <div
      className="SquareLoader"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        border: `${size / 10}px solid ${color}`,
        borderRadius: `${size / 5}px`,
        animationDuration:animationTime
      }}
      >
      

    </div>
  );
}

export default SquareLoader;
