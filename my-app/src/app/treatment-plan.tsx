import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
} from "react-native";

import ExerciseCard from "@/components/treatment-plan/ExerciseCard";
import RecommendationCard from "@/components/treatment-plan/RecommendationCard";
import PlanSummary from "@/components/treatment-plan/PlanSummary";

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
          {/* Header */}

          <Text style={styles.title}>
            Crafting your personalised{"\n"}
            treatment plan...
          </Text>

          {/* Exercise options */}

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

          {/* Recommendation */}

          <RecommendationCard />

          {/* Summary */}

          <PlanSummary
            selectedCount={selectedExercises.length}
            exerciseCount={totalExercises}
          />

          {/* Start button */}

          <Pressable
            style={({ pressed }) => [
              styles.startButton,
              pressed && styles.buttonPressed,
            ]}
            onPress={() => {
              console.log("Starting treatment plan");
            }}
          >
            <Text style={styles.startButtonText}>
              Start My Plan!
            </Text>
          </Pressable>

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
    backgroundColor: "#DFF6FA",
  },

  scrollContent: {
    alignItems: "center",
    paddingTop: 32,
    paddingBottom: 25,
  },

  title: {
    width: "86%",
    fontSize: 21,
    lineHeight: 28,
    fontWeight: "800",
    color: "#101010",
    marginBottom: 15,
  },

  exerciseList: {
    width: "86%",
    gap: 7,
  },

  startButton: {
    width: "62%",
    height: 45,
    borderRadius: 25,
    backgroundColor: "#2875A8",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },

  startButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
  },

  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
});