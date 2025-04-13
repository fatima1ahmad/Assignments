let userList = [];

document.getElementById('tableViewBtn').addEventListener('click', function() {
  document.getElementById('table-view').style.display = 'block';
  document.getElementById('card-view').style.display = 'none';
  viewUser();
  
  document.querySelectorAll('#tab2 .btn').forEach(btn => {
    btn.classList.remove('active');
  });
  this.classList.add('active');
});

document.getElementById('cardViewBtn').addEventListener('click', function() {
  document.getElementById('table-view').style.display = 'none';
  document.getElementById('card-view').style.display = 'block';
  viewCards();
  
  document.querySelectorAll('#tab2 .btn').forEach(btn => {
    btn.classList.remove('active');
  });
  this.classList.add('active');
});

function viewUser() {
  const table = document
    .getElementById("table")
    .getElementsByTagName("tbody")[0];
    tableHeader.style.display = "table-header-group";

       table.innerHTML = ""; 
  
    userList.forEach((ele) => {
     const row = document.createElement("tr");

     const fullnameTd = document.createElement("td");
    fullnameTd.textContent = ele.fullname;

     const emailTd = document.createElement("td");
    emailTd.textContent = ele.email;

    const genderTd = document.createElement("td");
      genderTd.textContent = ele.gender;

      const AddressTd = document.createElement("td");
    AddressTd.textContent = ele.Address;

     const phoneNumberTd = document.createElement("td");
    phoneNumberTd.textContent = ele.phoneNumber;

     row.appendChild(fullnameTd);
     row.appendChild(emailTd);
     row.appendChild(genderTd);
     row.appendChild(AddressTd);
     row.appendChild(phoneNumberTd);

    table.appendChild(row);
  });
}

   function viewCards() {
  const cardContainer = document.getElementById("cardContainer");
  cardContainer.innerHTML = ""; 
  
  userList.forEach((user) => {
    const col = document.createElement("div");
    col.className = "col";
    
     const card = document.createElement("div");
    card.className = "uscard";
    
     const avatar = document.createElement("div");
    avatar.className = "icons";
    avatar.innerHTML = `<i class="bi bi-person-circle"></i>`;
    
     const info = document.createElement("div");
    info.className = "user-info";
    
      const name = document.createElement("div");
    name.className = "user-name";
    name.textContent = user.fullname;
    
      const email = document.createElement("div");
    email.className = "user-detail";
    email.innerHTML = `<strong>Email:</strong> ${user.email}`;
    
      const gender = document.createElement("div");
    gender.className = "user-detail";
    gender.innerHTML = `<strong>Gender:</strong> ${user.gender}`;
    
      const address = document.createElement("div");
    address.className = "user-detail";
    address.innerHTML = `<strong>Address:</strong> ${user.Address}`;
    
      const phone = document.createElement("div");
    phone.className = "user-detail";
    phone.innerHTML = `<strong>Phone:</strong> ${user.phoneNumber}`;
    
    info.appendChild(name);
    info.appendChild(email);
    info.appendChild(gender);
    info.appendChild(address);
    info.appendChild(phone);
    
    card.appendChild(avatar);
    card.appendChild(info);
    col.appendChild(card);
    cardContainer.appendChild(col);
  });
}

function validateForm() {
  const fullname = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const phoneNumber = document.getElementById("phoneNumber").value;
  const gender = document.getElementById("gender").value;
  const Address = document.getElementById("Address").value.trim();

  const fullError = document.getElementById("fullError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  const genderError = document.getElementById("genderError");
  const AddressError = document.getElementById("AddressError");

  fullError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
  genderError.textContent = "";
  AddressError.textContent = "";

  let isValid = true;

  if (fullname.length < 1 ||!/^[a-zA-Z ]+$/.test(fullname) ) {
    fullError.textContent = "FullName must contain only alphabetic characters..";
    isValid = false;
  }
  if (!email.includes("@") || !email.includes(".")|| email.length<1) {
    emailError.textContent = "Email must include '@' and '.'";
    isValid = false;
  }
  if (!gender) {
    genderError.textContent = "Please select a gender.";
    isValid = false;
  }
  if (Address.length < 1) {
    AddressError.textContent = "Address must not be empty";
    isValid = false;
  }
  if (!/^\d{10,}$/.test(phoneNumber)|| phoneNumber.length <1) {
    phoneError.textContent = "Phone number must be at least 10 digits long.";
    isValid = false;
  }
  if (isValid) {
    addUser();
  }

  return false;
}

function addUser() {
  const fullname = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const gender = document.getElementById("gender").value;
  const Address = document.getElementById("Address").value;
  const phoneNumber = document.getElementById("phoneNumber").value;

  const user = {
    fullname,
    email,
    gender,
    Address,
    phoneNumber
  };

  userList.push(user);
  alert("User added successfully!");

  document.getElementById("fullname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("Address").value = "";
  document.getElementById("phoneNumber").value = "";
}