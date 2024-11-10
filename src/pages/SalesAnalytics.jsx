import { useEffect, useState } from "react";
import PageHeader from "@layout/PageHeader";
import MainProfileInfo from "@widgets/MainProfileInfo";
import SalesStats from "@widgets/SalesStats";
import TotalReport from "@widgets/TotalReport";
import TotalBalance from "@components/Banners/TotalBalance";
import { useWindowSize } from "react-use";
import { getProfitForAdmin } from "../api/statistic";
import Loading from "@components/Loading";

const SalesAnalytics = () => {
  const { width } = useWindowSize();
  const [totalRevenueEcommerce, setTotalRevenueEcommerce] = useState(null);
  const [totalOrdersEcommerce, setTotalOrdersEcommerce] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;

  return (
    <>
      <PageHeader title="Sales Analytics" />
      <div className="space-y-4">
        <MainProfileInfo totalRevenueEcommerce={totalRevenueEcommerce} />
        <div className="flex justify-between gap-3">
          <SalesStats />
          <SalesStats />
        </div>
      </div>
    </>
  );
};

export default SalesAnalytics;
