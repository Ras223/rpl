import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { useHeaderHeight } from "@react-navigation/elements";
import CategoryButtons from "@/components/CategoryButtons";
import Listings from "@/components/Listings";
import listingData from "@/data/destinations.json";
import GroupListings from "@/components/GroupListings";
import groupData from "@/data/groups.json";

const Page = () => {
  const headerHeight = useHeaderHeight();
  const [category, setCategory] = useState("All");

  const onCatChanged = (category: string) => {
    console.log("Categpry: ", category);
    setCategory(category);
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => {}} style={{ marginLeft: 20 }}>
              <Image
                source={{
                  uri: "https://xsgames.co/randomusers/avatar.php?g=female",
                }}
                style={{ width: 40, height: 40, borderRadius: 10 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <View style={[styles.container, { paddingTop: headerHeight }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.headingTxt}>Good Morning, Rizky</Text>

          <View style={styles.searchSectionWrapper}>
            <View style={styles.searchBar}>
              <Ionicons name="search" size={18} style={{ marginRight: 5 }} color={Colors.black} />
              <TextInput placeholder="Search..." />
            </View>
          </View>

          <CategoryButtons onCagtegoryChanged={onCatChanged} />

          <Listings listings={listingData} category={category} />

          <GroupListings listings={groupData} />
        </ScrollView>
      </View>
    </>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.bgColor,
  },
  headingTxt: {
    fontSize: 16,
    fontWeight: "800",
    color: Colors.black,
    marginTop: 10,
  },
  searchSectionWrapper: {
    flexDirection: "row",
    marginVertical: 20,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 40,
  },
});
