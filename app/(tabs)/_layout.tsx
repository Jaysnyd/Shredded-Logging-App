import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";
import React from "react";

export default function TabsLayout() {
  return (
    <NativeTabs tintColor="#4CB491">
      <NativeTabs.Trigger name="dashboard">
        <Label>Dashboard</Label>
        <Icon sf={"square.grid.2x2.fill"} drawable="dashboard" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="goals">
        <Label>Goals</Label>
        <Icon sf={"trophy.fill"} drawable="ic_trophy" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="logging">
        <Label>Log</Label>
        <Icon sf={"list.bullet"} drawable="ic_list" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="settings">
        <Label>Settings</Label>
        <Icon sf={"gearshape.fill"} drawable="ic_settings" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
