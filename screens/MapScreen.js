import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useRef, useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = () => {
  const route = useRoute();
  const mapView = useRef(null);
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    if (route.params?.searchResults) {
      const newCoordinates = [];
      route.params.searchResults.forEach((item) =>
        item.properties?.forEach((property) => {
          if (property.latitude && property.longitude) {
            newCoordinates.push({
              latitude: Number(property.latitude),
              longitude: Number(property.longitude),
            });
          }
        })
      );
      setCoordinates(newCoordinates);
    }
  }, [route.params]);



  useEffect(() => {
    if (mapView.current && coordinates.length > 0) {
      mapView.current.fitToCoordinates(coordinates, {
        edgePadding: {
          top: 200,
          right: 200,
          bottom: 200,
          left: 200,
        },
      });
    }
  }, [coordinates]);

  return (
    <View>
      <MapView ref={mapView} style={{ width: "100%", height: "100%" }}>
        {route.params.searchResults.map((item) =>
          item.properties.map((property) => (
            <Marker
              key={property.id}
              title={property.name}
              description={property.description}
              coordinate={{
                latitude: Number(property.latitude),
                longitude: Number(property.longitude),
              }}
            >
              <Pressable
                style={{
                  backgroundColor: "#003580",
                  paddingHorizontal: 7,
                  paddingVertical: 4,
                  borderRadius: 4,
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    color: "white",
                    paddingVertical: 4,
                    borderRadius: 4,
                  }}
                >
                  {property.newPrice}
                </Text>
              </Pressable>
            </Marker>
          ))
        )}
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
