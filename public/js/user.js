const reviewBtn = document.querySelector('#lookupReviewBtn');
const newPostDataEl = document.querySelector('[name="newPostData"]');

const submitBtnEl = document.querySelector('#submitBtn');
const userOldReviewEl= document.querySelector('[class="userOldReview"]');

const postSubmission = async (event) => {
    event.preventDefault();
    const title= document.querySelector('#gname').value.trim();
    const content= document.querySelector('#greview').value.trim();

    if (title && content) {
        const response = await fetch(`/review`, {
            method: "POST",
            body: JSON.stringify({
              title, //title: before?
              content, //content: before?  
            }),
            headers: {"Content-Type": "application/json"},
        });
        console.log(response);
        if (response.ok) {
            alert("Succesfully posted review");
            // document.location.replace("/");

        }
        else{
            alert("Could not Post")
        }
    }
};


submitBtnEl.addEventListener("submit",postSubmission)
