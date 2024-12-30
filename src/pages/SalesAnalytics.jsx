import { useEffect, useState } from "react";
import PageHeader from "@layout/PageHeader";
import MainProfileInfo from "@widgets/MainProfileInfo";
import SalesStats from "@widgets/SalesStats";
import { getProfitForAdmin, getShopRevenue } from "../api/statistic";
import Loader from "@components/Loader";
import moment from "moment";
import { DatePicker } from "antd";

const SalesAnalytics = () => {
  const [totalRevenueEcommerce, setTotalRevenueEcommerce] = useState(null);
  const [totalOrdersEcommerce, setTotalOrdersEcommerce] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataTotalRevenue, setTotalRevenueData] = useState([]);
  const [dataTotalOrders, setTotalOrdersData] = useState([]);

  // State for date range
  const [startDate, setStartDate] = useState(moment().startOf("year"));
  const [endDate, setEndDate] = useState(moment().endOf("year"));
  const [groupBy, setGroupBy] = useState("month");

  let debounceTimer = null;

  // Determine `groupBy` based on the date range
  const calculateGroupBy = (startDate, endDate) => {
    const start = moment(startDate, "DD-MM-YYYY");
    const end = moment(endDate, "DD-MM-YYYY");
    const diffInDays = end.diff(start, "days");

    if (diffInDays <= 30) return "day";
    if (diffInDays <= 365) return "month";
    return "year";
  };

  // Update groupBy whenever dates change
  useEffect(() => {
    setGroupBy(calculateGroupBy(startDate, endDate));
  }, [startDate, endDate]);

  // Fetch benefit data (general stats)
  useEffect(() => {
    const fetchBenefitData = async () => {
      try {
        const data = await getProfitForAdmin();
        setTotalRevenueEcommerce(data.totalRevenueEcommerce);
        setTotalOrdersEcommerce(data.totalOrdersEcommerce);
      } catch (err) {
        setError("Failed to load benefit data.");
      } finally {
        setLoading(false);
      }
    };

    fetchBenefitData();
  }, []);

  // Fetch revenue and order data for the selected date range
  const fetchData = async () => {
    try {
      setLoading(true);
      const revenueData = await getShopRevenue({ startDate, endDate, groupBy });

      const transformedTotalRevenueData = revenueData.map((item) => ({
        name:
          groupBy === "month"
            ? `${item.month}`
            : groupBy === "year"
              ? `${item.year}`
              : groupBy === "day"
                ? `${item.day}`
                : item.date,
        revenue: item.totalRevenue,
      }));

      const transformedTotalOrders = revenueData.map((item) => ({
        name:
          groupBy === "month"
            ? `${item.month}`
            : groupBy === "year"
              ? `${item.year}`
              : groupBy === "day"
                ? `${item.day}`
                : item.date,
        revenue: item.totalOrders,
      }));


      console.log("groupBy", groupBy)
      setTotalRevenueData(transformedTotalRevenueData);
      setTotalOrdersData(transformedTotalOrders);
    } catch (error) {
      console.error("Failed to fetch revenue data:", error);
      setError("Failed to fetch revenue data. Please try again.");
    } finally {
      setLoading(false);
    }
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
            <DatePicker
              value={startDate} // Truyền đối tượng moment vào đây
              onChange={(date) => setStartDate(date)} // Cập nhật lại startDate
              format={'DD/MM/YYYY'}
              className="mt-1 block w-full text-black rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
              Ngày kết thúc
            </label>
            <DatePicker
              value={endDate} // Truyền đối tượng moment vào đây
              onChange={(date) => setEndDate(date)} // Cập nhật lại endDate
              format={'DD/MM/YYYY'}
              className="mt-1 block w-full text-black rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <p htmlFor="groupBy" className="block text-sm font-medium text-gray-700">
              Nhóm theo
            </p>
            <input
              type="text"
              id="groupBy"
              className="mt-1 block w-full text-black rounded-lg border border-gray-300 px-3 py-2 bg-slate-300 text-gray-500 sm:text-sm cursor-not-allowed pointer-events-none"
              value={groupBy === "day" ? "Ngày" : groupBy === "month" ? "Tháng" : "Năm"}
              readOnly
            />
          </div>
        </div>

        <div
          className={`flex ${groupBy === "day" ? "flex-col" : "flex-row"
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
