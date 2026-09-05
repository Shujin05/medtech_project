import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";

import DottedRing from "./DottedRing";

const { width } = Dimensions.get("window");

const FACE_SIZE = Math.min(width - 92, 310);

interface FaceCircleProps {
  imageSource: ImageSourcePropType;
  progress: number;
}

export default function FaceCircle({
  imageSource,
  progress,
}: FaceCircleProps) {
  return (
    <View
      style={[
        styles.container,
        {
          width: FACE_SIZE + 30,
          height: FACE_SIZE + 30,
        },
      ]}
    >
      <DottedRing
        size={FACE_SIZE + 30}
        progress={progress}
      />

      <View
        style={[
          styles.face,
          {
            width: FACE_SIZE,
            height: FACE_SIZE,
            borderRadius: FACE_SIZE / 2,
          },
        ]}
      >
        <Image
          source={imageSource}
          style={styles.image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },

  face: {
    overflow: "hidden",
    backgroundColor: "#D0D0D0",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});