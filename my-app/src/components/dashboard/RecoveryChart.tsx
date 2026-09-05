import { StyleSheet, Text, View } from "react-native";
import Svg, { Circle, Line, Polyline } from "react-native-svg";

const WIDTH = 310;
const HEIGHT = 130;
const chartLeft = 30;
const chartRight = WIDTH - 10;
const chartTop = 15;
const chartBottom = 105;
const MAX_VALUE = 50;

type RecoveryDataset = {
  label: string;
  data: number[];
  color: string;
};

type RecoveryChartProps = {
  data: RecoveryDataset[];
};

function getX(index: number, dataLength: number) {
  return (
    chartLeft +
    (index * (chartRight - chartLeft)) /
      (dataLength - 1)
  );
}

function getY(value: number) {
  return (
    chartBottom -
    (value / MAX_VALUE) *
      (chartBottom - chartTop)
  );
}

function createPoints(
  data: number[],
  dataLength: number
) {
  return data
    .map(
      (value, index) =>
        `${getX(index, dataLength)},${getY(value)}`
    )
    .join(" ");
}

export default function RecoveryChart({
  data,
}: RecoveryChartProps) {
  // Number of x-axis points is determined by the data
  const dataLength = data[0]?.data.length ?? 0;

  // Generate labels based on array length
  const xAxisLabels = Array.from(
    { length: dataLength },
    (_, index) => index + 1
  );

  return (
    <View style={styles.container}>
      <View style={styles.legend}>
        {data.map((dataset) => (
          <Legend
            key={dataset.label}
            label={dataset.label}
            color={dataset.color}
          />
        ))}
      </View>

      <Svg width={WIDTH} height={HEIGHT}>
        {[0, 10, 20, 30, 40, 50].map((value) => (
          <Line
            key={value}
            x1={chartLeft}
            y1={getY(value)}
            x2={chartRight}
            y2={getY(value)}
            stroke="#D8E8EA"
            strokeWidth={1}
          />
        ))}

        {data.map((dataset) => (
          <Polyline
            key={dataset.label}
            points={createPoints(
              dataset.data,
              dataLength
            )}
            fill="none"
            stroke={dataset.color}
            strokeWidth={2}
          />
        ))}

        {data.map((dataset) =>
          dataset.data.map((value, index) => (
            <Circle
              key={`${dataset.label}-${index}`}
              cx={getX(index, dataLength)}
              cy={getY(value)}
              r={2}
              fill="#FFFFFF"
              stroke={dataset.color}
              strokeWidth={1.5}
            />
          ))
        )}
      </Svg>

      <View style={styles.xAxis}>
        {xAxisLabels.map((label) => (
          <Text key={label} style={styles.week}>
            {label}
          </Text>
        ))}
      </View>
    </View>
  );
}

function Legend({
  label,
  color,
}: {
  label: string;
  color: string;
}) {
  return (
    <View style={styles.legendItem}>
      <View
        style={[
          styles.legendDot,
          { backgroundColor: color },
        ]}
      />

      <Text style={styles.legendText}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: "center",
  },

  legend: {
    width: 310,
    flexDirection: "row",
    justifyContent: "center",
    gap: 9,
    marginBottom: 1,
  },

  legendItem: {
    flexDirection: "row",
    alignItems: "center",
  },

  legendDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    marginRight: 3,
  },

  legendText: {
    fontSize: 6,
    color: "#405158",
  },

  xAxis: {
    width: 310,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 30,
    paddingRight: 10,
    marginTop: -17,
  },

  week: {
    fontSize: 7,
    color: "#27383D",
  },
});