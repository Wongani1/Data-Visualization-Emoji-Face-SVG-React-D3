import { BackgroudCircle } from './BackgroundCircle';
import { Eyes } from './Eyes'; 
import { Mouth } from './Mouth';
import { SmileyEmoji } from './SmileyEmoji';

export const Emoji=({width, height, centerX, centerY, strokeWidth, eyeOffsetX, eyeOffsetY, eyeRadius, mouthRadius, mouthWidth})=> (
    <SmileyEmoji
      width={width} 
      height={height} 
      centerX={centerX} 
      centerY= {centerY}
      >
          <BackgroudCircle radius={centerY-strokeWidth/2} strokeWidth={strokeWidth}/>   
          <Eyes
          eyeOffsetX={eyeOffsetX} eyeOffsetY={eyeOffsetY} eyeRadius= {eyeRadius} 
          />
          <Mouth
          mouthRadius={mouthRadius}  mouthWidth={mouthWidth}
          />
    </SmileyEmoji>
  );