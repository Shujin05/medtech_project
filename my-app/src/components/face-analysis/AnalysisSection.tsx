import {
  StyleSheet,
  Text,
  View,
} from "react-native";

import FaceCircle from "./FaceCircle";
import ProgressBar from "./ProgressBar";
import LoadingSpinner from "./LoadingSpinner";
import LandmarkStats from "./LandmarkStats";

import useAnalysisProgress from "@/hooks/useAnalysisProgress";

// dummy stats data 
const stats = [
    {
    percentage: "15%",
    label: "Forehead",
    },
    {
    percentage: "45%",
    label: "Eyes",
    },
    {
    percentage: "10%",
    label: "Mouth",
    },
    {
    percentage: "20%",
    label: "Overall",
    },
];

export default function AnalysisSection() {
  // Single source of truth
  const progress = useAnalysisProgress();

  return (
    <View style={styles.container}>

      {/* Instructions */}
      <Text style={styles.instructions}>
        Move your head completely{"\n"}
        to complete the circle
      </Text>

      {/* Face + dotted progress ring */}
      <FaceCircle
        progress={progress}
        imageSource={require("@/assets/images/icon.png")}
      />

      {/* Progress bar */}
      <View style={styles.analysisContent}>
        <ProgressBar
          progress={progress}
        />

        {/* Analysis text */}
        <Text style={styles.text}>
          Analyzing facial landmarks...
        </Text>

        {/* Spinner */}
        <LoadingSpinner
          progress={progress}
        />

        {/* Stats */}
        <LandmarkStats 
        stats={stats}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    paddingTop: 70,
  },

  instructions: {
    textAlign: "center",
    fontSize: 18,
    lineHeight: 23,
    fontWeight: "800",
    color: "#0A0D0F",
    marginBottom: 28,
  },

  analysisContent: {
    width: "84%",
    marginTop: 42,
    alignItems: "center",
  },

  text: {
    marginTop: 11,
    fontSize: 15,
    fontWeight: "700",
    color: "#101010",
  },
});