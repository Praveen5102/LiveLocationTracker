import React from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { MapScreen } from "./components/MapScreen";
import { PermissionDenied } from "./components/PermissionDenied";
import { useLocation } from "./Hooks/useLocation";

export default function Index() {
  const { location, hasPermission, loading, errorMsg, retryPermission } =
    useLocation();

  if (loading) {
    return <LoadingScreen />;
  }

  if (hasPermission === false) {
    return <PermissionDenied errorMsg={errorMsg} onRetry={retryPermission} />;
  }

  if (!location) {
    return (
      <LoadingScreen
        message="Waiting for GPS..."
        submessage="Getting location data..."
      />
    );
  }

  return <MapScreen location={location} />;
}
