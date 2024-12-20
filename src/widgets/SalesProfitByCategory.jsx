// components
import Spring from "@components/Spring";
import LabeledProgressBar from "@components/LabeledProgressBar";
import RatingStars from "@ui/RatingStars";
import { NavLink } from "react-router-dom";

// utils
import { getPercentage, numFormatter } from "@utils/helpers";

// Hàm tạo màu ngẫu nhiên
const getRandomColor = () => {
  const colors = [
    "accent",
    "red",
    "header",
    "yellow",
    "green",
    "blue",
    "purple",
    "orange",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const SalesProfitByCategory = ({ statisticCategory }) => {
  const statisticCategoryWithColor = statisticCategory.map((item) => {
    return { ...item, color: getRandomColor() };
  });

  const formattedData = statisticCategoryWithColor.map((item) => ({
    label: item.categoryName,
    value: item.totalRevenue, 
    color: item.color, 
  }));

  console.log("Formatted Data:", formattedData);

  return (
    <Spring className="card flex flex-col">
      <h5 className="mb-4">Sales Profit by Category</h5>
      <div className="flex flex-1 flex-col gap-[27px] justify-between">
        <div className="flex flex-col gap-4">
          {formattedData.map((item, index) => (
            <LabeledProgressBar
              key={index}
              label={item.label} 
              value={getPercentage(formattedData, item.value)} 
              color={item.color} 
              displayValue={numFormatter(item.value, 2)} 
            />
          ))}
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
          <div className="flex flex-col gap-2">
            <h5>Review Rate</h5>
            <RatingStars value={3.5} />
          </div>
          <div className="sm:text-right">
            <p className="text-sm text-header sm:mb-1.5">From 324 Responders</p>
            <NavLink className="text-btn" to="/reviews">
              View All Reviews
            </NavLink>
          </div>
        </div>
      </div>
    </Spring>
  );
};

export default SalesProfitByCategory;
