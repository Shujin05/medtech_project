import {
  StyleSheet,
  View,
} from "react-native";

interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar({
  progress,
}: ProgressBarProps) {
  return (
    <View style={styles.background}>
      <View
        style={[
          styles.progress,
          {
            width: `${progress}%`,
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: 5,
    borderRadius: 5,
    backgroundColor: "#A7E4EC",
    overflow: "hidden",
  },

  progress: {
    height: "100%",
    backgroundColor: "#54BFD2",
    borderRadius: 5,
  },
});