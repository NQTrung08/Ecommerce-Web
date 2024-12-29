import CalendarSelector from "@components/CalendarSelector";
import SalesProfitByCategory from "@widgets/SalesProfitByCategory";
import PeriodSalesRevenue from "@widgets/PeriodSalesRevenue";
import SellerProfileInfobox from "@components/SellerProfileInfobox";
import Loader from "@components/Loader";
import { useEffect, useState } from "react";
import { getRevenueByShopId } from "../api/statistic";
import { statisticCategoryForShop } from "../api/categorie";
import { getShopById } from "../api/shop"; // Import shop API
import { useParams } from "react-router-dom"; // Đảm bảo bạn đã cài đặt react-router-dom

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
  const [shopData, setShopData] = useState(null);
  const [dataTotalRevenue, setTotalRevenueData] = useState([]);
  const [dataTotalOrders, setTotalOrdersData] = useState([]);
  const [revenueData, setRevenueData] = useState([]);
  const [statisticCategory, setStatisticCategory] = useState([]);

  const [selectedDates, setSelectedDates] = useState({
    startDate: "2023-01-01",
    endDate: "2024-12-31",
  });

  const calculateGroupBy = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffInDays = (end - start) / (1000 * 60 * 60 * 24);

    return diffInDays > 30 ? "month" : "day";
  };

  const fetchData = async (startDate, endDate) => {
    try {
      setLoading(true);

      // Fetch shop data
      const shopResponse = await getShopById(id);
      setShopData(shopResponse);

      // Fetch revenue and statistics data
      const groupBy = calculateGroupBy(startDate, endDate);
      const revenueData = await getRevenueByShopId({
        id,
        startDate,
        endDate,
        groupBy,
      });
      const statisticCategory = await statisticCategoryForShop(id);

      setStatisticCategory(statisticCategory);
      setRevenueData(revenueData.breakdown);
      setTotalRevenueData(revenueData.totalRevenue);
      setTotalOrdersData(revenueData.totalOrders);
    } catch (error) {
      setError("Failed to fetch data.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(selectedDates.startDate, selectedDates.endDate);
  }, [selectedDates]);

  const handleDateChange = ({ startDate, endDate }) => {
    const formatDate = (date) => {
      const d = new Date(date);
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
      const day = String(d.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };
  
    setSelectedDates({
      startDate: formatDate(startDate),
      endDate: formatDate(endDate),
    });
  };
  

  if (loading) return <Loader />;
  if (error) return <div>{error}</div>;

  return (
    <>
        <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200 mb-5">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6">
          <img
            src={shopData.shop.logo}
            alt={`${shopData.shop.shop_name} logo`}
            className="absolute top-6 left-6 w-24 h-24 rounded-full border-4 border-white shadow-lg"
          />
          <div className="ml-32">
            <h1 className="text-3xl font-bold">{shopData.shop.shop_name}</h1>
            <p className="mt-1 text-sm italic">{shopData.shop.description}</p>
            <p className="mt-2 text-sm">
              <span className="font-medium">Trạng thái: </span>
              <span
                className={`px-2 py-1 rounded-full ${
                  shopData.shop.status === "active"
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                }`}
              >
                {shopData.shop.status === "active" ? "Hoạt động" : "Ngừng hoạt động"}
              </span>
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Địa chỉ */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex justify-center items-center">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600 uppercase">Địa chỉ</h3>
              <p className="text-base text-gray-800">{shopData.shop.address}</p>
            </div>
          </div>

          {/* Số điện thoại */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex justify-center items-center">
              <i className="fas fa-phone-alt"></i>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600 uppercase">Số điện thoại</h3>
              <p className="text-base text-gray-800">{shopData.shop.phone_number}</p>
            </div>
          </div>

          {/* Số sản phẩm */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-100 text-yellow-600 rounded-full flex justify-center items-center">
              <i className="fas fa-box"></i>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600 uppercase">Số sản phẩm</h3>
              <p className="text-base text-gray-800">{shopData.productsCount}</p>
            </div>
          </div>

          {/* Số đánh giá */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex justify-center items-center">
              <i className="fas fa-star"></i>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600 uppercase">Số đánh giá</h3>
              <p className="text-base text-gray-800">{shopData.reviewsCount}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 mb-5 md:mb-[26px] md:gap-5 lg:flex-row lg:justify-between">
        <CalendarSelector
          wrapperClass="md:max-w-[275px]"
          id="sellerPeriodSelector"
          onDateChange={handleDateChange}
          selectedDates={selectedDates}
        />
      </div>
      <div className="widgets-grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-6 mb-10">
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
