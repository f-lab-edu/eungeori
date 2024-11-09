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
  ScriptableContext,
  ChartOptions,
} from "chart.js";
import { flexSprinklesFc } from "@/app/components/common/utils/flex";
import { chartBg, filterWrapper, poopBox, poopBoxWrapper, toggle, toggleActive } from "../styles/graph.css";
import Image from "next/image";
import { useState } from "react";
import { caption, light } from "@/app/styles/font.css";
import { gray300 } from "@/app/styles/colors.css";

type BowelDateCount = Record<string, number>;

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
    stoolAttributes: { consistency: "default", shapeType: "poop-1" },
    date: "24.09.10",
  },
  {
    bowelTime: {
      hour: 16,
      minute: 10,
    },
    stoolAttributes: { consistency: "crackle", shapeType: "poop-4" },
    date: "24.09.10",
  },
  {
    bowelTime: {
      hour: 20,
      minute: 10,
    },
    stoolAttributes: { consistency: "crackle", shapeType: "poop-2" },
    date: "24.09.10",
  },
  {
    bowelTime: {
      hour: 16,
      minute: 20,
    },
    stoolAttributes: { consistency: "default", shapeType: "poop-1" },
    date: "24.09.13",
  },
  {
    bowelTime: {
      hour: 3,
      minute: 20,
    },
    stoolAttributes: { consistency: "default", shapeType: "poop-1" },
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

  const bowelDateCount = bowelInfoDate.reduce((acc: BowelDateCount, cur) => {
    const date = cur.date;
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  const labels = Object.keys(bowelDateCount);
  const dataPoints = Object.values(bowelDateCount);
  const consistency = bowelInfoDate.map((x) => x.stoolAttributes.consistency);

  const consistencyCount = (consistency: string[], type: string) => {
    return consistency.filter((consistency) => consistency === type);
  };

  const gradientData = (type: string, gradient: CanvasGradient) => {
    switch (type) {
      case "thin":
        gradient.addColorStop(0, "#FEE88B");
        gradient.addColorStop(1, "#FEE88B");
        break;
      case "default":
        gradient.addColorStop(0, "#141313");
        gradient.addColorStop(1, "#141313");
        break;
      case "crackle":
        gradient.addColorStop(0, "#FC5064");
        gradient.addColorStop(1, "#FC5064");
        break;
      default:
        gradient.addColorStop(0, "#D9D9D9");
        gradient.addColorStop(1, "#D9D9D9");
    }
  };

  const data = {
    labels,
    datasets: [
      {
        data: dataPoints,
        borderColor: (context: ScriptableContext<"line">) => {
          const { chart, dataIndex } = context;
          const ctx = chart.ctx;
          const chartArea = chart.chartArea;

          if (!chartArea) return;

          const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);

          const consistencyType = consistency[dataIndex];

          gradientData(consistencyType, gradient);

          return gradient;
        },
        borderWidth: 7,
        pointRadius: 9,
        pointHoverRadius: 9,
        pointBorderColor: "transparent",
        pointBackgroundColor: (context: ScriptableContext<"line">) => {
          const { dataIndex } = context;
          const consistencyType = consistency[dataIndex];

          switch (consistencyType) {
            case "thin":
              return "#FEE88B";
            case "default":
              return "#141313";
            case "crackle":
              return "#FC5064";
            default:
              return "#D9D9D9";
          }
        },
        pointBorderWidth: 0,
        tension: 0.4,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
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

        <div className={flexSprinklesFc({ alignItems: "flex-start" })} style={{ width: "90%" }}>
          <p className={`${caption} ${gray300} ${light}`}>
            * 같은 날 변의 묽기가 다를 경우 먼저 적힌 상태로 보여지게됩니다.
          </p>
        </div>
        <div className={poopBoxWrapper}>
          <div className={poopBox}>
            <Image src="/svgs/poop/thin/active_thin.svg" width={27} height={27} alt="icon" />
            {consistencyCount(consistency, "thin").length}
          </div>
          <div className={poopBox}>
            <Image src="/svgs/poop/thin/active_default.svg" width={27} height={27} alt="icon" />
            {consistencyCount(consistency, "default").length}
          </div>
          <div className={poopBox}>
            <Image src="/svgs/poop/thin/active_crackle.svg" width={27} height={27} alt="icon" />
            {consistencyCount(consistency, "crackle").length}
          </div>
        </div>
      </div>
    </>
  );
};

export default DataGraph;
