const clickButton = document.getElementById("clickButton");
const clickCount = document.getElementById("clickCount");
const clickDistribution = document.getElementById("clickDistribution");

let count = 0;

clickButton.addEventListener("click", () => {
    count++;
    clickCount.textContent = count;

    // Send a POST request to the back-end with the click data
    fetch("/click", { method: "POST" })
        .then((response) => response.json())
        .then((data) => {
            // Update the location distribution
            const country = data.country_name;
            const region = data.region;

            const existingEntry = document.getElementById(`${country}-${region}`);
            if (existingEntry) {
                existingEntry.textContent = parseInt(existingEntry.textContent) + 1;
            } else {
                const newEntry = document.createElement("p");
                newEntry.id = `${country}-${region}`;
                newEntry.textContent = "1";
                clickDistribution.appendChild(newEntry);
            }
        })
        .catch((error) => {
            console.error(error);
        });
});
