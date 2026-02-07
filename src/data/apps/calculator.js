import developers from "../developers";
import tags from "../tags";

// icons
import calculatorIcon from "../../assets/apps/icons/calculator.png";

// images
import calculatorCover from "../../assets/apps/images/calculator/cover.png";
import calculatorImage1 from "../../assets/apps/images/calculator/1.png";
import calculatorImage2 from "../../assets/apps/images/calculator/2.png";
import calculatorImage3 from "../../assets/apps/images/calculator/3.png";

export const calculator = {
    title: "Basic Calculator",
    slug: "basic-calculator",
    url: "https://calculator.bilalabdulhadi.com",
    description: `
### Overview
Basic Calculator is a modern and responsive web application that provides a simple and efficient way to perform everyday mathematical calculations directly in the browser. It offers a clean digital calculator interface designed for fast and accurate results without needing any external software.

### Purpose & Value
The main goal of Basic Calculator is to deliver an easy-to-use tool for quick arithmetic operations. Whether for students solving homework, developers doing fast computations, or users handling daily calculations, the app provides an instant and reliable solution.

### User Experience & Design
Basic Calculator focuses on simplicity, clarity, and usability. The interface is designed with a modern layout, smooth button interactions, and responsive behavior across all devices. Its minimal design ensures users can calculate comfortably without distractions.

### Key Features
- Perform essential arithmetic operations easily
- Clean and intuitive calculator UI
- Responsive design for desktop and mobile screens
- Instant input handling with smooth interactions
- Accurate real-time calculation results
- Lightweight and fast browser-based experience

---

### Calculator Capabilities

Basic Calculator supports all standard operations needed for everyday math:

#### Core Arithmetic
- Addition  
- Subtraction  
- Multiplication  
- Division  

#### User-Friendly Controls
- Clear and reset functionality  
- Interactive button layout  
- Simple number input flow  

---

### Practical Use Cases

This calculator app can be useful in many situations, such as:

- Quick calculations for students and teachers  
- Daily finance and shopping math  
- Developer productivity during coding sessions  
- Lightweight alternative to device calculators  
- Practice project for learning React fundamentals  

---

### Open Source & Learning Value
Basic Calculator is an open-source project that demonstrates key front-end development skills such as component-based design, state management in React, and responsive UI building. It serves as both a functional utility and a great learning showcase for modern JavaScript applications.

### Summary
Basic Calculator is a lightweight and elegant arithmetic tool built with modern web technologies. With its clean interface, responsive design, and practical functionality, it provides a fast and reliable way to handle everyday calculations directly from the browser.
`,
    tags: [
        tags.react,
        tags.mui,
        tags.javascript,
        tags.bootstrap,
        tags.responsive,
        tags.mobileFirst,
        tags.webApp,
    ],
    icon: calculatorIcon,
    cover: calculatorCover,
    badge: "React",
    images: [calculatorImage1, calculatorImage2, calculatorImage3],
    github: "https://github.com/bilalabdulhadii/react-calculator",
    developer: developers.bilalabdulhadii,
};
