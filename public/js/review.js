const postReviewButtons = document.querySelectorAll('.post-review-btn');

const reviewSubmission = async (event) => {
  event.preventDefault();
  const reviewForm = document.getElementById('review-form')
  const contentValue = document.getElementById('review-text').value;
  const usernameValue = document.getElementById('username-text').value;
  const titleValue = reviewForm.dataset.title;
  const imgURLValue = reviewForm.dataset.imgurl;

  const reviewValue = await fetch(location.href, {
    method: 'POST',
    body: JSON.stringify({
      title: titleValue,
      content: contentValue,
      username: usernameValue,
      imgURL: imgURLValue
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (reviewValue.ok) {
    location.href = location.href;
  } else {
    alert('Review failed to post');
  }
};

postReviewButtons.forEach((button) => {
  button.addEventListener('click', reviewSubmission);
});