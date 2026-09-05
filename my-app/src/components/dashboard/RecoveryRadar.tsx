import {
  StyleSheet,
  View,
} from "react-native";

import Svg, {
  Circle,
  Line,
  Polygon,
  Text as SvgText,
} from "react-native-svg";

const SIZE = 220;
const CENTER = SIZE / 2;
const RADIUS = 78;

type RecoveryRadarProps = {
  data: {
    label: string;
    value: number;
  }[];
  maxValue?: number;
};

export default function RecoveryRadar({
  data,
  maxValue = 10,
}: RecoveryRadarProps) {

  function getPoint(index: number, radius: number) {
    const angle =
      -Math.PI / 2 +
      (index * 2 * Math.PI) / data.length;

    return {
      x: CENTER + radius * Math.cos(angle),
      y: CENTER + radius * Math.sin(angle),
    };
  }

  function polygonPoints(radius: number) {
    return data
      .map((_, index) => {
        const point = getPoint(index, radius);
        return `${point.x},${point.y}`;
      })
      .join(" ");
  }

  return (
    <View style={styles.container}>
      <Svg width={SIZE} height={SIZE}>

        {/* Radar grid */}
        {[2, 4, 6, 8, 10].map((value) => {
          const radius =
            (value / maxValue) * RADIUS;

          return (
            <Polygon
              key={value}
              points={polygonPoints(radius)}
              fill="none"
              stroke="#D0E3E6"
              strokeWidth={1}
            />
          );
        })}

        {/* Axis lines */}
        {data.map((_, index) => {
          const point = getPoint(index, RADIUS);

          return (
            <Line
              key={index}
              x1={CENTER}
              y1={CENTER}
              x2={point.x}
              y2={point.y}
              stroke="#D5E5E8"
              strokeWidth={1}
            />
          );
        })}

        {/* Data polygon */}
        <Polygon
          points={data
            .map((item, index) => {
              const point = getPoint(
                index,
                (item.value / maxValue) * RADIUS
              );

              return `${point.x},${point.y}`;
            })
            .join(" ")}
          fill="#69C6D8"
          fillOpacity={0.55}
          stroke="#56B7CC"
          strokeWidth={1.5}
        />

        {/* Data points */}
        {data.map((item, index) => {
          const point = getPoint(
            index,
            (item.value / maxValue) * RADIUS
          );

          return (
            <Circle
              key={index}
              cx={point.x}
              cy={point.y}
              r={2}
              fill="#277B9D"
            />
          );
        })}

        {/* Labels */}
        {data.map((item, index) => {
          const point = getPoint(
            index,
            RADIUS + 16
          );

          return (
            <SvgText
              key={item.label}
              x={point.x}
              y={point.y}
              fontSize={8}
              fontWeight="600"
              fill="#202020"
              textAnchor="middle"
            >
              {item.label}
            </SvgText>
          );
        })}

        {/* Scale */}
        {[0, 2, 4, 6, 8, 10].map((value) => {
          const y =
            CENTER -
            (value / maxValue) * RADIUS;

          return (
            <SvgText
              key={value}
              x={CENTER}
              y={y + 3}
              fontSize={7}
              fill="#222"
              textAnchor="middle"
            >
              {value}
            </SvgText>
          );
        })}

      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 210,
    alignItems: "center",
    justifyContent: "center",
  },
});
