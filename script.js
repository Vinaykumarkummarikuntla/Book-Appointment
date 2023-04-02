var form = document.getElementById("addForm");
var UserList = document.getElementById("userDetails");



form.addEventListener("submit", addItem);
UserList.addEventListener("click", removeItem);

// addItem function - adding userDetails front page
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
  const UserDetails = JSON.stringify(details);
  localStorage.setItem("userDetails", UserDetails);

  var li = document.createElement("li");
  li.setAttribute("data-username", userName); // add unique identifier
  li.appendChild(document.createTextNode(userName));
  console.log(li)

  var li_2 = document.createElement("li");
  li_2.setAttribute("data-username", userName); // add unique identifier
  li_2.appendChild(document.createTextNode(gmail));
  console.log(li_2)

  var li_3 = document.createElement("li");
  li_3.setAttribute("data-username", userName); // add unique identifier
  li_3.appendChild(document.createTextNode(phoneNumber));
  console.log(li_3)

  var deleteButton = document.createElement("button");
  deleteButton.className = "btn btn-danger btn-sm float-right delete";
  deleteButton.appendChild(document.createTextNode("Delete"));


  var editButton = document.createElement("button");
  editButton.className = "btn btn-secondary btn-sm float-right Edit";
  editButton.appendChild(document.createTextNode("Edit"));
  li.appendChild(editButton);

  li.appendChild(deleteButton); // append delete button to username li element
  UserList.appendChild(li);
  UserList.appendChild(li_2);
  UserList.appendChild(li_3);
  
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure?")) {
      var li = e.target.parentElement;
      console.log(li)
      var userName = li.getAttribute("data-username"); // get unique identifier
      console.log(userName)
      var liArray = document.querySelectorAll(`li[data-username="${userName}"]`); // get all li elements with matching identifier
      console.log(liArray)
      liArray.forEach(item => {
        UserList.removeChild(item); // remove all matching li elements
      });
    }
  }
}



  
  