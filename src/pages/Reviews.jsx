import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Đảm bảo bạn đã cài đặt react-router-dom
import { getAllReview, getCountReviews } from "../api/review"; 
import PageHeader from "../layout/PageHeader";
import LatestAcceptedReviews from "../widgets/LatestAcceptedReviews";
import Loader from "@components/Loader";

const Reviews = () => {
  const { slug } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0); 

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const type = slug ? "shop" : "admin";
        const id = slug || ""; 
        const reviewsData = await getAllReview();
        setReviews(reviewsData);

        const countData = await getCountReviews(type, id);
        setTotalCount(countData.total); 
      } catch (error) {
        console.error("Failed to fetch reviews", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [slug]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <PageHeader title="Đánh giá" />
      <div className="flex flex-col flex-1 gap-5 md:gap-[26px]">
        <div className="text-xl font-semibold">
          Tổng số đánh giá: {totalCount}
        </div>
        <LatestAcceptedReviews reviews={reviews} />
      </div>
    </>
  );
};

export default Reviews;
