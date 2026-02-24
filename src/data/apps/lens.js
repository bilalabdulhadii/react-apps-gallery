import developers from "../developers";
import tags from "../tags";

// icons
import lensIcon from "../../assets/apps/icons/lens.png";

// images
import lensCover from "../../assets/apps/images/lens/cover.png";
import lensImage1 from "../../assets/apps/images/lens/1.png";
import lensImage2 from "../../assets/apps/images/lens/2.png";
import lensImage3 from "../../assets/apps/images/lens/3.png";
import lensImage4 from "../../assets/apps/images/lens/4.png";
import lensImage5 from "../../assets/apps/images/lens/5.png";
import lensImage6 from "../../assets/apps/images/lens/6.png";
import lensImage7 from "../../assets/apps/images/lens/7.png";
import lensImage8 from "../../assets/apps/images/lens/8.png";
import lensImage9 from "../../assets/apps/images/lens/9.png";
import lensImage10 from "../../assets/apps/images/lens/10.png";
import lensImage11 from "../../assets/apps/images/lens/11.png";
import lensImage12 from "../../assets/apps/images/lens/12.png";
import lensImage13 from "../../assets/apps/images/lens/13.png";
import lensImage14 from "../../assets/apps/images/lens/14.png";

export const lens = {
    title: "Lens Studio",
    slug: "lens",
    url: "https://lens.bilalabdulhadi.com",
    description: `
### Overview
Lens is a modern full-stack image gallery platform that allows users to create albums, upload photos, manage privacy settings, and explore public content from the community. Built with scalability and clean architecture in mind, Lens demonstrates a real-world product structure from authentication to media management.

### Purpose & Value
The main goal of Lens is to provide a secure and intuitive way to organize and share visual content online. Users can manage private albums for personal storage or publish selected albums to make them publicly discoverable.

### User Experience & Design
Lens focuses on clarity, performance, and responsive design. The interface is built with a clean layout and smooth interactions, ensuring a seamless experience across desktop and mobile devices. Image presentation follows a justified gallery layout, preserving original aspect ratios while maintaining compact thumbnails.

### Key Features
- Secure authentication system  
- Create private or public albums  
- Upload up to 5 images per album  
- Enforced upload limits and validation  
- Real-time public gallery (Explore page)  
- Edit album details and manage images  
- Secure access control via Firestore rules  
- Automatic storage cleanup on album deletion  
- Responsive and modern UI  
- Production-ready deployment on Vercel  

---

### Album Workflow

Lens provides a structured yet flexible workflow:

#### Creating Albums
Users can create albums with title, description, and privacy selection (public/private).

#### Managing Images
Images can be uploaded, previewed, marked for removal, and updated while respecting strict limits and validation rules.

#### Privacy Control
Private albums are accessible only to the owner, while public albums become visible in the Explore section.

#### Access Enforcement
All permissions are enforced at the database and storage level using Firebase security rules.

---

### Explore Experience

The Explore page aggregates images from public albums and displays them in a justified gallery layout. This ensures:

- Preserved image aspect ratios  
- Full-width responsive rows  
- Optimized thumbnail rendering  
- Clean hover interactions  

---

### Technical Architecture

Lens is built with a modern full-stack architecture:

- Frontend: Next.js (App Router)
- UI: Tailwind CSS + ShadCN
- Backend: Firebase (Auth, Firestore, Storage)
- Hosting: Vercel
- Secure rules for both Firestore and Storage
- Denormalized data structure for optimized reads

The project demonstrates best practices in:
- Firestore schema design  
- Access control modeling  
- Media upload handling  
- Clean component architecture  
- State and permission management  

---

### Summary
Lens is a production-ready image gallery platform that showcases full-stack development skills, including authentication, database modeling, security rule enforcement, file storage management, and responsive UI design. It combines clean architecture with practical functionality to deliver a polished and secure user experience.
`,

    tags: [
        tags.nextjs,
        tags.typescript,
        tags.react,

        tags.firebase,
        tags.firestore,
        tags.storage,
        tags.nosql,

        tags.auth,
        tags.authorization,
        tags.validation,

        tags.gallery,
        tags.search,

        tags.responsive,
        tags.mobileFirst,
        tags.darkMode,
        tags.fullstack,
        tags.dashboard,
        tags.cloudApp,
        tags.vercel,
        tags.webApp,
    ],
    icon: lensIcon,
    cover: lensCover,
    badge: "Next JS",
    images: [
        lensImage1,
        lensImage2,
        lensImage3,
        lensImage4,
        lensImage5,
        lensImage6,
        lensImage7,
        lensImage8,
        lensImage9,
        lensImage10,
        lensImage11,
        lensImage12,
        lensImage13,
        lensImage14,
    ],
    github: "https://github.com/bilalabdulhadii/lens-nextjs",
    developer: developers.bilalabdulhadii,
};
