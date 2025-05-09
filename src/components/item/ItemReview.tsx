import React from 'react';

interface Review {
  user: string;
  content: string;
}

interface ItemReviewProps {
  reviews: Review[];
}

const ItemReview: React.FC<ItemReviewProps> = ({ reviews }) => {
  return (
    <section className="mt-6 rounded-lg bg-white p-6 shadow">
      <h3 className="mb-2 text-lg font-bold">리뷰</h3>
      {reviews.length === 0 ? (
        <p className="text-gray-500">아직 리뷰가 없습니다.</p>
      ) : (
        <ul className="space-y-4">
          {reviews.map((review, idx) => (
            <li key={idx} className="border-b pb-2">
              <div className="font-semibold">{review.user}</div>
              <div className="text-gray-700">{review.content}</div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default ItemReview;
