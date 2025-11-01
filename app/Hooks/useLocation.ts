import * as Location from "expo-location";
import { useCallback, useEffect, useRef, useState } from "react";
import { Alert } from "react-native";
import { LocationState } from "../types/location.types";

export const useLocation = () => {
  const [state, setState] = useState<LocationState>({
    location: null,
    hasPermission: null,
    loading: true,
    errorMsg: null,
  });

  const locationSubscription = useRef<Location.LocationSubscription | null>(
    null
  );

  const requestLocationPermission = useCallback(async () => {
    try {
      console.log("Requesting location permission...");

      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        console.log("Permission denied");
        setState({
          location: null,
          hasPermission: false,
          loading: false,
          errorMsg: "Location permission is required to use this app",
        });
        return;
      }

      console.log("Permission granted!");
      setState((prev) => ({ ...prev, hasPermission: true }));
      startLocationTracking();
    } catch (error) {
      console.error("Error requesting permission:", error);
      setState({
        location: null,
        hasPermission: false,
        loading: false,
        errorMsg: "Failed to request location permission",
      });
    }
  }, []);

  const startLocationTracking = async () => {
    try {
      console.log("Getting initial location...");

      const initialLocation = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      const { latitude, longitude } = initialLocation.coords;
      console.log("Initial location:", latitude, longitude);

      setState((prev) => ({
        ...prev,
        location: { latitude, longitude },
        loading: false,
      }));

      console.log("Starting real-time tracking...");
      locationSubscription.current = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          distanceInterval: 10,
          timeInterval: 5000,
        },
        (newLocation) => {
          const { latitude, longitude } = newLocation.coords;
          console.log("Location updated:", latitude, longitude);

          setState((prev) => ({
            ...prev,
            location: { latitude, longitude },
          }));
        }
      );
    } catch (error) {
      console.error("Error getting location:", error);
      setState((prev) => ({
        ...prev,
        errorMsg: "Could not get your location",
        loading: false,
      }));

      Alert.alert(
        "Location Error",
        "Please ensure location services are enabled in your device settings."
      );
    }
  };

  const retryPermission = useCallback(() => {
    setState({
      location: null,
      hasPermission: null,
      loading: true,
      errorMsg: null,
    });
    requestLocationPermission();
  }, [requestLocationPermission]);

  useEffect(() => {
    requestLocationPermission();

    return () => {
      if (locationSubscription.current) {
        locationSubscription.current.remove();
      }
    };
  }, [requestLocationPermission]);

  return {
    ...state,
    retryPermission,
  };
};
