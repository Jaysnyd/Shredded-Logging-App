import {
  FontAwesome5,
  Ionicons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#1E40AF",
        tabBarInactiveTintColor: "#6B7280",
        tabBarStyle: {
          height: 84,
          backgroundColor: "#F9FAFB",
          borderTopWidth: 1,
          borderTopColor: "#E5E7EB",
        },
        tabBarIconStyle: {
          marginTop: 6,
          marginBottom: 9,
        },
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Dashboard",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="dashboard" size={30} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="goals"
        options={{
          title: "Goals",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Octicons name="goal" size={30} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="logging"
        options={{
          title: "Log",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="list-alt" size={30} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={30} color="black" />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
