import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Colors from "@/constants/Colors";

type DateItem = {
  month: string;
  day: number;
  weekday: string;
  key: string;
};

const generateDates = (): DateItem[] => {
  const base = new Date(2026, 2, 23);
  return Array.from({ length: 7 }, (_, i) => {
    const date = new Date(base);
    date.setDate(base.getDate() + i);
    return {
      month: date.toLocaleDateString("en-US", { month: "short" }),
      day: date.getDate(),
      weekday: date.toLocaleDateString("en-US", { weekday: "short" }),
      key: date.toISOString(),
    };
  });
};

const DATES = generateDates();
const DEFAULT_SELECTED = DATES[2].key;

const DateSelector = () => {
  const [selectedDate, setSelectedDate] = useState(DEFAULT_SELECTED);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}
      contentContainerStyle={styles.container}
    >
      {DATES.map((item) => {
        const isSelected = item.key === selectedDate;

        return (
          <TouchableOpacity
            key={item.key}
            style={[styles.dateItem, isSelected && styles.dateItemSelected]}
            onPress={() => setSelectedDate(item.key)}
          >
            <Text style={[styles.month, isSelected && styles.selectedText]}>
              {item.month}
            </Text>

            <Text style={[styles.day, isSelected && styles.selectedText]}>
              {item.day}
            </Text>

            <Text style={[styles.weekday, isSelected && styles.selectedText]}>
              {item.weekday}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default DateSelector;

const styles = StyleSheet.create({
  scrollView: {
    height: 100,
  },
  container: {
    paddingHorizontal: 16,
    gap: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  dateItem: {
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 20,
    minWidth: 64,
  },
  dateItemSelected: {
    backgroundColor: Colors.primary,
  },
  month: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginBottom: 6,
  },
  day: {
    fontSize: 22,
    fontWeight: "700",
    color: Colors.textPrimary,
    marginBottom: 6,
  },
  weekday: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  selectedText: {
    color: "#FFFFFF",
  },
});
