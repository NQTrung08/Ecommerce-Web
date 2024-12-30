import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { getAllReview, getCountReviews } from "../api/review"; 
import PageHeader from "../layout/PageHeader";
import LatestAcceptedReviews from "../widgets/LatestAcceptedReviews";
import Loader from "@components/Loader";

const Reviews = () => {
  const { slug } = useParams();
  const [reviews, setReviews] = useState([]);
  const [countData, setCountData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const type = slug ? "shop" : "admin";
        const id = slug || ""; 

        const reviewsData = await getAllReview();
        setReviews(reviewsData);

        const countResponse = await getCountReviews(type, id);
        setCountData(countResponse);
      } catch (error) {
        console.error("Failed to fetch reviews", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [slug]);

  const totalCount = useMemo(() => reviews.length, [reviews]);

  const avgRating = useMemo(() => {
    const totalRatings = countData.reduce(
      (acc, review) => acc + review.rating * review.count,
      0
    );
    const totalReviews = countData.reduce((acc, review) => acc + review.count, 0);
    return totalReviews > 0 ? (totalRatings / totalReviews).toFixed(2) : "0.00";
  }, [countData]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <PageHeader title="Đánh giá" />
      <div className="flex flex-col flex-1 gap-5 md:gap-[26px]">
        <LatestAcceptedReviews reviews={reviews} totalCount={totalCount} avgRating={avgRating} />
      </div>
    </>
  );
};

export default Reviews;
