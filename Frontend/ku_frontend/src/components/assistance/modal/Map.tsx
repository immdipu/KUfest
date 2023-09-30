"use client";
import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Popup,
  CircleMarker,
  Polyline,
  Rectangle,
  Polygon,
  Circle,
  Marker,
} from "react-leaflet";
import { LatLngExpression } from "leaflet";
import { MdOutlineMyLocation } from "react-icons/md";

function Map() {
  const [userLocation, setUserLocation] = useState<LatLngExpression | null>(
    null
  );

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation([position.coords.latitude, position.coords.longitude]);
      });
    }
  }, []);

  if (!userLocation) {
    return <div>Loading....</div>;
  }

  return (
    <div className="w-full  relative overflow-hidden">
      <div className="h-[300px]">
        <MapContainer
          center={userLocation}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: "300px", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {userLocation && (
            <Marker position={userLocation}>
              <Popup>Your current Location</Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
      <button
        className="bg-green-500 py-3  font-normal text-lg tracking-wide rounded-xl px-3 mt-8 right-2"
        onClick={() => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
              setUserLocation([
                position.coords.latitude,
                position.coords.longitude,
              ]);
            });
          }
        }}
      >
        <MdOutlineMyLocation className="text-neutral-100 text-xl" />
      </button>
    </div>
  );
}

export default Map;
