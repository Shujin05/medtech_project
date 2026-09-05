import {
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function GoalProgress({ progress, time }: { progress: number; time: number }) {

  return (
    <View style={styles.container}>

      <Text style={styles.text}>
        Estimated time to goal: {time} weeks
      </Text>

      <View style={styles.track}>
        <View
          style={[
            styles.fill,
            {
              width: `${progress * 100}%`,
            },
          ]}
        />

        <View
          style={[
            styles.remaining,
            {
              width: `${(1 - progress) * 100}%`,
            },
          ]}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 3,
  },

  text: {
    fontSize: 13,
    fontWeight: "800",
    color: "#17262C",
    marginBottom: 3,
  },

  track: {
    height: 8,
    borderRadius: 4,
    overflow: "hidden",
    flexDirection: "row",
    backgroundColor: "#B9E9EC",
    marginTop: 3,
  },

  fill: {
    height: "100%",
    backgroundColor: "#61C5D5",
  },

  remaining: {
    height: "100%",
    backgroundColor: "#B6E8E8",
  },
});