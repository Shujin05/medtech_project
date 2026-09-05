import {
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function LandmarkStats({
  stats,
}: { stats: { percentage: string; label: string }[] }) {
  return (
    <View style={styles.container}>
      {stats.map((stat) => (
        <View style={styles.landmarkContainer} key={stat.label}>
          <Text style={styles.percentage}>
            {stat.percentage}
          </Text>

          <Text style={styles.label}>
            {stat.label}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 23,
  },

  landmarkContainer: {
    alignItems: "center",
  },

  percentage: {
    fontSize: 20,
    fontWeight: "800",
    color: "#101010",
  },

  label: {
    fontSize: 12,
    fontWeight: "700",
    color: "#111111",
    marginTop: 2,
  },
});