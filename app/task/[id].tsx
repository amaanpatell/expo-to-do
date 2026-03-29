import Colors from "@/constants/Colors";
import { TASKS } from "@/constants/Task";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const STATUS_COLOR = {
  Done: Colors.statusDone,
  "In Progress": Colors.statusInProgress,
  "To-do": Colors.statusTodo,
};

const STATUS_BG = {
  Done: "rgba(74, 222, 128, 0.12)",
  "In Progress": "rgba(251, 191, 36, 0.12)",
  "To-do": "rgba(56, 189, 248, 0.12)",
};

export default function TaskDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const task = TASKS.find((t) => t.id === id);

  if (!task) {
    return (
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <Text style={{ color: Colors.textPrimary }}>Task not found.</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      <StatusBar style="auto" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color={Colors.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Task Detail</Text>
        <View style={styles.backButton} />
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* Icon + Category */}
        <View style={styles.topRow}>
          <View style={[styles.iconBadge, { backgroundColor: task.icon.backgroundColor }]}>
            <Ionicons name={task.icon.name as any} size={28} color="#fff" />
          </View>
          <Text style={styles.category}>{task.category}</Text>
        </View>

        {/* Title */}
        <Text style={styles.title}>{task.title}</Text>

        {/* Status pill */}
        <View style={[styles.statusPill, { backgroundColor: STATUS_BG[task.status] }]}>
          <View style={[styles.statusDot, { backgroundColor: STATUS_COLOR[task.status] }]} />
          <Text style={[styles.statusText, { color: STATUS_COLOR[task.status] }]}>
            {task.status}
          </Text>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Info rows */}
        <View style={styles.infoCard}>
          <InfoRow icon="time-outline" label="Time" value={task.time} />
          <View style={styles.infoSeparator} />
          <InfoRow icon="folder-outline" label="Project" value={task.category} />
          <View style={styles.infoSeparator} />
          <InfoRow icon="flag-outline" label="Priority" value="Medium" />
        </View>

        {/* Description placeholder */}
        <Text style={styles.sectionTitle}>Description</Text>
        <View style={styles.descriptionCard}>
          <Text style={styles.descriptionText}>
            Complete the task "{task.title}" as part of the {task.category} project.
            Make sure to follow the design guidelines and submit for review when done.
          </Text>
        </View>

        {/* Subtasks placeholder */}
        <Text style={styles.sectionTitle}>Subtasks</Text>
        <View style={styles.infoCard}>
          {["Research & gather references", "Create initial draft", "Review and iterate"].map(
            (sub, i) => (
              <React.Fragment key={i}>
                {i > 0 && <View style={styles.infoSeparator} />}
                <View style={styles.subtaskRow}>
                  <View style={[styles.checkbox, i === 0 && styles.checkboxDone]}>
                    {i === 0 && (
                      <Ionicons name="checkmark" size={12} color="#fff" />
                    )}
                  </View>
                  <Text style={[styles.subtaskText, i === 0 && styles.subtaskDone]}>
                    {sub}
                  </Text>
                </View>
              </React.Fragment>
            )
          )}
        </View>
      </ScrollView>
    </View>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) {
  return (
    <View style={styles.infoRow}>
      <View style={styles.infoIconWrap}>
        <Ionicons name={icon as any} size={16} color={Colors.primary} />
      </View>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: Colors.surface,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: Colors.textPrimary,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 40,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    marginBottom: 16,
  },
  iconBadge: {
    width: 54,
    height: 54,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  category: {
    flex: 1,
    fontSize: 13,
    color: Colors.textSecondary,
    fontWeight: "500",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: Colors.textPrimary,
    lineHeight: 32,
    marginBottom: 16,
  },
  statusPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    alignSelf: "flex-start",
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
    marginBottom: 24,
  },
  statusDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
  },
  statusText: {
    fontSize: 13,
    fontWeight: "600",
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginBottom: 24,
  },
  infoCard: {
    backgroundColor: Colors.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: 24,
    overflow: "hidden",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  infoIconWrap: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: Colors.primaryMuted,
    justifyContent: "center",
    alignItems: "center",
  },
  infoLabel: {
    flex: 1,
    fontSize: 14,
    color: Colors.textSecondary,
  },
  infoValue: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.textPrimary,
  },
  infoSeparator: {
    height: 1,
    backgroundColor: Colors.border,
    marginLeft: 60,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.textPrimary,
    marginBottom: 12,
  },
  descriptionCard: {
    backgroundColor: Colors.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 16,
    marginBottom: 24,
  },
  descriptionText: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 22,
  },
  subtaskRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: Colors.border,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxDone: {
    backgroundColor: Colors.statusDone,
    borderColor: Colors.statusDone,
  },
  subtaskText: {
    fontSize: 14,
    color: Colors.textPrimary,
  },
  subtaskDone: {
    color: Colors.textSecondary,
    textDecorationLine: "line-through",
  },
});
