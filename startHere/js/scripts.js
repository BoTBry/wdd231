const getUrl = window.location.search;
console.log(getUrl);

const convert = new URLSearchParams(window.location.search);
console.log(convert);

console.log(convert.get("first"));
console.log(convert.get("last"));
console.log(convert.get("phone"));
console.log(convert.get("email"));
console.log(convert.get("ordinance"));
console.log(convert.get("date"));
console.log(convert.get("location"));

const results = document.getElementById("results");
results.innerHTML = `
<p>Hello ${convert.get("last")} ${convert.get("first")}, Your form has been submitted.<br>Please review your information below:</p>
<p>First Name: ${convert.get("first")}</p>
<p>Last Name: ${convert.get("last")}</p>
<p>Phone Number: ${convert.get("phone")}</p>
<p>Email: ${convert.get("email")}</p>
<p>Ordinance: ${convert.get("ordinance")}</p>
<p>Date: ${convert.get("date")}</p>
<p>Location: ${convert.get("location")}</p>
`;