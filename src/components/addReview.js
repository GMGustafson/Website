import "../css/ReviewActions.css"; 
import React, { useState } from "react";
import ReviewForm from "./Review-Form";

const AddReview = (props) => {

  return (
    <div id="add-dialog" className="w3-modal">

        <ReviewForm />

    </div>
  );
};

export default AddReview;
