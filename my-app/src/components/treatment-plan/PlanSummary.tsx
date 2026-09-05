import {
  StyleSheet,
  Text,
  View,
} from "react-native";

interface PlanSummaryProps {
  selectedCount: number;
  exerciseCount: number;
  minutesPerDay?: number;
  weeks?: number;
}

export default function PlanSummary({
  selectedCount,
  exerciseCount,
  minutesPerDay = 15,
  weeks = 4,
}: PlanSummaryProps) {
  return (
    <View style={styles.container}>

      <SummaryItem
        value={selectedCount}
        label="Selected"
      />

      <SummaryItem
        value={exerciseCount}
        label="Exercises"
      />

      <SummaryItem
        value={minutesPerDay}
        label="Min/Day"
      />

      <SummaryItem
        value={weeks}
        label="Weeks"
      />

    </View>
  );
}

function SummaryItem({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <View style={styles.item}>
      <Text style={styles.value}>
        {value}
      </Text>

      <Text style={styles.label}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "72%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 3,
    marginBottom: 7,
  },

  item: {
    alignItems: "center",
  },

  value: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "800",
    color: "#111111",
  },

  label: {
    fontSize: 10,
    lineHeight: 13,
    fontWeight: "500",
    color: "#263B43",
  },
});