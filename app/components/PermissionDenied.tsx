import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { commonStyles } from "../styles/commonStyles";
import { componentStyles } from "../styles/componentStyles";

interface PermissionDeniedProps {
  errorMsg: string | null;
  onRetry: () => void;
}

export const PermissionDenied: React.FC<PermissionDeniedProps> = ({
  errorMsg,
  onRetry,
}) => {
  return (
    <View style={commonStyles.centerContainer}>
      <View style={commonStyles.card}>
        <Text style={componentStyles.errorIcon}>📍</Text>
        <Text style={componentStyles.errorTitle}>Permission Required</Text>
        <Text style={componentStyles.errorMessage}>
          {errorMsg || "Location permission is required to use this app"}
        </Text>
        <Text style={componentStyles.errorInstructions}>
          This app needs access to your location to show you on the map. Please
          enable location permissions in your device settings.
        </Text>
        <TouchableOpacity style={commonStyles.button} onPress={onRetry}>
          <Text style={commonStyles.buttonText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
