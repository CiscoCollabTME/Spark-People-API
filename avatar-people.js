function codeClick() {
   var appEmailId=document.getElementById('emailId').value; //email address specified by user
   var appAccessToken=''; //access token *******INSERT YOUR ACCESS TOKEN HERE************
   xhttp = new XMLHttpRequest(); // Create an AJAX HTTP request object
   xhttp.onreadystatechange = function() {  // Define a handler, which fires when the request completes
      if (xhttp.readyState == 4) { // If the request state = 4 (completed)...
         if (xhttp.status == 200) { // And the status = 200 (OK), then...
            var userInfo = JSON.parse(xhttp.responseText); // Parse the JSON response into an object
				console.log(userInfo);
				var items = userInfo['items'];
            document.getElementById('userId').value = items[0].id; // Retrieve the id field, and display it
            document.getElementById('avatar').src = items[0].avatar; // Retrieve the avatar field
         } else alert('Error creating room: ' + xhttp.statusText)
      }
   }
   xhttp.open('GET', 'https://api.ciscospark.com/v1/people?email=' + appEmailId, true); // Initialize the HTTP request object for GET PEOPLE
   xhttp.setRequestHeader('Authorization', 'Bearer ' + appAccessToken); // Sending the token to identify the user/app
   xhttp.send(); // Execute the AJAX HTTP request
}
