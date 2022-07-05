const getDayText = (day) =>
  ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"][
    day
  ];
window.addEventListener("load", function () {
  const date = new Date();
  const tatianaBirthdate = new Date("07/05/1999");
  console.log(tatianaBirthdate);
  const actualYear = date.getFullYear();

  let text = document.getElementById("letter-body-text").innerHTML;
  text = text.replace("$day", getDayText(date.getDay()));
  text = text.replace("$year", actualYear.toString());
  text = text.replace("$age", `${actualYear - tatianaBirthdate.getFullYear()}`);
  document.getElementById("letter-body-text").innerHTML = text;
});
