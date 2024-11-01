import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SearchResults = ({ data, input, setInput }) => {
  const navigation = useNavigation();

  // Filter the data based on input
  const filteredData = data.filter((item) =>
    item.place.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <View style={{ padding: 10 }}>
      {input !== "" && filteredData.length === 0 ? (
        <Text
          style={{
            color: "red",
            textAlign: "center",
            fontWeight: "400",
            fontSize: 20,
          }}
        >
          No City Found!
        </Text>
      ) : (
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                setInput(item.place);
                navigation.navigate("Home", {
                  input: item.place,
                });
              }}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <View>
                <Image
                  style={{ width: 70, height: 70 }}
                  source={{ uri: item.placeImage }}
                />
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 15, fontWeight: "500" }}>
                  {item.place}
                </Text>
                <Text style={{ marginVertical: 4 }}>
                  {item.shortDescription}
                </Text>
                <Text style={{ color: "gray", fontSize: 15 }}>
                  {item.properties.length} Properties
                </Text>
              </View>
            </Pressable>
          )}
        />
      )}
    </View>
  );
};

export default SearchResults;

const styles = StyleSheet.create({});