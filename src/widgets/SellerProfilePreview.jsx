// components
import Spring from "@components/Spring";

// hooks
import { useEffect, useState } from "react";

// data fetch
import getSellers, { fetchSellers } from "@db/sellers";

const SellerProfilePreview = ({ sellerIndex = 3 }) => {
  const [seller, setSeller] = useState(null);

  useEffect(() => {
    const loadSellers = async () => {
      await fetchSellers(); 
      const sellers = getSellers(); 
      setSeller(sellers[sellerIndex]); 
    };
    loadSellers();
  }, [sellerIndex]);

  if (!seller) return null; 

  console.log("seller", seller);
  return (
    <Spring className="card !p-5 flex flex-col gap-5 md:flex-row md:items-center md:gap-10 md:col-span-2">
      <div className="img-wrapper h-[137px] flex justify-center items-center md:w-[168px] shrink-0">
        <img className="max-w-[120px]" src={seller.logo} alt={seller.name} />
      </div>
      <div className="flex flex-col items-start">
        <h3 className="mb-3 truncate">{seller.name}</h3>
        <a
          className="subheading-2"
          href={seller.website || "https://www.website.com"}
          target="_blank"
          rel="noopener noreferrer"
        >
          {seller.website || "www.website.com"}
        </a>
        <a className="mt-[14px] mb-2" href={`tel:${seller.phone}`}>
          {seller.phone}
        </a>
        <a href={`mailto:${seller.email}`}>{seller.email}</a>
      </div>
    </Spring>
  );
};

export default SellerProfilePreview;
