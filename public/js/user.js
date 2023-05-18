const reviewBtn = document.querySelector('[id="lookupReviewBtn"]');
const newPostDataEl = document.querySelector('[name="newPostData"]');
const submitBtnE = document.querySelector('[id="submitBtn"]');
const submitBtnEl = document.querySelector('#submitBtn');
const userOldReviewEl= document.querySelector('[class="userOldReview"]');

const postSubmission = async (event) => {
    event.preventDefault();
    const title= document.querySelector('#gname')
    const content= document.querySelector('#greview')

    if (title && content) {
        const response = await fetch('/', {
            method: "POST",
            body: JSON.stringify({
              title: title,
              content: content,  
            }),
            headers: {"content-type": "application/json"},
        });
        console.log(response);
        if (response.ok) {
            alert("Succesfully posted review");
            document.location.replace("/");

        }
        else{
            alert("Could not Post")
        }
    }
};

reviewBtn.addEventListener("submit",postSubmission)