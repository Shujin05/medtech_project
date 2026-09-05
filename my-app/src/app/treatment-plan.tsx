import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import PrimaryButton from "@/components/PrimaryButton";
import ExerciseCard from "@/components/treatment-plan/ExerciseCard";
import RecommendationCard from "@/components/treatment-plan/RecommendationCard";
import PlanSummary from "@/components/treatment-plan/PlanSummary";
import { router } from "expo-router";

export default function TreatmentPlanScreen() {
  const [selectedExercises, setSelectedExercises] = useState([
    "smiling",
    "eyebrow",
  ]);

  const toggleExercise = (id: string) => {
    setSelectedExercises((current) => {
      if (current.includes(id)) {
        return current.filter((item) => item !== id);
      }

      return [...current, id];
    });
  };

  const exercises = [
    {
      id: "smiling",
      title: "Smiling Movements",
      exerciseCount: 7,
      description:
        "Targeted exercises to improve forehead muscle control and eyebrow symmetry. Includes basic lifting, holding, and alternating moves.",
      difficulty: 5,
    },
    {
      id: "eyebrow",
      title: "Eyebrow Movements",
      exerciseCount: 5,
      description:
        "Comprehensive smile rehabilitation focusing on zygomaticus and levator muscles. Progressive difficulty from gentle to full smile expressions.",
      difficulty: 5,
    },
    {
      id: "cheek",
      title: "Cheek Movements",
      exerciseCount: 5,
      description:
        "Buccinator exercises in order to improve facial expressions and puffing out of cheeks.",
      difficulty: 4,
    },
  ];

  const totalExercises = exercises
    .filter((exercise) =>
      selectedExercises.includes(exercise.id)
    )
    .reduce(
      (total, exercise) =>
        total + exercise.exerciseCount,
      0
    );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <Text style={styles.title}>
            Crafting your personalised{"\n"}
            treatment plan...
          </Text>

          <View style={styles.exerciseList}>
            {exercises.map((exercise) => (
              <ExerciseCard
                key={exercise.id}
                title={exercise.title}
                exerciseCount={exercise.exerciseCount}
                description={exercise.description}
                difficulty={exercise.difficulty}
                selected={selectedExercises.includes(
                  exercise.id
                )}
                onPress={() =>
                  toggleExercise(exercise.id)
                }
              />
            ))}
          </View>

          <View style={styles.section}>
            <RecommendationCard />
          </View>

          <View style={styles.section}>
            <PlanSummary
              selectedCount={selectedExercises.length}
              exerciseCount={totalExercises}
            />
          </View>

          <View style={styles.buttonContainer}>
            <PrimaryButton
              title="Start My Plan!"
              onPress={() => router.push("/dashboard")}
            />
          </View>
        </ScrollView>
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
    width: "100%",
    backgroundColor: "#DFF6FA",
  },

  scrollContent: {
    alignItems: "center",
    paddingTop: 28,
    paddingBottom: 35,
  },

  title: {
    width: "86%",
    fontSize: 21,
    lineHeight: 28,
    fontWeight: "800",
    color: "#101010",
    marginBottom: 18,
  },

  exerciseList: {
    width: "86%",
    gap: 9,
  },

  section: {
    width: "86%",
    marginTop: 10,
  },

  buttonContainer: {
    marginTop: 20,
    alignItems: "center",
    width: "100%",
  },
});