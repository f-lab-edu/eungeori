import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  scales,
} from "chart.js";
import { flexSprinklesFc } from "@/app/components/common/utils/flex";
import { chartBg, filterWrapper, poopBox, poopBoxWrapper, toggle, toggleActive } from "../styles/graph.css";
import Image from "next/image";
import { useState } from "react";
import { caption, light } from "@/app/styles/font.css";
import { gray300 } from "@/app/styles/colors.css";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, scales);
ChartJS.defaults.color = "#D9D9D9";

const bowelInfoDate = [
  {
    bowelTime: {
      hour: 5,
      minute: 20,
    },
    stoolAttributes: { consistency: "thin", shapeType: "poop-1" },
    date: "24.09.09",
  },
  {
    bowelTime: {
      hour: 13,
      minute: 20,
    },
    stoolAttributes: { consistency: "thin", shapeType: "poop-1" },
    date: "24.09.10",
  },
  {
    bowelTime: {
      hour: 16,
      minute: 10,
    },
    stoolAttributes: { consistency: "thin", shapeType: "poop-4" },
    date: "24.09.10",
  },
  {
    bowelTime: {
      hour: 20,
      minute: 10,
    },
    stoolAttributes: { consistency: "thin", shapeType: "poop-2" },
    date: "24.09.10",
  },
  {
    bowelTime: {
      hour: 16,
      minute: 20,
    },
    stoolAttributes: { consistency: "thin", shapeType: "poop-1" },
    date: "24.09.13",
  },
  {
    bowelTime: {
      hour: 3,
      minute: 20,
    },
    stoolAttributes: { consistency: "thin", shapeType: "poop-1" },
    date: "24.09.20",
  },
  {
    bowelTime: {
      hour: 19,
      minute: 20,
    },
    stoolAttributes: { consistency: "thin", shapeType: "poop-1" },
    date: "24.09.09",
  },
];

const DataGraph = () => {
  const [isToggleActive, setIsToggleActive] = useState(false);

  const bowelDateCount = bowelInfoDate.reduce((acc, cur) => {
    const date = cur.date;
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  const labels = Object.keys(bowelDateCount);
  const dataPoints = Object.values(bowelDateCount);

  const data = {
    labels,
    datasets: [
      {
        data: dataPoints,
        borderColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) return;

          // 그라디언트 생성
          const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          gradient.addColorStop(0, "rgba(75,192,192,1)");
          gradient.addColorStop(1, "rgba(153,102,255,1)");

          return gradient;
        },
        borderWidth: 8,
        tension: 0.4,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    grouped: true,
    layout: {
      padding: 10,
    },
    scales: {
      x: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
      y: {
        position: "right",
        max: 7,
        ticks: {
          stepSize: 1,
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: isToggleActive,
        padding: 10,
        backgroundColor: "#fff",
        titleColor: "#141313",

        bodyColor: "#141313",
        titleFont: {
          family: "pretendard",
        },
        bodyFont: {
          family: "pretendard",
        },
      },
      chartAreaStyles: {
        borderColor: "#F5F5F5",
      },
    },
  };

  const chartAreaStyles = {
    id: "chartAreaStyles",
    beforeDatasetDraw(chart, _, options) {
      const {
        ctx,
        chartArea: { top, bottom, left, right, width, height },
      } = chart;
      ctx.save();
      ctx.fillStyle = "#F5F5F5";
      ctx.fillRect(left, top, width, height);

      // 경계선
      ctx.save();
      ctx.strokeStyle = options.borderColor;
      ctx.strokeRect(left, top, width, height);
      ctx.restore();
    },
  };

  return (
    <>
      <div className={filterWrapper}>
        <div>일주일</div>
        <div
          className={`${toggle} ${isToggleActive ? toggleActive : ""}`}
          onClick={() => setIsToggleActive(!isToggleActive)}
        ></div>
      </div>
      <div
        className={flexSprinklesFc({
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        })}
      >
        <div className={chartBg}>
          <Line data={data} options={options} plugins={[chartAreaStyles]} />
        </div>

        <p className={`${caption} ${gray300} ${light}`}>
          *같은 날 변의 묽기가 다를 경우 먼저 적힌 상태로 보여지게됩니다.
        </p>
        <div className={poopBoxWrapper}>
          <div className={poopBox}>
            <Image src="/svgs/poop/thin/active_thin.svg" width={27} height={27} alt="icon" />3
          </div>
          <div className={poopBox}>
            <Image src="/svgs/poop/thin/active_default.svg" width={27} height={27} alt="icon" />2
          </div>
          <div className={poopBox}>
            <Image src="/svgs/poop/thin/active_crackle.svg" width={27} height={27} alt="icon" />2
          </div>
        </div>
      </div>
    </>
  );
};

export default DataGraph;
