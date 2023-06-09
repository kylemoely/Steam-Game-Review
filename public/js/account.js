
const userForm = document.querySelector("#userForm");

const formSubmission =  async (event) => {
    event.preventDefault();
    const username = document.querySelector("#userNameInput").value.trim();
    const password = document.querySelector("#passwordInput").value.trim();

    if (username && password) {
        const response = await fetch("/account/" + document.querySelector("#title").innerText.toLowerCase(), {
            method: "POST",
            body: JSON.stringify({
                username: username, 
                password: password,
            }),
            headers: {"content-type": "application/json"},
        });
        
        if (response.ok && response.status !== 401) {

            location.href=`/users/${username}`;

        }
        else{
            alert("Could not login");
        }}
};

userForm.addEventListener("submit",formSubmission);