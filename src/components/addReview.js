import "../css/ReviewActions.css"; 
import "../css/Form.css"; 
import {useState, useEffect } from "react";

export default function AddReview(props) {
    const [result, setResult] = useState([]);

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "8d41e6db-b514-4fca-9b31-8fc403e2d817");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
      props.closeDialog();
    };

  return (
    <>  
        <div id="add-dialog" className="w3-modal">
          <section className="reviews-form"> 
            <div id="review-frame" class="columns">

                <form id="review-form" class="one" onSubmit={onSubmit}>
                
                  {/* <h3> Review Form </h3> */}
                  <button id="close-button" type="button" className="close-button" onClick={props.closeDialog}>X</button>

                  <label className="name-id">Company Name:</label>
                  <input className = "Company-name" type="text" name="Companies-Name" required/>

          
                  <label className="message-id">Review:</label>
                  <textarea id="message" name="Review" required></textarea>

                  <label className="name-id">Reviewers Name:</label>
                  <input className = "reviewers-name" type="text" name="Reviewers_Name" required/>
        

                  <button id="button" type="submit" >Submit Form</button>

                  <span id="result" >{result}</span>
                </form>
            </div>

          </section>
        </div>
    </>
  );

}
