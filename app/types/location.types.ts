export interface LocationCoords {
  latitude: number;
  longitude: number;
}

export interface LocationState {
  location: LocationCoords | null;
  hasPermission: boolean | null;
  loading: boolean;
  errorMsg: string | null;
}
