  // Variables
  const firstName = "Stefany";
  const lastName = "Sanchez";
  const age = 24;

  // Concatenated string variable
  const fullIntro = "Name: " + firstName + " " + lastName + ", Age: " + age;
//read to console log

  console.log(`First Name: ${firstName} Last Name: ${lastName} Age: ${age}`);

  // If conditional statement
  let ageMessage = "";
  if (age >= 18) {
    ageMessage = "You are an adult.";
  } else {
    ageMessage = "You are a minor.";
  }

  // Switch statement
  let day = new Date().getDay();
  let dayName = "";
  switch (day) {
    case 0:
      dayName = "Sunday";
      break;
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
    default:
      dayName = "Unknown day";
  }

  // String method: toUpperCase
  const loudName = firstName.toUpperCase();

  // Number method: toFixed
  const preciseAge = age.toFixed(2);

  // Output to the page
  document.getElementById("output").innerHTML = `
    <p>${fullIntro}</p>
    <p>${ageMessage}</p>
    <p>Today is: ${dayName}</p>
    <p>Your name in uppercase: ${loudName}</p>
    <p>Your age with two decimals: ${preciseAge}</p>
  `;