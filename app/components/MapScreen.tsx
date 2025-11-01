import React, { useEffect, useRef } from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { commonStyles } from "../styles/commonStyles";
import { mapStyles } from "../styles/mapStyles";
import { LocationCoords } from "../types/location.types";
import { CustomMarker } from "./CustomMarker";
import { InfoCard } from "./InfoCard";

interface MapScreenProps {
  location: LocationCoords;
}

export const MapScreen: React.FC<MapScreenProps> = ({ location }) => {
  const mapRef = useRef<MapView | null>(null);

  useEffect(() => {
    if (mapRef.current && location) {
      mapRef.current.animateToRegion(
        {
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        },
        1000
      );
    }
  }, [location]);

  return (
    <View style={commonStyles.container}>
      <MapView
        ref={mapRef}
        style={mapStyles.map}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showsUserLocation={false}
        showsMyLocationButton={true}
        showsCompass={true}
      >
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          title="You are here"
          description="Your current location"
        >
          <CustomMarker />
        </Marker>
      </MapView>

      <InfoCard location={location} />
    </View>
  );
};
