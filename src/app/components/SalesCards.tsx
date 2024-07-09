"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import MaterialSymbolsArrowLeftAlt from "@/components/icons/material_symbols/MaterialSymbolsArrowLeftAlt";
import { motion } from "framer-motion";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);
export interface SalesCardProps {
  title: string;
  percentage: number;
  rotateArrow?: boolean;
  colorRed?: boolean;
}
const SalesCard = (props: SalesCardProps) => {
  const { percentage, rotateArrow, colorRed, title } = props;

  const lineColor = colorRed ? "rgba(220, 38, 38, 1)" : "rgba(34, 197, 94, 1)";
  const data = {
    labels: ["", "", "", "", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        data: [20, 22, 21, 24, 25, 26, 28, 29, 30, 31, 32, 35],
        fill: false,
        borderColor: lineColor,
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.4,
        delay: 0.3,
        ease: "easeInOut",
      }}
      style={styles.card}
    >
      <div style={styles.header}>
        <span style={styles.title}>{title}</span>
        <span
          style={styles.percentageBase}
          className={!colorRed ? "text-green-500" : `text-red-600`}
        >
          <MaterialSymbolsArrowLeftAlt
            className={!rotateArrow ? "rotate-90" : "-rotate-90"}
          />
          {percentage}%
        </span>
      </div>
      <div style={styles.chartContainer}>
        <Line data={data} options={options} />
      </div>
    </motion.div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    padding: "16px",
    width: "270px",
    height: "120px",
    boxSizing: "border-box",
    backgroundColor: "#fff",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#000",
  },
  arrow: {
    display: "inline-block",
    transform: "rotate(45deg)",
    color: "#4caf50",
  },
  chartContainer: {
    height: "60px",
    color: "red",
  },
  percentageBase: {
    display: "flex",
    alignItems: "center",
    fontSize: "1.5rem",
  },
};

export default SalesCard;
