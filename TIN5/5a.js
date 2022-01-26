let obj = {
    firstName: "FirstName",
    lastName: "LastName",
    age: 200,
    currentLivingCountry: "Country",
    setName: (string) => obj.firstName = string,
    getName: () => `${obj.firstName} ${obj.lastName}`,
    setCurrentLivingCountry: (string) => obj.currentLivingCountry = string,
    getCurrentLivingCountry: () => `${obj.currentLivingCountry}`
}

function printProps(obj)
{
    let properties = Object.keys(obj);
    for (let prop of properties)
    {
        console.log("NAME " + prop + " = { " + obj[prop] + " } TYPE: " + typeof  obj[prop]);
    }
}
printProps(obj);