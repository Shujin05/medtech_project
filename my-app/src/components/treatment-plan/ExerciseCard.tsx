import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import SelectionIndicator from "./SelectionIndicator";

interface ExerciseCardProps {
  title: string;
  exerciseCount: number;
  description: string;
  difficulty: number;
  selected: boolean;
  onPress: () => void;
}

export default function ExerciseCard({
  title,
  exerciseCount,
  description,
  difficulty,
  selected,
  onPress,
}: ExerciseCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        selected
          ? styles.selectedCard
          : styles.unselectedCard,
        pressed && styles.pressed,
      ]}
    >
      <View style={styles.content}>

        <Text
          style={[
            styles.title,
            !selected && styles.disabledText,
          ]}
        >
          {title}
        </Text>

        <Text
          style={[
            styles.count,
            !selected && styles.disabledText,
          ]}
        >
          {exerciseCount} exercises
        </Text>

        <View style={styles.dotContainer}>
              {Array.from({ length: 5 }).map(
                (_, index) => (
                  <View
                    key={index}
                    style={[
                      styles.dot,
                      index < difficulty
                        ? styles.dotActive
                        : styles.dotInactive,
                      !selected && styles.dotDisabled,
                    ]}
                  />
                )
              )}
        </View>

        <Text
          style={[
            styles.description,
            !selected && styles.disabledText,
          ]}
        >
          {description}
        </Text>

      </View>

      <SelectionIndicator
        selected={selected}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 112,
    borderRadius: 23,
    paddingHorizontal: 18,
    paddingVertical: 9,
    position: "relative",
  },

  selectedCard: {
    backgroundColor: "#B9DCF8",
  },

  unselectedCard: {
    backgroundColor: "#D8F0F7",
    opacity: 0.75,
  },

  pressed: {
    transform: [{ scale: 0.99 }],
  },

  content: {
    width: "87%",
  },

  title: {
    fontSize: 17,
    lineHeight: 21,
    fontWeight: "800",
    color: "#0E1720",
  },

  count: {
    fontSize: 12,
    fontWeight: "600",
    color: "#263D4B",
    marginTop: 1,
  },

  description: {
    fontSize: 11,
    lineHeight: 14,
    fontWeight: "500",
    color: "#304754",
    marginTop: 2,
  },

  disabledText: {
    color: "#78909C",
  },

  dotContainer: {
    flexDirection: "row",
    gap: 3,
    marginTop: 2,
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },

  dotActive: {
    backgroundColor: "#2B81AA",
  },

  dotInactive: {
    backgroundColor: "#86B8CB",
  },

  dotDisabled: {
    backgroundColor: "#A7CFDC",
  },
});