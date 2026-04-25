import developers from "../developers";
import tags from "../tags";

// icons
import jsonIcon from "../../assets/apps/icons/json.png";

// images
import jsonCover from "../../assets/apps/images/json/cover.png";
import jsonImage1 from "../../assets/apps/images/json/1.png";
import jsonImage2 from "../../assets/apps/images/json/2.png";
import jsonImage3 from "../../assets/apps/images/json/3.png";
import jsonImage4 from "../../assets/apps/images/json/4.png";

export const json = {
    title: "Json Toolkit",
    slug: "json-toolkit",
    url: "https://json.bilalabdulhadi.com",
    description: `
### Overview
Json Toolkit is a modern, local-first JSON workspace built for developers who need fast and reliable tools for working with JSON data directly in the browser. It combines formatting, validation, visualization, and file handling into a single clean interface without relying on external services.

### Purpose & Value
The goal of Json Toolkit is to eliminate the need for slow, ad-heavy online tools by providing a lightweight and efficient environment for inspecting and transforming JSON. Everything runs locally, ensuring privacy, speed, and full control over your data.

### User Experience & Design
The app follows a developer-focused design inspired by code editors. It features a split-view layout on desktop, a mobile-first responsive structure, and a minimal toolbar for quick actions. The interface is optimized for clarity, speed, and real-world usage.

### Key Features
- Paste, edit, and inspect JSON instantly  
- Format (pretty print) JSON for readability  
- Minify JSON for compact output  
- Validate JSON with instant feedback  
- Switch between tree viewer and raw output  
- Upload and parse .json files  
- Drag and drop support for files and text  
- Copy and download JSON بسهولة  
- Handles primitive values (string, number, boolean, null)  
- Dark mode with persistent settings  
- Fully responsive (mobile + desktop split layout)  

---

### JSON Workspace

Json Toolkit is designed to behave like a lightweight developer tool:

#### Fast Editing
Work directly in a clean editor with instant parsing and feedback. No delays, no unnecessary UI.

#### Dual View Output
Switch between a structured JSON tree viewer and raw formatted output depending on your needs.

#### Flexible Input
Paste JSON, upload files, or drag and drop content directly into the workspace.

---

### Technical Value

This project demonstrates strong frontend engineering practices:

- Component-based React architecture  
- Real-time JSON parsing and state handling  
- Responsive split-layout design  
- Drag & drop and file handling  
- Local storage persistence (theme)  
- Clean developer-focused UI patterns  

---

### Summary
Json Toolkit is a practical browser-based utility for developers who work with JSON regularly. It delivers speed, clarity, and control in a clean interface, making it a reliable alternative to traditional online JSON tools.
`,
    tags: [
        tags.react,
        tags.javascript,

        tags.utility,
        tags.productivity,

        tags.responsive,
        tags.mobileFirst,
        tags.darkMode,

        tags.webApp,

        tags.interactive,
        tags.customUI,

        tags.vercel,
    ],
    icon: jsonIcon,
    cover: jsonCover,
    badge: "React",
    images: [jsonImage1, jsonImage2, jsonImage3, jsonImage4],
    github: "https://github.com/bilalabdulhadii/react-json-toolkit",
    developer: developers.bilalabdulhadii,
};
