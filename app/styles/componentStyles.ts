import { Platform, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

export const componentStyles = StyleSheet.create({
  // Error Screen Styles
  errorIcon: {
    fontSize: 60,
    marginBottom: 20,
  },

  errorTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.error,
    marginBottom: 12,
    textAlign: "center",
  },

  errorMessage: {
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: "center",
    marginBottom: 8,
    lineHeight: 24,
  },

  errorInstructions: {
    fontSize: 14,
    color: COLORS.textTertiary,
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 20,
    paddingHorizontal: 10,
  },

  // Info Card Styles
  infoCard: {
    position: "absolute",
    top: Platform.OS === "ios" ? 60 : 40,
    left: 16,
    right: 16,
    backgroundColor: COLORS.white,
    borderRadius: 16,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    overflow: "hidden",
  },

  infoHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.primary,
    padding: 16,
  },

  infoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.white,
  },

  liveBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },

  liveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.success,
    marginRight: 6,
  },

  liveText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "700",
  },

  coordsBox: {
    padding: 16,
  },

  coordRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },

  divider: {
    height: 1,
    backgroundColor: COLORS.divider,
    marginVertical: 4,
  },

  coordLabel: {
    fontSize: 14,
    color: COLORS.textTertiary,
    fontWeight: "600",
  },

  coordValue: {
    fontSize: 16,
    color: COLORS.textPrimary,
    fontWeight: "700",
    fontFamily: Platform.OS === "ios" ? "Courier" : "monospace",
  },
});
