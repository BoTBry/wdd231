const getUrl = window.location.search;
console.log(getUrl);

const convert = new URLSearchParams(window.location.search);
console.log(convert);

console.log(convert.get("FirstName"));
console.log(convert.get("LastName"));
console.log(convert.get("Phone"));
console.log(convert.get("Email"));
console.log(convert.get("organization's name"));
console.log(convert.get("Organizational Title"));
console.log(convert.get("membership level"));
console.log(convert.get("Organization's Description"));

const results = document.querySelector(".submitted");
results.innerHTML = `
<p>Hello ${convert.get("LastName")} ${convert.get("FirstName")}, Your form has been submitted.<br>Please review your information below:</p>
<p>First Name: ${convert.get("FirstName")}</p>
<p>Last Name: ${convert.get("LastName")}</p>
<p>Phone Number: ${convert.get("Phone")}</p>
<p>Email: ${convert.get("Email")}</p>
<p>organization's name: ${convert.get("organization's name")}</p>
<p>Organizational Title: ${convert.get("Organizational Title")}</p>
<p>membership level: ${convert.get("membership level")}</p>
<p>Organization's Description: ${convert.get("Organization's Description")}</p>
`;