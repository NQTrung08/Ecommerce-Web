// components
import Spring from "@components/Spring";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  Line,
  LineChart,
} from "recharts";

// hooks
import { useTheme } from "@contexts/themeContext";
import { useWindowSize } from "react-use";
import { numFormatter } from "@utils/helpers";
import { useState } from "react";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="chart-tooltip p-4">
        <h6 className="mb-1">{label}</h6>
        <div className="flex flex-col">
          {payload.map((item, index) => (
            <div className="flex gap-1.5" key={index}>
              {/* <span className="label-text capitalize">{item.name}:</span> */}
              <span className="h6 !text-sm">
                {numFormatter(item.value, 1)}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

const SalesStats = ({ data, title, color }) => {
  const { theme } = useTheme();
  const { width } = useWindowSize();
  const revenueColor = theme === "light" ? "var(--header)" : "#C4DEFF";
  const expenseColor = theme === "light" ? "var(--input-border)" : "#8D8D99";
  const [chartType, setChartType] = useState("BarChart");

  console.log("data", data);
  const handleChartTypeChange = (e) => {
    setChartType(e.target.value);
  };

  return (
    <Spring className="card w-full flex flex-col h-[300px] md:h-[494px] lg:col-span-3 xl:col-span-1">
      <div className="flex flex-col gap-2.5 mb-5 md:flex-row md:justify-between md:items-center">
        <select
          className="p-2 border rounded-md font-heading font-semibold text-sm text-header text-black"
          value={chartType}
          onChange={handleChartTypeChange}
        >
          <option className="text-black" value="BarChart">Bar Chart</option>
          <option className="text-black" value="LineChart">Line Chart</option>
          <option className="text-black" value="AreaChart">Area Chart</option>
        </select>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2.5">
            <span
              className="w-4 h-4 rounded-full"
              style={{ background: color ? expenseColor : revenueColor }}
            />
            <span className="font-heading font-semibold text-sm text-header">
              {title}
            </span>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === "BarChart" && (
            <BarChart data={data} margin={false}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="var(--input-border)"
                strokeOpacity={0.6}
              />
              <XAxis
                dataKey="name"
                tickLine={false}
                axisLine={false}
                dy={9}
                hide={width < 768}
                tick={{
                  fontSize: 10,
                  fontFamily: "var(--heading-font)",
                  fontWeight: 700,
                  fill: "var(--header)",
                }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => numFormatter(value, 0)}
                tick={{ fill: "var(--header)" }}
                hide={width < 768}
              />
              <Tooltip cursor={false} content={<CustomTooltip />} />
              <Bar
                dataKey="revenue"
                fill={color ? expenseColor : revenueColor}
                maxBarSize={16}
                radius={10}
              />
            </BarChart>
          )}
          {chartType === "LineChart" && (
            <LineChart data={data} margin={false}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="var(--input-border)"
                strokeOpacity={0.6}
              />
              <XAxis
                dataKey="name"
                tickLine={false}
                axisLine={false}
                dy={9}
                hide={width < 768}
                tick={{
                  fontSize: 10,
                  fontFamily: "var(--heading-font)",
                  fontWeight: 700,
                  fill: "var(--header)",
                }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => numFormatter(value, 0)}
                tick={{ fill: "var(--header)" }}
                hide={width < 768}
              />
              <Tooltip cursor={false} content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke={color ? expenseColor : revenueColor}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          )}
          {chartType === "AreaChart" && (
            <AreaChart data={data} margin={false}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="var(--input-border)"
                strokeOpacity={0.6}
              />
              <XAxis
                dataKey="name"
                tickLine={false}
                axisLine={false}
                dy={9}
                hide={width < 768}
                tick={{
                  fontSize: 10,
                  fontFamily: "var(--heading-font)",
                  fontWeight: 700,
                  fill: "var(--header)",
                }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => numFormatter(value, 0)}
                tick={{ fill: "var(--header)" }}
                hide={width < 768}
              />
              <Tooltip cursor={false} content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="revenue"
                fill={color ? expenseColor : revenueColor}
                stroke={color ? expenseColor : revenueColor}
                strokeWidth={2}
              />
            </AreaChart>
          )}
        </ResponsiveContainer>
      </div>
    </Spring>
  );
};

export default SalesStats;
