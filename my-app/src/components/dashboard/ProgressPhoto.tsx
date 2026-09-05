import {
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function ProgressPhoto() {
  return (
    <View style={styles.container}>
      <View style={styles.photoWrapper}>
        <Image
          source={require("@/assets/images/icon.png")}
          style={styles.photo}
        />

        <View style={styles.frame} />
      </View>

      <Text style={styles.label}>
        PROGRESS PHOTOS
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 82,
  },

  photoWrapper: {
    width: 82,
    height: 86,
    borderRadius: 8,
    overflow: "hidden",
    position: "relative",
    backgroundColor: "#D0D0D0",
  },

  photo: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  frame: {
    position: "absolute",
    width: 48,
    height: 55,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    left: 17,
    top: 15,
  },

  label: {
    fontSize: 8,
    fontWeight: "800",
    color: "#151515",
    marginTop: 5,
    textAlign: "center",
  },
});