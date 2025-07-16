const fetchDate = async () => {
    const response = await fetch("./json/family_record.JSON");
    const data = await response.json();
    console.log(data.family_member_record[0].name)
}

fetchDate();