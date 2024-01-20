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

function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimezone.replace("_", "").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector(".cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName} </h2>
            <div class="date">
            ${cityTime.format("MMMM Do YYYY")}
            </div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss")}
       <small>
       ${cityTime.format("A")} 
       </small>
          </div>
      </div>
      <a href="/"> All cities </a>
    
    `;
}

setInterval(updateTime, 1000);

let citieSelectElement = document.querySelector("#city");
citieSelectElement.addEventListener("change", updateCity);
