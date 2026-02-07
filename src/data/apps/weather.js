import developers from "../developers";
import tags from "../tags";

// icons
import weatherIcon from "../../assets/apps/icons/weather.png";

// images
import weatherCover from "../../assets/apps/images/weather/cover.png";
import weatherImage1 from "../../assets/apps/images/weather/1.png";
import weatherImage2 from "../../assets/apps/images/weather/2.png";
import weatherImage3 from "../../assets/apps/images/weather/3.png";
import weatherImage4 from "../../assets/apps/images/weather/4.png";
import weatherImage5 from "../../assets/apps/images/weather/5.png";
import weatherImage6 from "../../assets/apps/images/weather/6.png";

export const weather = {
    title: "Weather Forecast",
    slug: "weather-forecast",
    url: "https://sky.bilalabdulhadi.com",
    description: `
### Overview
Weather Forecast is a modern and responsive web application that provides real-time weather updates and forecasts in a clean and user-friendly interface. The app allows users to quickly check current conditions and upcoming weather details for any location, making it a practical daily companion.

### Purpose & Value
The main goal of Weather Forecast is to deliver accurate and accessible weather information in a simple way. Whether planning a trip, preparing for the day, or tracking changing conditions, the app helps users stay informed and make better decisions based on weather updates.

### User Experience & Design
Weather Forecast focuses on clarity, smooth interactions, and modern visual presentation. The interface is designed to feel lightweight and intuitive, ensuring users can access weather data instantly. With full responsiveness, the experience works seamlessly across desktops, tablets, and mobile devices.

### Key Features
- Search weather conditions by city or location  
- Display real-time temperature, humidity, and wind details  
- View forecast information for upcoming days  
- Clean and modern UI for fast readability  
- Responsive layout optimized for all devices  
- Smooth user experience with quick updates  

---

### Weather Information Workflow

Weather Forecast provides a simple and effective flow:

#### Location Search
Users can enter any city or location to instantly retrieve updated weather conditions.

#### Current Conditions
The app highlights essential details such as temperature, sky status, humidity, and wind speed.

#### Forecast View
Users can explore upcoming weather predictions, helping them plan ahead with confidence.

---

### Everyday Use Cases

Weather Forecast is useful in many scenarios, including:

- Planning daily outfits and activities  
- Preparing for travel or commuting  
- Tracking weather changes during seasons  
- Staying informed about outdoor conditions  
- Quick access to reliable forecasts anytime  

---

### Open Source & Learning Value
Weather Forecast is an open-source project that demonstrates practical React development skills, including API integration, state management, responsive UI building, and real-world data handling. It serves as both a useful application and a strong learning project for modern web development.

### Summary
Weather Forecast is a lightweight yet powerful weather application built with modern web technologies. With its responsive design, real-time updates, and clean interface, it provides an efficient way to check weather conditions and forecasts anytime, anywhere.
`,
    tags: [
        tags.react,
        tags.mui,
        tags.api,
        tags.axios,
        tags.moment,
        tags.javascript,
        tags.bootstrap,
        tags.i18next,
        tags.responsive,
        tags.mobileFirst,
        tags.webApp,
    ],
    icon: weatherIcon,
    cover: weatherCover,
    badge: "React",
    images: [
        weatherImage1,
        weatherImage2,
        weatherImage3,
        weatherImage4,
        weatherImage5,
        weatherImage6,
    ],
    github: "https://github.com/bilalabdulhadii/react-weather-forecast",
    developer: developers.bilalabdulhadii,
};
