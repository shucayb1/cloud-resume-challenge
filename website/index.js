const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://6o3vz2tgvdowsnywrqyicy5dq40mqnfr.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
}
updateCounter();

