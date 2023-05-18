


const logout = async () => {

    const response = await fetch("/account/logout", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
        alert("Successfuly logged out");
        document.location.replace('/');
    } else {
      
        alert(response.statusText);
    }
  };
  
  document.querySelector('#logout').addEventListener('click', logout);

  