import {
  StyleSheet,
  Text,
  View,
} from "react-native";

interface SelectionIndicatorProps {
  selected: boolean;
}

export default function SelectionIndicator({
  selected,
}: SelectionIndicatorProps) {
  if (selected) {
    return (
      <View style={styles.selected}>
        <Text style={styles.check}>✓</Text>
      </View>
    );
  }

  return <View style={styles.unselected} />;
}

const styles = StyleSheet.create({
  selected: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#7BB7E0",
    alignItems: "center",
    justifyContent: "center",
  },

  check: {
    color: "#FFFFFF",
    fontSize: 20,
    lineHeight: 22,
    fontWeight: "900",
  },

  unselected: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: "#A9D5E8",
    backgroundColor: "#D9F0F7",
  },
});