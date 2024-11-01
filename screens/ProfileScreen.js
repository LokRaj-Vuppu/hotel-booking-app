import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, { useLayoutEffect, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from "../firebase";
import { ScrollView } from 'react-native-web';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [userDetails, setUserDetails] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Profile",
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


  useEffect(() => {
    const fetchUser = async (uid) => {
      try {
        const userDocRef = doc(db, "users", uid);
        const userSnapshot = await getDoc(userDocRef);

        if (userSnapshot.exists()) {
          const data = userSnapshot.data();
          setUserDetails(data);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    const user = auth.currentUser;
    if (user) {
      fetchUser(user.uid); // Call the function and pass userId
    }
  }, []);

  return (
    <SafeAreaView>
      {userDetails ? (<>
        <View style={{marginHorizontal:20, marginVertical:20, flexDirection:"row", gap:10}}>
        <Text style={{fontSize:20, fontWeight:"300"}}>Email : </Text>
        <Text style={{fontSize:20, fontWeight:"bold"}}>{userDetails.email}</Text>
      </View>
      <View style={{marginHorizontal:20, flexDirection:"row", gap:10}}>
        <Text style={{fontSize:20, fontWeight:"300"}}>Phone : </Text>
        <Text style={{fontSize:20, fontWeight:"bold"}}>{userDetails.phoneNumber}</Text>
      </View>
      </>) : (
        // <Text>Loading Profile details...</Text>
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" />
          <Text>Fetching profile Details</Text>
        </View>
      ) }
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
})