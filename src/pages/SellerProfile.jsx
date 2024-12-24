// components
import PageHeader from "@layout/PageHeader";
import CalendarSelector from "@components/CalendarSelector";
import SellerProfilePreview from "@widgets/SellerProfilePreview";
import SalesProfitByCategory from "@widgets/SalesProfitByCategory";
import PeriodSalesRevenue from "@widgets/PeriodSalesRevenue";
import SellerProfileInfobox from "@components/SellerProfileInfobox";

// hooks
import { useParams } from "react-router-dom";
import Loader from "@components/Loader";
import { useEffect, useState } from "react";
import { getRevenueByShopId } from "../api/statistic";
import { statisticCategoryForShop } from "../api/categorie";

const Boxes = ({ wrapperClass, dataTotalRevenue, dataTotalOrders }) => {
  return (
    <div className={`grid w-full grid-cols-2 gap-5`}>
      <SellerProfileInfobox value={dataTotalRevenue} label="Tổng lợi nhuận" />
      <SellerProfileInfobox
        icon="barcode"
        color="green"
        value={dataTotalOrders}
        label="Tổng đơn hàng"
        withCurrency={false}
      />
    </div>
  );
};

const SellerProfile = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataTotalRevenue, setTotalRevenueData] = useState([]);
  const [dataTotalOrders, setTotalOrdersData] = useState([]);
  const [revenueData, setRevenueData] = useState([]);
  const [statisticCategory, setStatisticCategory] = useState([]);

  const [selectedDates, setSelectedDates] = useState({
    startDate: "2023-01-01",
    endDate: "2024-12-31",
  });

  const fetchData = async (startDate, endDate) => {
    try {
      setLoading(true);
      const revenueData = await getRevenueByShopId({
        id,
        startDate,
        endDate,
        groupBy: "month",
      });

      const statisticCategory = await statisticCategoryForShop(id);

      setStatisticCategory(statisticCategory);
      setRevenueData(revenueData.breakdown);
      setTotalRevenueData(revenueData.totalRevenue);
      setTotalOrdersData(revenueData.totalOrders);
    } catch (error) {
      setError("Failed to fetch revenue data.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(selectedDates.startDate, selectedDates.endDate);
  }, [selectedDates]);

  const handleDateChange = ({ startDate, endDate }) => {
    setSelectedDates({ startDate, endDate });
  };

  if (loading) return <Loader />;
  if (error) return <div>{error}</div>;

  return (
    <>
      <PageHeader title="Chi tiết người bán" />
      <div className="flex flex-col gap-4 mb-5 md:mb-[26px] md:gap-5 lg:flex-row lg:justify-between">
        <CalendarSelector
          wrapperClass="md:max-w-[275px]"
          id="sellerPeriodSelector"
          onDateChange={handleDateChange}
        />
      </div>
      <div className="widgets-grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-6">
        <div className="widgets-grid grid-cols-1 md:col-span-3 lg:grid-cols-2 2xl:col-span-6">
          <PeriodSalesRevenue revenueData={revenueData} />
          <div className="widgets-grid grid-cols-1">
            <Boxes
              dataTotalRevenue={dataTotalRevenue}
              dataTotalOrders={dataTotalOrders}
            />
            <SalesProfitByCategory statisticCategory={statisticCategory} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerProfile;
