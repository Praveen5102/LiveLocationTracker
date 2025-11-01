import React from "react";
import { View } from "react-native";
import { mapStyles } from "../styles/mapStyles";

export const CustomMarker: React.FC = () => {
  return (
    <View style={mapStyles.markerContainer}>
      <View style={mapStyles.markerPulse} />
      <View style={mapStyles.markerOuter}>
        <View style={mapStyles.markerInner} />
      </View>
    </View>
  );
};
