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

  // Bug  1: Thêm chọn thời gian cho biểu đồ
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const revenueData = await getShopRevenue({
          startDate: "2024-01-01",
          endDate: "2024-12-31",
          groupBy: "month",
        });

        console.log("revenueData", revenueData);

        const transformedTotalRevenueData = revenueData.map((item) => ({
          name: `Tháng ${item.month}`,
          revenue: item.totalRevenue,
        }));

        const transformedTotalOrders = revenueData.map((item) => ({
          name: `Tháng ${item.month}`,
          revenue: item.totalOrders,
        }));

        setTotalRevenueData(transformedTotalRevenueData);
        setTotalOrdersData(transformedTotalOrders);
      } catch (error) {
        console.error("Failed to fetch revenue data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loader />;
  if (error) return <div>{error}</div>;

  return (
    <>
      <PageHeader title="Phân tích bán hàng" />
      <div className="space-y-4">
        <MainProfileInfo
          totalRevenueEcommerce={totalRevenueEcommerce}
          totalOrdersEcommerce={totalOrdersEcommerce}
        />
        <div className="flex justify-between gap-3">
          <SalesStats data={dataTotalOrders} title="Đơn hàng" />
          <SalesStats data={dataTotalRevenue} title="Doanh thu" color="gray" />
        </div>
      </div>
    </>
  );
};

export default SalesAnalytics;
