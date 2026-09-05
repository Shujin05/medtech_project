import {
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";

import AnalysisSection from "@/components/face-analysis/AnalysisSection";

export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <AnalysisSection />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#DFF6FA",
  },

  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#DFF6FA",
  },
});