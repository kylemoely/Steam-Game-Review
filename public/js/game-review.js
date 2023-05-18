const postReviewButtons = document.querySelectorAll('.post-review-btn');

const reviewSubmission = async (event) => {
  event.preventDefault();
  
  const contentValue = document.getElementById('review-text').value;
  const usernameValue = document.getElementById('username-text').value;
  console.log(usernameValue);
  console.log(contentValue);

  const reviewValue = await fetch('/reviews/:title', {
    method: "POST",
    body: JSON.stringify({
      content: contentValue,
      username: usernameValue
    }),
    headers: { 'Content-Type': 'application/json' },
  })
  if(reviewValue.ok) {
      alert("Your review has been posted!");
  } else {
      alert('Review failed to post');
  }
};

// Attach event listener to each post-review button
postReviewButtons.forEach((button) => {
  button.addEventListener('click', reviewSubmission);
});