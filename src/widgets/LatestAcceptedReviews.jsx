import Spring from "@components/Spring";
import Select from "@ui/Select";
import Review from "@components/Review";
import Pagination from "@ui/Pagination";
import moment from "moment";
// hooks
import { useState, useEffect } from "react";
import usePagination from "@hooks/usePagination";

// constants
import { REVIEW_SORT_OPTIONS } from "@constants/options";
import { getReviewForShop } from "../api/review";
import { useParams } from "react-router-dom";

const LatestAcceptedReviews = ({ reviews: propReviews, totalCount, avgRating }) => {
  const { slug } = useParams();
  const [reviews, setReviews] = useState(propReviews || []);
  const [sort, setSort] = useState(REVIEW_SORT_OPTIONS[0]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewForShop = await getReviewForShop(slug);
        console.log("reviewForShop", reviewForShop);
        setReviews(reviewForShop);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    if (slug) {
      fetchReviews();
    }
  }, [slug, propReviews]);

  // Sort the reviews based on the selected sort option
  const sortedData = [...reviews].sort((a, b) => {
    if (sort.value === "recent") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else if (sort.value === "oldest") {
      return new Date(a.createdAt) - new Date(b.createdAt);
    } else if (sort.value === "rating-high-to-low") {
      return b.rating - a.rating;
    } else if (sort.value === "rating-low-to-high") {
      return a.rating - b.rating;
    }

    return 0;
  });

  // Apply pagination to the sorted data
  const pagination = usePagination(sortedData, 10);

  return (
    <Spring className="flex flex-1 flex-col gap-[26px]">
      <div className="flex w-full justify-end items-center">
        <div className="text-md font-medium flex gap-1 items-center">
          Đánh giá:
          <span className="text-amber-400 text-lg">
            {avgRating}
          </span>
          ({totalCount})
        </div>
        <div className="flex">
          <Select
            value={sort}
            onChange={setSort}
            options={REVIEW_SORT_OPTIONS}
            variant="minimal"
          />
        </div>
      </div>
      <div className="card !p-0 flex-1">
        <span className="block h-[1px] bg-input-border opacity-60" />
        <div>
          {console.log("pagination.currentItems()", pagination.currentItems())}
          {pagination.currentItems().length !== 0 ? pagination.currentItems().map((review, index) => (
            <Review
              key={`${sort.value}-${review._id}`}
              data={{
                id: review._id,
                product: review.product_id,
                user: review.user_id,
                rating: review.rating,
                comment: review.comment,
                date: review.createdAt,
              }}
              index={index}
            />
          )) : <><p className="text-center py-4 text-rose-500 text-2xl">Chưa có đánh giá</p></>}
        </div>
      </div>
      {pagination.maxPage > 1 && <Pagination pagination={pagination} />}
    </Spring>
  );
};

export default LatestAcceptedReviews;
