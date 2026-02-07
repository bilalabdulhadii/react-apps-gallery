import developers from "../developers";
import tags from "../tags";

// icons
import pinIcon from "../../assets/apps/icons/pin.png";

// images
import pinCover from "../../assets/apps/images/pin/cover.png";
import pinImage1 from "../../assets/apps/images/pin/1.png";
import pinImage2 from "../../assets/apps/images/pin/2.png";
import pinImage3 from "../../assets/apps/images/pin/3.png";

export const pin = {
    title: "Pin LinkTree",
    slug: "pin-linktree",
    url: "https://pin.bilalabdulhadi.com",
    description: `
### Overview
Pin Linktree is a modern and responsive web application that allows users to create a simple and stylish personal link hub. It helps individuals organize and share all their important links in one place, making it perfect for social media bios, portfolios, and personal branding.

### Purpose & Value
The main goal of Pin Linktree is to provide an easy way to present multiple online destinations through a single page. Instead of sharing many separate links, users can build one central profile that connects visitors to their websites, social accounts, projects, or any online presence instantly.

### User Experience & Design
Pin Linktree focuses on clean layout, minimal design, and smooth usability. The interface is modern, visually appealing, and optimized for both desktop and mobile devices. With a simple structure and elegant presentation, it offers a professional way to showcase links.

### Key Features
- Create a personal profile-style link hub  
- Display multiple links in one organized page  
- Modern UI with clean and responsive design  
- Perfect for creators, developers, and businesses  
- Mobile-first layout optimized for social media sharing  
- Simple navigation and fast performance  

---

### Link Hub Workflow

Pin Linktree provides a straightforward experience:

#### Profile Presentation
Users can showcase a name, short bio, and profile identity in a clean header section.

#### Link Collection
All important links are displayed as clear interactive buttons, making navigation easy for visitors.

#### Social & Portfolio Use
The app is ideal for linking social accounts, personal websites, GitHub projects, online stores, or any digital platforms.

---

### Everyday Use Cases

Pin Linktree is useful for many purposes, such as:

- Social media bio link pages  
- Developer portfolio link collection  
- Business and brand landing pages  
- Content creator and influencer profiles  
- Sharing multiple projects through one URL  

---

### Open Source & Learning Value
Pin Linktree is an open-source project that demonstrates practical React development skills, including responsive UI building, reusable component structure, and modern front-end design practices. It is both a functional tool and a great learning showcase.

### Summary
Pin Linktree is a lightweight and elegant link hub application built with modern web technologies. With its clean design, responsive layout, and practical purpose, it provides an effective way to share and organize important links through one professional page.
`,
    tags: [
        tags.react,
        tags.mui,
        tags.javascript,
        tags.bootstrap,
        tags.responsive,
        tags.reactQr,
        tags.mobileFirst,
        tags.webApp,
    ],
    icon: pinIcon,
    cover: pinCover,
    badge: "React",
    images: [pinImage1, pinImage2, pinImage3],
    github: "https://github.com/bilalabdulhadii/react-pin-linktree",
    developer: developers.bilalabdulhadii,
};
