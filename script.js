var form = document.getElementById("addForm");
var UserList = document.getElementById("details");

form.addEventListener("submit", addItem);

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
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(userName));

  var li_2 = document.createElement("li");
  li_2.className = "list-group-item";
  li_2.appendChild(document.createTextNode(gmail));

  var li_3 = document.createElement("li");
  li_3.className = "list-group-item";
  li_3.appendChild(document.createTextNode(phoneNumber));

  UserList.appendChild(li);
  UserList.appendChild(li_2);
  UserList.appendChild(li_3);
}
