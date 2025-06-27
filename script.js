function generateMessage() {
  const name = document.getElementById("nameInput").value.trim();
  const timeOfDay = document.getElementById("timeSelect").value;
  const output = document.getElementById("output");

  if (name === "") {
    output.textContent = "Please enter your name.";
    return;
  }

  let greeting = "";

  switch (timeOfDay) {
    case "morning":
      greeting = "Good Morning";
      break;
    case "afternoon":
      greeting = "Good Afternoon";
      break;
    case "evening":
      greeting = "Good Evening";
      break;
    case "night":
      greeting = "Good Night";
      break;
  }

  output.textContent = `${greeting}, ${name}! Welcome back!`;
}
