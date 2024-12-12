import "../css/Reviews.css";
import React, { useState } from "react";
import EditReview from "./EditReview";
import DeleteReview from "./DeleteReview";

const Review = (props) => {
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [review, setReview] = useState(props);
  const [showReview, setShowReview] = useState(true);

  const openEditDialog = () => {
    setShowEditDialog(true);
  };

  const closeEditDialog = () => {
    setShowEditDialog(false);
  };

  const openDeleteDialog = () => {
    setShowDeleteDialog(true);
  };

  const closeDeleteDialog = () => {
    setShowDeleteDialog(false);
  };

  const hideReview = () => {
    setShowReview(false);
  };

  const editReview = (newReview) => {
    setReview(newReview);
  };

  return (
    <>
      {showReview && (
        <div ClassName = "company" id="company">
          {showDeleteDialog && (
            <DeleteReview
              closeDialog={closeDeleteDialog}
              hideReview={hideReview}
              companyName={review.companyName}
              _id={review._id}
            />
          )}

          {showEditDialog && (
            <EditReview
              closeDialog={closeEditDialog}
              updateReview={editReview}
              _id={review._id}
              companyName={review.companyName}
              review={review.review}
              reviewersName={review.reviewersName}
              date={review.date}
              image={review.img}
            />
          )}

          <section className="reviews columns">
           

            <section className="info">
              <header className="columns">
                <h3>{review.companyName}</h3>
                <section id="change-buttons">
                  <a href="#" onClick={openEditDialog}>
                    &#9998;
                  </a>
                  <a href="#" onClick={openDeleteDialog}>
                    &#x2715;
                  </a>
                </section>
              </header>
              <p>"{review.review}"</p>
              <p>
                Reviewed By: {review.reviewersName} on {review.date.substring(0,review.date.indexOf("T"))} 
              </p>

              <section >
                <img id="images"
                  src={`http://localhost:3003/${review.img}`}
                  alt={`Image of ${review.companyName}`}
                />
              </section>
            </section>
          </section>
        </div>
      )}
    </>
  );
};

export default Review;
