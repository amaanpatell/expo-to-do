import Colors from "@/constants/Colors";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { FilterOptions, TASKS } from "@/constants/Task";
import Header from "@/components/Header";
import DateSelector from "@/components/DateSelector";
import FilterTabs from "@/components/FilterTabs";
import { useState } from "react";
import TaskCard from "@/components/TaskCard";

export default function Index() {
  const insets = useSafeAreaInsets();
  const [activeFilter, setActiveFilter] = useState<FilterOptions>("All");

  const filteredTasks =
    activeFilter === "All"
      ? TASKS
      : TASKS.filter((t) => t.status === activeFilter);

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <StatusBar style="auto" />
      <View style={{ paddingBottom: 12 }}>
        <Header />
        <DateSelector />
        <FilterTabs selected={activeFilter} onSelect={setActiveFilter} />
      </View>

      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskCard task={item} />}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  list: {
    paddingBottom: 24,
  },
});
