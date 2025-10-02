import { useState, useEffect } from 'react';
import CircularProgress from "@mui/material/CircularProgress";

const BLINK_STYLE = {
  animation: 'blink 1.5s infinite', 
};

const LoadingCircle = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    setShouldAnimate(Math.random() < 0.1);
  }, []); 
  const conditionalStyle = shouldAnimate ? BLINK_STYLE : {};

  return (
    <>      
      <div className="flex flex-col justify-center items-center space-y-2">
        <CircularProgress />
        {shouldAnimate && (
          <p 
            id="LoadingCircleText"
            style={conditionalStyle} 
            className="font-mFont text-[1rem] text-[var(--colors-03)]"
          >
            ¡Oye! No comas ansias:
            <span className="font-bold"> Come torta 🎂</span>
          </p>
        )}
      </div>
    </>
  );
}

export default LoadingCircle;