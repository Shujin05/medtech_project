import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import Svg, { Circle } from "react-native-svg";

interface ScoreCardProps {
  label: string;
  score: number;
}

const SIZE = 78;
const STROKE = 10;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function ScoreCard({
  label,
  score,
}: ScoreCardProps) {
  const progress = (score / 100) * CIRCUMFERENCE;

  return (
    <View style={styles.scoreCard}>
      <View style={styles.circle}>
        <Svg width={SIZE} height={SIZE}>
          {/* Background */}
          <Circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            stroke="#C8EEF2"
            strokeWidth={STROKE}
            fill="none"
          />

          {/* Progress */}
          <Circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            stroke="#60C8D4"
            strokeWidth={STROKE}
            fill="none"
            strokeDasharray={`${progress} ${CIRCUMFERENCE}`}
            strokeLinecap="round"
            rotation="-90"
            origin={`${SIZE / 2}, ${SIZE / 2}`}
          />
        </Svg>

        <View style={styles.scoreContainer}>
          <Text style={styles.score}>
            {score}%
          </Text>
        </View>
      </View>

      <Text style={styles.label}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  scoreCard: {
    alignItems: "center",
  },

  circle: {
    width: SIZE,
    height: SIZE,
    alignItems: "center",
    justifyContent: "center",
  },

  scoreContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },

  score: {
    fontSize: 17,
    fontWeight: "800",
    color: "#111111",
  },

  label: {
    fontSize: 8,
    fontWeight: "800",
    color: "#151515",
    marginTop: 5,
    textAlign: "center",
  },
});