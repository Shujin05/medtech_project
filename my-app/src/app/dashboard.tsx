import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import RecoveryRadar from "@/components/dashboard/RecoveryRadar";
import DateSelector from "@/components/dashboard/DateSelector";
import ProgressPhoto from "@/components/dashboard/ProgressPhoto";
import ScoreCard from "@/components/dashboard/ScoreCard";
import RecoveryChart from "@/components/dashboard/RecoveryChart";
import GoalProgress from "@/components/dashboard/GoalProgress";


// Sample data (assume from backend)
const recoveryData = [
  { label: "Eyebrow", value: 8 },
  { label: "Smile", value: 7 },
  { label: "Chin", value: 6 },
  { label: "Cheeks", value: 7 },
  { label: "Nose", value: 5 },
]

const dates = [
  {
    id: "jul16",
    date: new Date(2026, 8, 4),
  },
  {
    id: "jul17",
    date: new Date(2026, 8, 5),
  },
  {
    id: "jul18",
    date: new Date(2026, 8, 6),
  },
  {
    id: "jul19",
    date: new Date(2026, 8, 7),
  },
];

const scores = [
  {
    label: "SYMMETRY SCORE",
    score: 78,
  },
  {
    label: "SYNKINESIS SCORE",
    score: 26,
  },
];

const user = {
  name: "Sarah Tan",
};

const recoveryProgress = {
    time: 10, // weeks
    progress: 0.72, // 72%
}


const recoveryChartData = [
  {
    label: "Eye Recovery",
    data: [18, 30, 25, 40, 45, 44],
    color: "#53B9D1",
  },
  {
    label: "Face Recovery",
    data: [8, 22, 35, 28, 38, 33],
    color: "#2483A9",
  },
  {
    label: "Mouth Recovery",
    data: [12, 8, 18, 15, 35, 28],
    color: "#76D1D5",
  },
];


export default function Dashboard() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.container}>
            <Text style={styles.greeting}>
            Hello {user.name.split(" ")[0]},
            </Text>
    
            <Text style={styles.subtitle}>
            Insights to your recovery journey
            </Text>
        </View>

        <RecoveryRadar
            data={recoveryData}
        />

        <DateSelector 
            dates={dates}
        />

        <Text style={styles.dashboardTitle}>
          Analytics Dashboard
        </Text>

        <View style={styles.metricsRow}>
          <ProgressPhoto />

          {scores.map(({ label, score }) => (
            <ScoreCard
                key={label}
                label={label}
                score={score}
            />
          ))}
        </View>

        <RecoveryChart 
            data={recoveryChartData}
        />

        <GoalProgress 
            progress={recoveryProgress.progress}
            time={recoveryProgress.time}
        />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#E4F7FA",
  },

  content: {
    paddingTop: 24,
    paddingBottom: 30,
  },

  dashboardTitle: {
    fontSize: 19,
    fontWeight: "800",
    color: "#111111",
    marginHorizontal: 20,
    marginTop: 8,
    marginBottom: 6,
  },

  metricsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    gap: 8,
  },

  container: {
    marginHorizontal: 20,
    marginBottom: 2,
  },

  greeting: {
    fontSize: 27,
    lineHeight: 31,
    fontWeight: "900",
    color: "#0A0D0F",
  },

  subtitle: {
    fontSize: 14,
    color: "#303030",
    marginTop: 1,
  },
});