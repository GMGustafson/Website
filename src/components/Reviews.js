
import "../css/Reviews.css"; 
import {useState, useEffect } from "react";
import axios from "axios";
import AddReview from "./addReview";
import Review from "./Review";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);

    useEffect(()=>{
        (async() => {
            const response = await axios.get("json/reviews.json");
            console.log(response.data);
            setReviews(response.data);
        })();
    },[]);

    const openAddDialog = () => {
        setShowAddDialog(true);
      };
    
      const closeAddDialog = () => {
        setShowAddDialog(false);
      };

     

    return (
        <div id="background"> 
            <h1 id="page-heading">Reviews</h1>

            <button id="add-review"onClick={openAddDialog}> Submit Review</button>
            
            {showAddDialog ? (
                <AddReview closeDialog={closeAddDialog} /> ):("")}
      
            <div className="reviews-grid" >
                {reviews.map((review) => (
                    <Review 
                        companyName = {review.companyName}
                        _id = {review._id}
                        review = {review.review} 
                        reviewersName = {review.reviewersName}
                        date = {review.date}
                        img = {review.image}
                        /> 
                     ))}
      </div>
    </div>
  );
};
export default Reviews;

