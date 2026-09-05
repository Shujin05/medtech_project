import {
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function RecommendationCard() {
  return (
    <View style={styles.container}>

      <Image
        source={require("@/assets/images/doctor.png")}
        style={styles.doctor}
      />

      <View style={styles.bubble}>
        <Text style={styles.text}>
          Based on your facial scan, we're
          recommending these exercises.{"\n"}
          Let us know your priorities so we
          can reconfigure your plan!
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "86%",
    height: 112,
    marginTop: 4,
    flexDirection: "row",
    alignItems: "center",
  },

  doctor: {
    width: 72,
    height: 100,
    resizeMode: "contain",
    zIndex: 2,
  },

  bubble: {
    flex: 1,
    minHeight: 76,
    backgroundColor: "#BDEDEB",
    borderRadius: 30,
    justifyContent: "center",
    paddingHorizontal: 15,
    marginLeft: -3,
  },

  text: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "700",
    color: "#10252C",
    padding: 10, 
  },
});