import { useState, useEffect } from 'react';
import CircularProgress from "@mui/material/CircularProgress";

const BLINK_STYLE = {
    animation: 'blink 1.5s infinite', 
};

const LoadingCircle = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [shouldShowText, setShouldShowText] = useState(false);
  const [conditionalStyle, setConditionalStyle] = useState({});

  useEffect(() => {
    setIsMounted(true);

    const animate = Math.random() < 0.1;
    setShouldShowText(animate);
    
    if (animate) {
      setConditionalStyle(BLINK_STYLE);
    }
  }, []); 

  if (!isMounted) {
      return null; 
  }
  return (
    <> 
      <div className="flex flex-col justify-center items-center space-y-2">
        <CircularProgress />
        {shouldShowText && (
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