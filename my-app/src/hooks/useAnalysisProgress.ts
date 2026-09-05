import { useEffect, useState } from "react";

interface UseAnalysisProgressOptions {
  initialProgress?: number;
  increment?: number;
  interval?: number;
}

export default function useAnalysisProgress({
  initialProgress = 45,
  increment = 1,
  interval = 150,
}: UseAnalysisProgressOptions = {}) {
  const [progress, setProgress] =
    useState(initialProgress);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((current) => {
        if (current >= 100) {
          return 0;
        }

        return current + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [increment, interval]);

  return progress;
}