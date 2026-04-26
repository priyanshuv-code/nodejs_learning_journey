import readline from 'readline/promises';

// api key for openweathermap
const Api_KEY='ab9d6304892b411ae51d86667e2f1d85'
const Base_URL='https://api.openweathermap.org/data/2.5/weather';

// create interface for user input
const rl=readline.createInterface({
  input:process.stdin,
  output:process.stdout
});

// Function to get weather data
const getwheather=async(city)=>{
  const url=`${Base_URL}?q=${city}&appid=${Api_KEY}&units=metric`;

  try{
    const response =await fetch(url);

    // if city not found
    if(!response.ok){
      throw new Error('City not found. Please check the city name and try again.');
    }

    // convert response to json
    const wheatherData=await response.json();

    // 📊 Display data
    console.log('\n🌤️ Weather Information:');
    console.log(`city:${wheatherData.name}`);
    console.log(`Temperature:${wheatherData.main.temp}°C`);
    console.log(`Description:${wheatherData.weather[0].description}`);
    console.log(`Humidity:${wheatherData.main.humidity}%`);
    console.log(`Wind Speed:${wheatherData.wind.speed} m/s\n`);
  }
  catch (error) {
        console.log('❌ Error:', error.message);
  }
};

// run program
const city = await rl.question('Enter a city name to get its weather information: ');
await getwheather(city);
rl.close();
