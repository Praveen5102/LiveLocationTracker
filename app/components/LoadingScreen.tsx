import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { COLORS } from "../constants/colors";
import { commonStyles } from "../styles/commonStyles";

interface LoadingScreenProps {
  message?: string;
  submessage?: string;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  message = "Getting Your Location",
  submessage = "Please wait...",
}) => {
  return (
    <View style={commonStyles.centerContainer}>
      <View style={commonStyles.card}>
        <ActivityIndicator size="large" color={COLORS.primary} />
        <Text style={commonStyles.title}>{message}</Text>
        <Text style={commonStyles.subtitle}>{submessage}</Text>
      </View>
    </View>
  );
};
