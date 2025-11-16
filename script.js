/**
 * Weather App JavaScript
 *
 * This script handles fetching and displaying weather data from the
 * OpenWeatherMap API based on user input.
 */

"use strict";

// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  // --- 1. API and DOM Element References ---

  // ====================================================================
  // == IMPORTANT: PASTE YOUR API KEY HERE ==
  // ====================================================================
  // Get your key from: https://home.openweathermap.org/api_keys
  const apiKey = "3288eda48eb5009e3f0042a02fb74742";
  // ====================================================================

  // Get references to all the necessary DOM elements
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherDisplay = document.getElementById("weather-display");
  const errorMessage = document.getElementById("error-message");
  const cityName = document.getElementById("city-name");
  const temperature = document.getElementById("temperature");
  const description = document.getElementById("description");
  const weatherIcon = document.getElementById("weather-icon");

  // --- 2. Event Listeners ---

  // Add click event listener to the "Get Weather" button
  getWeatherBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();

    // Basic input validation
    if (city === "") {
      displayError("Please enter a city name.");
      return;
    }

    // If validation passes, fetch the weather
    getWeather(city);
  });

  // (Optional) Allow pressing 'Enter' in the input field
  cityInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      getWeatherBtn.click();
    }
  });

  // --- 3. Core Functions ---

  /**
   * Fetches weather data from the OpenWeatherMap API using async/await.
   * @param {string} city - The name of the city to get weather for.
   */
  async function getWeather(city) {
    // Construct the API URL
    // 'units=metric' requests the temperature in Celsius
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(apiUrl);

      // Handle HTTP errors (e.g., 404, 401)
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("City not found.");
        } else if (response.status === 401) {
          throw new Error("Invalid API Key. Please check your key.");
        } else {
          throw new Error(`An error occurred: ${response.statusText}`);
        }
      }

      const data = await response.json();

      // If data is fetched successfully, display it
      displayWeather(data);
    } catch (error) {
      // Handle network errors or errors thrown above
      console.error("Error fetching weather:", error);
      displayError(error.message);
    }
  }

  /**
   * Populates the HTML with the retrieved weather data.
   * @param {object} data - The weather data object from the API.
   */
  function displayWeather(data) {
    // Hide error message and show weather display
    errorMessage.style.display = "none";
    weatherDisplay.style.display = "block";

    // Extract the required data
    // (See OWM docs for full 'data' object structure)
    const { name } = data;
    const { temp } = data.main;
    const { description: weatherDesc, icon } = data.weather[0];

    // Get the icon URL from OpenWeatherMap
    // '@2x' makes the icon 200x200px (retina)
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    // Update the DOM elements
    cityName.textContent = name;
    temperature.textContent = `${Math.round(temp)}\u00B0C`; // \u00B0 is the degree symbol
    description.textContent = weatherDesc;
    weatherIcon.src = iconUrl;
    weatherIcon.alt = weatherDesc; // Set alt text for accessibility
  }

  /**
   * Displays an error message to the user.
   * @param {string} message - The error message to display.
   */
  function displayError(message) {
    // Hide weather display and show error message
    weatherDisplay.style.display = "none";
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
  }
});
