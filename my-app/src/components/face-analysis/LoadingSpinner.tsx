import React, {
  useEffect,
  useRef,
} from "react";

import {
  Animated,
  Easing,
  StyleSheet,
  View,
} from "react-native";

interface LoadingSpinnerProps {
  progress: number;
}

export default function LoadingSpinner({
  progress,
}: LoadingSpinnerProps) {
  const spinValue = useRef(
    new Animated.Value(0)
  ).current;

  useEffect(() => {
    if (progress >= 100) {
      return;
    }

    const animation = Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );

    animation.start();

    return () => {
      animation.stop();
    };
  }, [progress, spinValue]);

  const rotation =
    spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: [
        "0deg",
        "360deg",
      ],
    });

  return (
    <View style={styles.wrapper}>
      <Animated.View
        style={[
          styles.spinner,
          {
            transform: [
              {
                rotate: rotation,
              },
            ],
          },
        ]}
      >
        <View style={styles.hole} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: 58,
    height: 58,
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  spinner: {
    width: 55,
    height: 55,
    borderRadius: 28,
    borderWidth: 7,
    borderColor: "#153649",
    borderTopColor: "#77C8D8",
    alignItems: "center",
    justifyContent: "center",
  },

  hole: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
  },
});