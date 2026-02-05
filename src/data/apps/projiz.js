import developers from "../developers";
import tags from "../tags";

// icons
import projizIcon from "../../assets/apps/icons/projiz.png";

// images
import projizCover from "../../assets/apps/images/projiz/cover.png";
import projizImage1 from "../../assets/apps/images/projiz/1.png";
import projizImage2 from "../../assets/apps/images/projiz/2.png";
import projizImage3 from "../../assets/apps/images/projiz/3.png";
import projizImage4 from "../../assets/apps/images/projiz/4.png";
import projizImage5 from "../../assets/apps/images/projiz/5.png";
import projizImage6 from "../../assets/apps/images/projiz/6.png";
import projizImage7 from "../../assets/apps/images/projiz/7.png";
import projizImage8 from "../../assets/apps/images/projiz/8.png";
import projizImage9 from "../../assets/apps/images/projiz/9.png";
import projizImage10 from "../../assets/apps/images/projiz/10.png";
import projizImage11 from "../../assets/apps/images/projiz/11.png";
import projizImage12 from "../../assets/apps/images/projiz/12.png";
import projizImage13 from "../../assets/apps/images/projiz/13.png";
import projizImage14 from "../../assets/apps/images/projiz/14.png";


export const projiz = {
    title: "Projiz - Digital Solutions Platform",
    slug: "projiz",
    url: "https://projiz.com",
    description: `
### Overview
Projiz is a full-stack digital solutions platform built on Next.js with a dedicated admin dashboard and a structured Postgres database (Neon). It combines a polished public website with an operational backend for managing client submissions, workflows, and internal data.

### Core Capabilities
Projiz is designed for real operations — not just presentation:
- Secure authentication with session management  
- Unified inbox for all incoming form submissions  
- Status lifecycle control (new, seen, replied, archived, spam, deleted)  
- Global search across submissions and field values  
- Structured data model for reliable querying and reporting  

### Data & Structure
The platform uses a clean relational schema:
- **Users** store authenticated dashboard accounts  
- **Sessions** manage secure login state with revocation support  
- **Submissions** capture each form entry with timestamps and status  
- **Submission Values** store field-typed values for accurate filtering  

This gives Projiz full control over how data is captured, indexed, and retrieved.

### Admin Dashboard
The dashboard is built for clarity and speed:
- Central inbox with filtering by form and status  
- Detailed submission views with all fields and metadata  
- Search experience for both dashboard and website content  
- Consistent UI patterns and quick navigation  

### Public Experience
The public site delivers the brand message clearly and guides visitors into action. It supports:
- Responsive layouts for all devices  
- Fast page performance  
- Structured services and CTA flow  
- Contact forms connected directly to the dashboard inbox  

### Architecture & Stack
- Next.js App Router (UI + API routes)  
- Neon Postgres (serverless database)  
- Vercel deployment pipeline  
- TypeScript + Tailwind for clean, maintainable UI  

### Summary
Projiz is a modern, scalable platform that connects a professional public presence with a powerful internal operations layer. It delivers strong UX on the frontend and full control of data and workflows behind the scenes, making it ready for growth and long-term product evolution.
`,

    tags: [
        tags.react,
        tags.nextjs,
        tags.typescript,
        tags.shadcn,
        tags.tailwind,
        tags.framer,
        tags.animations,
        tags.neon,
        tags.postgres,
        tags.vercel,
        tags.dashboard,
        tags.auth,
        tags.api,
        tags.search,
        tags.responsive,
        tags.webApp,
        tags.reactQr,
    ],
    icon: projizIcon,
    cover: projizCover,
    badge: "Next JS",
    images: [
        projizImage1,
        projizImage2,
        projizImage3,
        projizImage4,
        projizImage5,
        projizImage6,
        projizImage7,
        projizImage8,
        projizImage9,
        projizImage10,
        projizImage11,
        projizImage12,
        projizImage13,
        projizImage14,
    ],
    github: "",
    developer: developers.bilalabdulhadii,
};
