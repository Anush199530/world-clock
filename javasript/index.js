function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");

  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelescurrentTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML =
    losAngelescurrentTime.format("MMMM Do YYYY");

  losAngelesTimeElement.innerHTML = losAngelescurrentTime.format(
    "h:mm:ss [<small>]A [</small>]"
  );

  let yerevanElement = document.querySelector("#yerevan");

  let yerevanDateElement = yerevanElement.querySelector(".date");
  let yerevanTimeElement = yerevanElement.querySelector(".time");
  let yerevancurrentTime = moment().tz("Asia/Yerevan");
  yerevanDateElement.innerHTML = yerevancurrentTime.format("MMMM Do YYYY");

  yerevanTimeElement.innerHTML = yerevancurrentTime.format(
    "h:mm:ss [<small>]A [</small>]"
  );
}

setInterval(updateTime, 1000);
