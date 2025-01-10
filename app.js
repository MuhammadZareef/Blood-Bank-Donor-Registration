
function checkBloodGroup() {

  let bloodGroup = document.getElementById("bloodGroup").value;

  let result = "";

  if(bloodGroup === "AB+") {
    result = "O-, O+, A-, A+, B-, B+, AB-, AB+";
  } 
  else if(bloodGroup === "AB-") {
    result = "O-, A-, B-, AB-";
  } 
  else if(bloodGroup === "A-") {
    result = "O-, A-";
  } 
  else if(bloodGroup === "A+") {
    result = "O-, O+, A-, A+";
  } 
  else if(bloodGroup === "B-") {
    result = "O-, B-";
  } 
  else if(bloodGroup === "B+") {
    result = "O-, O+, B-, B+";
  } 
  else if(bloodGroup === "O-") {
    result = "O-";
  } 
  else if(bloodGroup === "O+") {
    result = "O-, O+";
  } 
  else {
    result = "Invalid Blood Group";
  }

  document.getElementById("displayDonors").innerHTML = result;

  document.getElementById("compatibleDonors").style.display = "block";

}
