// components
import TopRetailCard from "@components/TopRetailCard";

// data fetch
import getSellers, { fetchSellers } from "@db/sellers";
import { useEffect, useState } from "react";

const TopRetail = () => {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    const loadSellers = async () => {
      await fetchSellers();
      const fetchedSellers = getSellers();
      setSellers(fetchedSellers);
    };

    loadSellers();
  }, []);

  const data = sellers.slice(0, 4);

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-[26px] lg:grid-cols-4 2xl:col-span-4">
      {data.map((item, index) => (
        <TopRetailCard key={index} data={item} />
      ))}
    </div>
  );
};

export default TopRetail;
