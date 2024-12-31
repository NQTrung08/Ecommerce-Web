import { useEffect, useState } from "react";
import PageHeader from "@layout/PageHeader";
import MainProfileInfo from "@widgets/MainProfileInfo";
import SalesStats from "@widgets/SalesStats";
import { getProfitForAdmin, getShopRevenue } from "../api/statistic";
import Loader from "@components/Loader";

const SalesAnalytics = () => {
  const [totalRevenueEcommerce, setTotalRevenueEcommerce] = useState(null);
  const [totalOrdersEcommerce, setTotalOrdersEcommerce] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataTotalRevenue, setTotalRevenueData] = useState([]);
  const [dataTotalOrders, setTotalOrdersData] = useState([]);

  // State for date range
  const [startDate, setStartDate] = useState("2024-01-01");
  const [endDate, setEndDate] = useState("2024-12-31");
  const [groupBy, setGroupBy] = useState("month");

  let debounceTimer = null;

  // Determine `groupBy` based on the date range
  const calculateGroupBy = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffInDays = (end - start) / (1000 * 60 * 60 * 24);

    if (diffInDays <= 30) return "day";
    if (diffInDays <= 365) return "month";
    return "year";
  };

  // Update groupBy whenever dates change
  useEffect(() => {
    setGroupBy(calculateGroupBy(startDate, endDate));
  }, [startDate, endDate]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const revenueData = await getShopRevenue({ startDate, endDate, groupBy });

      const transformedTotalRevenueData = revenueData.map((item) => ({
        name:
          groupBy === "month"
            ? `Tháng ${item.month}`
            : groupBy === "year"
            ? `Năm ${item.year}`
            : groupBy === "day"
            ? `Ngày ${item.day}`
            : item.date,
        revenue: item.totalRevenue,
      }));
      
      const transformedTotalOrders = revenueData.map((item) => ({
        name:
          groupBy === "month"
            ? `Tháng ${item.month}`
            : groupBy === "year"
            ? `Năm ${item.year}`
            : groupBy === "day"
            ? `Ngày ${item.day}/${item.month} `
            : item.date,
        revenue: item.totalOrders,
      }));
      const totalRevenue = transformedTotalRevenueData.reduce((total, item) => total + item.revenue, 0);
      const totalOrder = transformedTotalOrders.reduce((total, item) => total + item.revenue, 0);

      setTotalRevenueEcommerce(totalRevenue);
      setTotalOrdersEcommerce(totalOrder);
      setTotalRevenueData(transformedTotalRevenueData);
      setTotalOrdersData(transformedTotalOrders);
    } catch (error) {
      console.error("Failed to fetch revenue data:", error);
      setError("Failed to fetch revenue data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setGroupBy(e.target.value);
  };

  // Debounce for API calls
  useEffect(() => {
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      fetchData();
    }, 1000);

    return () => clearTimeout(debounceTimer); // Cleanup
  }, [startDate, endDate, groupBy]);

  if (loading) return <Loader />;
  if (error) return <div className="text-rose-500">{error}</div>;

  return (
    <>
      <div className="space-y-4">
        <MainProfileInfo
          totalRevenueEcommerce={totalRevenueEcommerce}
          totalOrdersEcommerce={totalOrdersEcommerce}
        />
        <div className="grid grid-cols-3 gap-6 p-4 card no-hover flex-col mb-5 md:mb-[26px] md:!p-[26px] lg:!py-5 lg:flex-row
                 lg:items-center lg:gap-4">
          <div>
            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
              Ngày bắt đầu
            </label>
            <input
              type="date"
              id="startDate"
              className="mt-1 block w-full text-black rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
              Ngày kết thúc
            </label>
            <input
              type="date"
              id="endDate"
              className="mt-1 block w-full text-black rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div>
            <p htmlFor="groupBy" className="block text-sm font-medium text-gray-700">
              Nhóm theo
            </p>
            <div>
            <select
              id="groupBy"
              className="mt-1 block w-full text-black rounded-lg border border-gray-300 px-3 py-2 text-gray-500 sm:text-sm"
              value={groupBy}
              onChange={handleChange}
            >
              <option value="day">Ngày</option>
              <option value="month">Tháng</option>
              <option value="year">Năm</option>
            </select>

           </div>

          </div>
        </div>

        <div
          className={`flex ${
            groupBy === "day" ? "flex-col" : "flex-row"
          } justify-between gap-3 mt-4`}
        >
          <SalesStats data={dataTotalOrders} title="Đơn hàng" />
          <SalesStats data={dataTotalRevenue} title="Doanh thu" color="gray" />
        </div>
      </div>
    </>
  );
};

export default SalesAnalytics;
