Project: Weather App

Description:
This project is a simple, responsive web application that allows users to retrieve the current weather conditions for a specified city. It uses the OpenWeatherMap API to fetch real-time data, including temperature, weather description, and a weather icon.

Features:
-   User-friendly interface to enter a city name.
-   Real-time weather data display (City, Temperature in Celsius, Description, Icon).
-   Responsive design that works on both desktop and mobile devices.
-   Robust error handling for invalid city names, invalid API keys, or network issues.

---

**How to Run This Project:**

**IMPORTANT: This project requires a free API key from OpenWeatherMap to function.**

1.  **Download and Unzip:** Download the project .zip file and unzip it into a folder.

2.  **Get Your API Key:**
    * Sign up for a free account at https://openweathermap.org/
    * Navigate to your user profile and click on the "My API keys" tab.
    * Copy the default API key provided (or generate a new one).
    * **Note:** It may take 10-60 minutes for a new API key to become active.

3.  **Add Your API Key to the Code:**
    * Open the `script.js` file in a text editor.
    * Find the line (around line 17) that says:
        `const apiKey = 'YOUR_API_KEY_HERE';`
    * Replace `'YOUR_API_KEY_HERE'` with the actual API key you copied.

4.  **Run the App:**
    * Simply open the `index.html` file in your web browser (e.g., Chrome, Firefox, Safari).
    * Enter a city name and click "Get Weather".# Weather-App
