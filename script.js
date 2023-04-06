var form = document.getElementById("addForm");
var UserList = document.getElementById("userDetails");

var userDetails = [];

form.addEventListener("submit", addItem);
UserList.addEventListener("click", removeItem);
UserList.addEventListener("click", editItem);

// Add UserDetails
function addItem(e) {
  e.preventDefault();

  var userName = document.getElementById("username").value;
  var gmail = document.getElementById("gmail").value;
  var phoneNumber = document.getElementById("phone").value;

  const details = {
    userName: userName,
    gmail: gmail,
    phoneNumber: phoneNumber,
  };

// user details are stored in the server
  axios
  .post("https://crudcrud.com/api/272a01edd40048778c0ddb27ec67fa5a/userdetails",{details})
  .then((response)=>{
    console.log(response)
  })
  .catch((error)=>{
    console.log(error)
  }
    )
  

  // local storage
  // userDetails = JSON.stringify(details);
  // localStorage.setItem(userName, userDetails);

  // create list tags for showing output details
  var li = document.createElement("li");
  li.setAttribute("data-username", userName); // add unique identifier
  li.appendChild(document.createTextNode(userName));

  var li_2 = document.createElement("li");
  li_2.setAttribute("data-username", userName); // add unique identifier
  li_2.appendChild(document.createTextNode(gmail));

  var li_3 = document.createElement("li");
  li_3.setAttribute("data-username", userName); // add unique identifier
  li_3.appendChild(document.createTextNode(phoneNumber));

  // delete button
  var deleteButton = document.createElement("button");
  deleteButton.className = "btn btn-danger btn-sm float-right delete";
  deleteButton.appendChild(document.createTextNode("Delete"));

  // edit button
  var editButton = document.createElement("button");
  editButton.className = "btn btn-secondary btn-sm float-right Edit";
  editButton.appendChild(document.createTextNode("Edit"));
  li.appendChild(editButton);

  li.appendChild(deleteButton); // append delete button to username li element
  UserList.appendChild(li);
  UserList.appendChild(li_2);
  UserList.appendChild(li_3);
}

// Delete UserDetails
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure?")) {
      var li = e.target.parentElement;

      var userName = li.getAttribute("data-username"); // get unique identifier

      var liArray = document.querySelectorAll(
        `li[data-username="${userName}"]`
      ); // get all li elements with matching identifier

      liArray.forEach((item) => {
        UserList.removeChild(item); // remove all matching li elements
      });
      var key = localStorage.key(userName);
      localStorage.removeItem(key);
      console.log("deleted");
    }
  }
}

//Edit UserDetails
function editItem(e) {
  if (e.target.classList.contains("Edit")) {
    var li = e.target.parentElement;

    var userName = li.getAttribute("data-username"); // get unique identifier

    // Remove the UI elements for the user
    var liArray = document.querySelectorAll(`li[data-username="${userName}"]`);
    liArray.forEach((item) => {
      UserList.removeChild(item);
    });

    // Get the user details from local storage
    var userDetailsJSON = localStorage.getItem(userName);
    var userDetails = JSON.parse(userDetailsJSON);

    // Remove the user details from local storage
    localStorage.removeItem(userName);

    // Populate the form fields with the user details
    document.getElementById("username").value = userDetails.userName;
    document.getElementById("gmail").value = userDetails.gmail;
    document.getElementById("phone").value = userDetails.phoneNumber;
  }
}
