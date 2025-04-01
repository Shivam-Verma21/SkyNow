# SkyNow - Weather at a Glance

SkyNow is a modern weather application built with React, TypeScript, and Vite. It provides real-time weather updates, 5-day forecasts, and detailed weather information for any location. The app also supports theme toggling, location-based weather, and search history.

## Features

- **Current Weather**: Displays real-time weather data for the user's location or searched city.
- **5-Day Forecast**: Provides a detailed 5-day weather forecast.
- **Hourly Temperature**: Visualizes hourly temperature and "feels like" data using charts.
- **Search Cities**: Search for cities and view their weather details.
- **Search History**: Keeps track of recent searches for quick access.
- **Theme Toggle**: Switch between light and dark themes.
- **Location Detection**: Automatically fetches weather data based on the user's geolocation.
- **Error Handling**: Displays user-friendly error messages for location or API issues.

## Tech Stack

- **Frontend**: React, TypeScript, Vite
- **State Management**: React Query
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Charts**: Recharts
- **APIs**: OpenWeatherMap API

## Project Structure

```
.
├── public/                     # Static assets (logos, favicons)
├── src/
│   ├── api/                    # API configuration and services
│   │   ├── config.ts           # API configuration
│   │   ├── types.ts            # Type definitions for API responses
│   │   └── weather.ts          # Weather API service
│   ├── components/             # Reusable UI components
│   │   ├── ui/                 # UI-specific components (buttons, cards, etc.)
│   │   ├── CitySearch.tsx      # City search component
│   │   ├── CurrentWeather.tsx  # Current weather display
│   │   ├── HourlyTemp.tsx      # Hourly temperature chart
│   │   ├── WeatherDetails.tsx  # Weather details (humidity, wind, etc.)
│   │   ├── WeatherForecast.tsx # 5-day weather forecast
│   │   ├── LoadingSkeleton.tsx # Skeleton loader for loading states
│   │   └── Header.tsx          # App header with navigation and theme toggle
│   ├── context/                # Context providers (e.g., theme provider)
│   │   └── theme-provider.tsx  # Theme context and provider
│   ├── hooks/                  # Custom React hooks
│   │   ├── use-geolocation.ts  # Hook for geolocation
│   │   ├── use-localStorage.ts # Hook for localStorage management
│   │   ├── use-weather.ts      # Hooks for weather-related queries
│   │   └── use-searchHistory.ts# Hook for managing search history
│   ├── pages/                  # Application pages
│   │   ├── WeatherDashboard.tsx # Dashboard for user's location weather
│   │   └── CityPage.tsx        # Page for displaying weather of a specific city
│   ├── lib/                    # Utility functions
│   │   └── utils.ts            # Utility functions (e.g., class name merging)
│   ├── App.tsx                 # Main application component
│   ├── main.tsx                # Application entry point
│   └── index.css               # Global styles
├── .env                        # Environment variables
├── package.json                # Project dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration
└── README.md                   # Project documentation
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Shivam-Verma21/SkyNow.git
   cd SkyNow
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:

   ```env
   VITE_OPENWEATHER_API_KEY=your_api_key_here
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the app in your browser at `http://localhost:5173`.

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run preview`: Preview the production build.
- `npm run lint`: Run ESLint to check for code quality issues.

## API Configuration

The app uses the OpenWeatherMap API for fetching weather data. The API configuration is located in [`src/api/config.ts`](src/api/config.ts).

## Acknowledgments

- [OpenWeatherMap API](https://openweathermap.org/api)
- [Lucide React](https://lucide.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Query](https://tanstack.com/query)
- [Recharts](https://recharts.org/)