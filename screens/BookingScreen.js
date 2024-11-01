import { StyleSheet, Text, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

const BookingScreen = () => {
  const bookings = useSelector((state) => state.booking.booking);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Bookings",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);

  
  return (
    <SafeAreaView>
      {bookings.length ?
        bookings.map((item) => (
          <Pressable
            key={Math.floor(Math.random() * 100 + 1)}
            style={{
              backgroundColor: "white",
              marginVertical: 10,
              marginHorizontal: 20,
              borderColor: "#E0E0E0",
              borderWidth: 1,
              padding: 14,
              borderRadius: 6,
            }}
          >
            <View>
              <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                {item.name}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 7,
                }}
              >
                <MaterialIcons name="stars" size={24} color="green" />
                <Text
                  style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}
                >
                  {item.rating}
                </Text>
                <Text style={{ marginLeft: 3 }}>•</Text>
                <View
                  style={{
                    padding: 6,
                    borderRadius: 4,
                    width: 100,
                    backgroundColor: "#0039a6",

                    marginLeft: 4,
                    borderRadius: 5,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 13,
                      fontWeight: "400",
                    }}
                  >
                    Genius Level
                  </Text>
                </View>
              </View>
            </View>
          </Pressable>
        )) : <Text style={{fontSize:30, margin:20, textAlign:"center"}}>No Bookings Found</Text>}
    </SafeAreaView>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({});
