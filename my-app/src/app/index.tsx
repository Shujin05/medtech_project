import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import AnalysisSection from "@/components/face-analysis/AnalysisSection";

export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <AnalysisSection />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#DFF6FA",
  },

  scrollContent: {
    flexGrow: 1,
  },

  container: {
    width: "100%",
    minHeight: "100%",
    backgroundColor: "#DFF6FA",
  },
});