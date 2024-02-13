function isLoggedIn() {
    // const [loggedIn, setLoggedIn] = React.useState(); 

    fetch('/check_login')
    .then(response => {
        // If the response is successful (HTTP status 200)
        if (response.ok) {
            // Parse the JSON response
            
            return true

        } else {
            // If there's an error in the fetch, log an error and set loggedIn to false
            return false
        }
    })

}

export default isLoggedIn;
