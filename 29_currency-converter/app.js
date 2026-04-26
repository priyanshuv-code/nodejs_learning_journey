import https from "https";
import readline from "readline";
import chalk from "chalk"; 

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const apiKey = "3d8fd6fce9dda304b840120d";
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

function convertCurrency(amount, rate) {
  return (amount * rate).toFixed(2);
}

https.get(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data += chunk;
  });

  response.on("end", () => {
    const exchangeRates = JSON.parse(data);
    const rates = exchangeRates.conversion_rates;

    rl.question("Enter the amount in USD: ", (amount) => {
      rl.question(
        "Enter the target currency (e.g., INR, EUR, NPR): ",
        (currency) => {

          const rate = rates[currency.toUpperCase()];

          if (rate) {
            const converted = convertCurrency(amount, rate);
            console.log(
              chalk.green(
                `${amount} USD is approximately ${converted} ${currency.toUpperCase()}`
              )
            );
          } else {
            console.log(chalk.red("Invalid Currency Code"));
          }

          rl.close();
        }
      );
    });
  });
});