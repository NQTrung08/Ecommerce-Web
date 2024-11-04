// components
import Spring from "@components/Spring";
import LabeledProgressBar from "@components/LabeledProgressBar";

// utils
import { getPercentage, numFormatter } from "@utils/helpers";
import { useEffect, useState } from "react";
import { statisticCategoryForAdmin } from "../api/categorie";
import Loading from "@components/Loading";

const TopSalesByCategories = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const statisticData = data.slice(0, 4); 

  const colors = ["accent", "red", "yellow", "header"];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await statisticCategoryForAdmin(
          "totalRevenue",
          "desc"
        );
        console.log("response", response);
        const formattedData = response?.map((item, index) => ({
          label: item.categoryName,
          value: item.totalRevenue,
          color: colors[index],
        }));
        console.log("formattedData", formattedData);
        setData(formattedData);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch category data", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Spring className="card flex flex-col gap-2.5 2xl:col-span-2">
      <h5>Top Sales by Categories</h5>
      <div className="flex flex-col gap-[17px]">
        {statisticData.map((item, index) => (
          <LabeledProgressBar
            key={index}
            wrapperClass="!gap-0"
            label={item.label}
            color={item.color}
            value={getPercentage(data, item.value)}
            displayValue={numFormatter(item.value, 2, "$")}
          />
        ))}
      </div>
    </Spring>
  );
};

export default TopSalesByCategories;
