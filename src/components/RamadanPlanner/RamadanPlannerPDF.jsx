import React from "react";
import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";

// Create styles for PDF with improved layout
const styles = StyleSheet.create({
  page: {
    padding: 20,
    backgroundColor: "#ffffff",
  },
  header: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: "center",
    color: "#047857", // emerald-600
    fontWeight: "bold",
  },
  tableContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#047857", // emerald-600
  },
  tableHeaderCell: {
    width: "3%",
    padding: 4,
    borderWidth: 1,
    borderColor: "#e5e7eb", // gray-200
    color: "#ffffff",
    fontSize: 8,
    textAlign: "center",
  },
  taskHeaderCell: {
    width: "12%",
    padding: 4,
    borderWidth: 1,
    borderColor: "#e5e7eb", // gray-200
    backgroundColor: "#047857", // emerald-600
    color: "#ffffff",
    fontSize: 8,
    textAlign: "center",
    fontWeight: "bold",
  },
  scoreRow: {
    flexDirection: "row",
    backgroundColor: "#ecfdf5", // emerald-50
  },
  scoreHeaderCell: {
    width: "12%",
    padding: 4,
    borderWidth: 1,
    borderColor: "#e5e7eb", // gray-200
    backgroundColor: "#d1fae5", // emerald-100
    color: "#047857",
    fontSize: 8,
    textAlign: "center",
    fontWeight: "bold",
  },
  scoreCell: {
    width: "3%",
    padding: 4,
    borderWidth: 1,
    borderColor: "#e5e7eb", // gray-200
    fontSize: 8,
    textAlign: "center",
  },
  taskRow: {
    flexDirection: "row",
  },
  taskCell: {
    width: "12%",
    padding: 4,
    borderWidth: 1,
    borderColor: "#e5e7eb", // gray-200
    backgroundColor: "#d1fae5", // emerald-100
    color: "#047857",
    fontSize: 8,
    textAlign: "left",
  },
  cellContent: {
    width: "3%",
    padding: 4,
    borderWidth: 1,
    borderColor: "#e5e7eb", // gray-200
    fontSize: 8,
    textAlign: "center",
  },
  checkMark: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#047857", // emerald-600 color for the check mark
  },
  completedCell: {
    backgroundColor: "#a7f3d0", // emerald-200
  },
  footer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 8,
    color: "#6b7280", // gray-500
  },
});

// Improved PDF Document Component
const RamadanPlannerPDF = ({ tasks, progress, currentUser }) => {
  // Function to calculate score for a specific day
  const calculateScore = (day) => {
    let completed = 0;
    tasks.forEach((_, taskIndex) => {
      const idx = taskIndex * 30 + day;
      if (progress[idx]) completed++;
    });
    return Math.round((completed / tasks.length) * 100);
  };

  return (
    <Document>
      <Page size="A4" orientation="landscape" style={styles.page}>
        <Text style={styles.header}>
          {currentUser?.name || "User"}'s Ramadan Planner
        </Text>

        <View style={styles.tableContainer}>
          {/* Header Row with Days */}
          <View style={styles.tableHeader}>
            <Text style={styles.taskHeaderCell}>Tasks</Text>
            {Array.from({ length: 30 }, (_, i) => (
              <Text key={`header-${i}`} style={styles.tableHeaderCell}>
                {i + 1}
              </Text>
            ))}
          </View>

          {/* Score Row */}
          <View style={styles.scoreRow}>
            <Text style={styles.scoreHeaderCell}>Score</Text>
            {Array.from({ length: 30 }, (_, i) => (
              <Text key={`score-${i}`} style={styles.scoreCell}>
                {calculateScore(i)}%
              </Text>
            ))}
          </View>

          {/* Task Rows */}
          {tasks.map((task, taskIndex) => (
            <View key={`task-${taskIndex}`} style={styles.taskRow}>
              <Text style={styles.taskCell}>{task}</Text>
              {Array.from({ length: 30 }, (_, day) => {
                const idx = taskIndex * 30 + day;
                return (
                  <Text
                    key={`cell-${taskIndex}-${day}`}
                    style={[
                      styles.cellContent,
                      progress[idx] ? styles.completedCell : {},
                    ]}
                  >
                    {progress[idx] ? "✓" : ""}
                  </Text>
                );
              })}
            </View>
          ))}
        </View>

        <Text style={styles.footer}>
          EMANTIME | Strengthen Your Faith Daily
        </Text>
      </Page>
    </Document>
  );
};

export default RamadanPlannerPDF;
