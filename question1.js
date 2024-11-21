// Q1: Write a program in which you have to create your own biodata details are: your name, email, city,
// education, occupation, phone number, institute name etc. Using template literals and variable using let
// and const and final output is shown in document.write() same as in below:



const userName = prompt("Enter Your Name")
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const age = +prompt("Enter Your Age");

const occupation = prompt("Enter Your Occupation")
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const email = prompt("Enter Your Email ID");

const phoneNumber = +prompt("Enter Your Phone Number");

const institute = prompt("Enter Your Institute Name")
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const education = prompt("Enter Your Last Education")
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");




const biodataHTML = `
    <h1>Biodata</h1>
    <p><strong>Name:</strong> ${userName}</p>
    <p><strong>Age:</strong> ${age}</p>
    <p><strong>Occupation:</strong> ${occupation}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone Number:</strong> ${phoneNumber}</p>
    <p><strong>Institute Name:</strong> ${institute}</p>
    <p><strong>Education:</strong> ${education}</p>
`;

 document.write(biodataHTML);