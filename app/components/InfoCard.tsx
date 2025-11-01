import React from "react";
import { Text, View } from "react-native";
import { componentStyles } from "../styles/componentStyles";
import { LocationCoords } from "../types/location.types";

interface InfoCardProps {
  location: LocationCoords;
}

export const InfoCard: React.FC<InfoCardProps> = ({ location }) => {
  return (
    <View style={componentStyles.infoCard}>
      <View style={componentStyles.infoHeader}>
        <Text style={componentStyles.infoTitle}>📍 Live Tracking</Text>
        <View style={componentStyles.liveBadge}>
          <View style={componentStyles.liveDot} />
          <Text style={componentStyles.liveText}>LIVE</Text>
        </View>
      </View>

      <View style={componentStyles.coordsBox}>
        <View style={componentStyles.coordRow}>
          <Text style={componentStyles.coordLabel}>Latitude</Text>
          <Text style={componentStyles.coordValue}>
            {location.latitude.toFixed(6)}
          </Text>
        </View>
        <View style={componentStyles.divider} />
        <View style={componentStyles.coordRow}>
          <Text style={componentStyles.coordLabel}>Longitude</Text>
          <Text style={componentStyles.coordValue}>
            {location.longitude.toFixed(6)}
          </Text>
        </View>
      </View>
    </View>
  );
};
