import { StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

export const mapStyles = StyleSheet.create({
  map: {
    flex: 1,
  },

  markerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  markerPulse: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.primaryUltraLight,
  },

  markerOuter: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.primaryLight,
    alignItems: "center",
    justifyContent: "center",
  },

  markerInner: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: COLORS.primary,
    borderWidth: 4,
    borderColor: COLORS.white,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});
