import {
  StyleSheet,
  View,
} from "react-native";
import Svg, { Circle } from "react-native-svg";

interface DottedRingProps {
  size: number;
  progress: number;
  dotCount?: number;
}

const RING_OFFSET = 9;

export default function DottedRing({
  size,
  progress,
  dotCount = 72,
}: DottedRingProps) {
  const faceSize = size - 30;
  const radius = faceSize / 2 + RING_OFFSET;

  const completedDots = Math.floor(
    (progress / 100) * dotCount
  );

  const dots = Array.from(
    { length: dotCount },
    (_, index) => {
      const angle =
        (index / dotCount) * Math.PI * 2 -
        Math.PI / 2;

      const center = size / 2;

      const x =
        center +
        radius * Math.cos(angle);

      const y =
        center +
        radius * Math.sin(angle);

      return {
        x,
        y,
        completed: index < completedDots,
      };
    }
  );

  return (
    <View
      pointerEvents="none"
      style={StyleSheet.absoluteFill}
    >
      <Svg
        width={size}
        height={size}
      >
        {dots.map((dot, index) => (
          <Circle
            key={index}
            cx={dot.x}
            cy={dot.y}
            r={3}
            fill={
              dot.completed
                ? "#63C5DA"
                : "#122E3D"
            }
          />
        ))}
      </Svg>
    </View>
  );
}