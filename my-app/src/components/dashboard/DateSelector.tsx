import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type DateItem = {
  id: string;
  date: Date;
};

type DateSelectorProps = {
  dates: DateItem[];
  defaultSelected?: string;
};

export default function DateSelector({
  dates,
  defaultSelected = "overview",
}: DateSelectorProps) {
  const [selected, setSelected] =
    useState(defaultSelected);

  const allDates = [
    {
      id: "overview",
      date: null,
    },
    ...dates,
  ];

  const today = new Date();

  function getDateStatus(date: Date | null) {
    if (!date) return "overview";

    const current = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );

    const todayDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );

    if (current < todayDate) {
      return "previous";
    }

    if (current.getTime() === todayDate.getTime()) {
      return "today";
    }

    return "future";
  }

  function formatDate(date: Date | null) {
    if (!date) return "OVERVIEW";

    return date
      .toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })
      .toUpperCase();
  }

  return (
    <View style={styles.container}>
      {allDates.map((item) => {
        const active = selected === item.id;
        const status = getDateStatus(item.date);

        return (
          <Pressable
            key={item.id}
            onPress={() => setSelected(item.id)}
            style={[
              styles.item,
              active && styles.activeItem,
            ]}
          >
            <View
              style={[
                styles.circle,
                active && styles.activeCircle,
              ]}
            >
              {status === "overview" && (
                <Ionicons
                    name="calendar-outline"
                    size={24}
                    color="#304C5A"
                />
              )}

              {status === "previous" && (
                <Text style={styles.check}>
                  ✓
                </Text>
              )}

              {status === "today" && (
                <Text style={styles.play}>
                  ▶
                </Text>
              )}
            </View>

            <Text
              style={[
                styles.label,
                active && styles.activeLabel,
              ]}
            >
              {formatDate(item.date)}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: -3,
  },

  item: {
    alignItems: "center",
  },

  circle: {
    width: 53,
    height: 53,
    borderRadius: 27,
    backgroundColor: "#D2EAF7",
    alignItems: "center",
    justifyContent: "center",
  },

  activeCircle: {
    backgroundColor: "#D4EAF7",
  },

  icon: {
    fontSize: 24,
    color: "#304C5A",
  },

  check: {
    fontSize: 27,
    fontWeight: "800",
    color: "#56A7CF",
  },

  play: {
    fontSize: 17,
    color: "#2378A7",
    marginLeft: 2,
  },

  label: {
    fontSize: 8,
    fontWeight: "700",
    color: "#252525",
    marginTop: 3,
  },

  activeLabel: {
    color: "#172C37",
  },

  activeItem: {
    transform: [{ scale: 1.02 }],
  },
});
