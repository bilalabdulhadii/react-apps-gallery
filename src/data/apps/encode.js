import developers from "../developers";
import tags from "../tags";

// icons
import encodeIcon from "../../assets/apps/icons/encode.png";

// images
import encodeCover from "../../assets/apps/images/encode/cover.png";
import encodeImage1 from "../../assets/apps/images/encode/1.png";
import encodeImage2 from "../../assets/apps/images/encode/2.png";
import encodeImage3 from "../../assets/apps/images/encode/3.png";
import encodeImage4 from "../../assets/apps/images/encode/4.png";
import encodeImage5 from "../../assets/apps/images/encode/5.png";
import encodeImage6 from "../../assets/apps/images/encode/6.png";
import encodeImage7 from "../../assets/apps/images/encode/7.png";
import encodeImage8 from "../../assets/apps/images/encode/8.png";
import encodeImage9 from "../../assets/apps/images/encode/9.png";
import encodeImage10 from "../../assets/apps/images/encode/10.png";

const encode = {
    title: "QR & Barcode Toolkit",
    slug: "qr-barcode-toolkit",
    url: "https://encode.bilalabdulhadi.com",
    description: `
### Overview
QR & Barcode Toolkit is a modern and responsive utility application built with React for generating QR codes and one-dimensional barcodes. It provides clean inputs, live previews, and export options, allowing users to create scannable codes quickly and efficiently without leaving the page.

### Purpose & Value
The main goal of QR & Barcode Toolkit is to offer a focused and reliable solution for working with QR codes and barcodes in everyday scenarios. It helps users generate codes for sharing information, products, and data formats while maintaining simplicity, speed, and accuracy.

### User Experience & Design
QR & Barcode Toolkit emphasizes clarity and usability. Each tool has a dedicated page with grouped navigation, ensuring users can easily switch between generators. The interface supports light and dark themes, responsive layouts, and real-time previews for an intuitive experience across desktop and mobile devices.

### Key Features
- Dedicated generators for QR codes and 1D barcodes  
- Live preview updates while editing inputs  
- Customizable foreground and background colors  
- Optional background transparency  
- Export generated codes as PNG files  
- SVG export for QR codes and supported barcode formats  
- Light and dark theme toggle with persistence  
- Fully responsive layout  

---

### Available Tools Collection

QR & Barcode Toolkit includes specialized generators organized by category:

#### QR Code Generator
- Text and URL  
- Wi-Fi credentials  
- Contact information (vCard)  
- Email  
- SMS  
- Phone number  
- Location  
- Event  

#### Barcode Generator
- Code 128  
- Code 39  
- Code 93  
- EAN-13  
- EAN-8  
- UPC-A  
- UPC-E  
- ITF (Interleaved 2 of 5)  
- ITF-14  
- Codabar  
- MSI  
- Pharmacode  

---

### Toolkit Workflow

The application provides a simple and efficient workflow:

#### Selecting a Tool
Users choose a QR or barcode generator from the grouped navigation menu.

#### Customizing Data
Each generator offers dedicated inputs for its format, along with color and style controls.

#### Exporting Results
Generated codes can be downloaded instantly in supported formats for use in digital or printed materials.

---

### Technology & Implementation
QR & Barcode Toolkit is built using modern React architecture and leverages specialized libraries for code generation. The project structure is modular, separating shared components, layout elements, utilities, and tool definitions for maintainability and scalability.

---

### Future Growth & Enhancements
The toolkit is designed with extensibility in mind, allowing future improvements such as batch generation, advanced QR styling, expanded export options, and personalized tool management.

### Summary
QR & Barcode Toolkit is a focused and efficient code generation platform that combines clean design, real-time previews, and flexible export options. Built with modern web technologies, it provides a practical solution for generating and managing QR codes and barcodes in a fast and user-friendly environment.
`,

    tags: [
        tags.react,
        tags.mui,
        tags.javascript,
        tags.bootstrap,
        tags.tools,
        tags.productivity,
        tags.qr,
        tags.barcode,
        tags.utility,
        tags.responsive,
        tags.mobileFirst,
        tags.webApp,
    ],
    icon: encodeIcon,
    cover: encodeCover,
    badge: "React",
    images: [
        encodeImage1,
        encodeImage2,
        encodeImage3,
        encodeImage4,
        encodeImage5,
        encodeImage6,
        encodeImage7,
        encodeImage8,
        encodeImage9,
        encodeImage10,
    ],
    github: "https://github.com/bilalabdulhadii/react-qr-barcode-toolkit",
    developer: developers.bilalabdulhadii,
};

export default encode;
