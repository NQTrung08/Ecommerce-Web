import { useEffect, useState } from "react";
import { getAllReview } from "../api/review"; // Adjust the path based on your folder structure
import PageHeader from "../layout/PageHeader";
import CustomersInfobox from "../components/CustomersInfobox";
import LatestAcceptedReviews from "../widgets/LatestAcceptedReviews";
import ReviewsScore from "../widgets/ReviewsScore";
import Loader from "@components/Loader";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [totalReviews, setTotalReviews] = useState(0);
  const [newPercentage, setNewPercentage] = useState(0);
  const [regularPercentage, setRegularPercentage] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getAllReview();
        const reviewsData = data;

        // Process data
        setReviews(reviewsData);
        const total = reviewsData.length;
        const average =
          reviewsData.reduce((sum, review) => sum + review.rating, 0) / total;
        const newPercent = (25 / total) * 100; // Example for "New"
        const regularPercent = (75 / total) * 100; // Example for "Regular"

        setTotalReviews(total);
        setAverageRating(average.toFixed(1));
        setNewPercentage(newPercent);
        setRegularPercentage(regularPercent);
      } catch (error) {
        console.error("Failed to fetch reviews", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <PageHeader title="Reviews" />
      <div className="flex flex-col flex-1 gap-5 md:gap-[26px]">
        <div className="grid grid-cols-1 gap-y-5 md:gap-y-[26px] xl:grid-cols-6 xl:gap-x-[26px]">
          <div className="widgets-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:col-span-4">
            <ReviewsScore score={averageRating} />
            <CustomersInfobox
              label="Total"
              count={totalReviews}
              color="green"
            />
            <CustomersInfobox
              label="New"
              count={newPercentage.toFixed(0)}
              suffix="%"
              iconClass="user-plus-solid"
            />
            <CustomersInfobox
              label="Regular"
              count={regularPercentage.toFixed(0)}
              suffix="%"
              color="red"
              iconClass="user-group-crown-solid"
            />
          </div>
          {/* <ReviewsRate reviews={reviews} /> */}
        </div>
        
        <LatestAcceptedReviews reviews={reviews} />
      </div>
    </>
  );
};

export default Reviews;
