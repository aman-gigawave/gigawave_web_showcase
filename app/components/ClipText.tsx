import { Colors, Liquid } from '@/components/custom/liquid-gradient';

const COLORS: Colors = {
  color1: '#FFD700',  // Gold
  color2: '#FFECB3',  // Light Gold
  color3: '#FFF9E6',  // Off White
  color4: '#C0C0C0',  // Silver
  color5: '#E6E6FA',  // Light Silver
  color6: '#FFFFFF',  // Pure White
  color7: '#FFD700',  // Gold
  color8: '#FFECB3',  // Light Gold
  color9: '#FFFFFF',  // White
  color10: '#C0C0C0', // Silver
  color11: '#E6E6FA', // Light Silver
  color12: '#FFD700', // Gold
  color13: '#FFECB3', // Light Gold
  color14: '#FFFFFF', // White
  color15: '#C0C0C0', // Silver
  color16: '#E6E6FA', // Light Silver
  color17: '#FFD700', // Gold
};

const ClipText = ({text} : {text : string}) => {
  return (
    <span className="inline-block align-baseline" style={{ verticalAlign: 'middle' }}>
      <svg
        width="auto"
        height="1em"
        viewBox="0 0 1000 100"
        style={{ display: 'inline', verticalAlign: 'middle' }}
        className="!h-[1em] !w-auto"
      >
        <defs>
          <clipPath id="textClip">
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fontSize="90"
              fontWeight="bold"
              fontFamily="font-secondary"
              fill="white"
            >
              {text}
            </text>
          </clipPath>
        </defs>
        <g clipPath="url(#textClip)">
          <foreignObject width="100%" height="100%">
            <div className="w-full h-full relative">
              <div className="absolute inset-0">
                <Liquid colors={COLORS} />
              </div>
            </div>
          </foreignObject>
        </g>
      </svg>
    </span>
  );
};

export default ClipText;
