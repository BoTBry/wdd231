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
<p><strong>Hello!!</strong> ${convert.get("LastName")} ${convert.get("FirstName")}, Your form has been submitted.<br>Please review your information below:</p>
<p><strong>First Name:</strong> ${convert.get("FirstName")}</p>
<p><strong>Last Name:</strong> ${convert.get("LastName")}</p>
<p><strong>Phone Number:</strong> ${convert.get("Phone")}</p>
<p><strong>Email:</strong> ${convert.get("Email")}</p>
<p><strong>organization's name:</strong> ${convert.get("organization's name")}</p>
<p><strong>Organizational Title:</strong> ${convert.get("Organizational Title")}</p>
<p><strong>membership level:</strong> ${convert.get("membership level")}</p>
<p><strong>Organization's Description:</strong> ${convert.get("Organization's Description")}</p>
`;