import React from "react";
import {FontAwesome} from "@expo/vector-icons";
import {Tabs} from "expo-router";
import {Pressable, useColorScheme} from "react-native";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{marginBottom: -3}} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colorScheme === "dark" ? "#fff" : "#000",
        tabBarInactiveTintColor: colorScheme === "dark" ? "#aaa" : "#666",
        tabBarStyle: {
          backgroundColor: colorScheme === "dark" ? "#f57c00" : "#f5f5f5",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Tab One",
          headerShown: false,
          tabBarIcon: ({color}) => <TabBarIcon name="cutlery" color={color} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Tab Two",
          tabBarIcon: ({color}) => <TabBarIcon name="coffee" color={color} />,
        }}
      />
    </Tabs>
  );
}
