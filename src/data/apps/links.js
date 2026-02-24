import developers from "../developers";
import tags from "../tags";

// icons
import linksIcon from "../../assets/apps/icons/links.png";

// images
import linksCover from "../../assets/apps/images/links/cover.png";
import linksImage1 from "../../assets/apps/images/links/1.png";
import linksImage2 from "../../assets/apps/images/links/2.png";
import linksImage3 from "../../assets/apps/images/links/3.png";
import linksImage4 from "../../assets/apps/images/links/4.png";
import linksImage5 from "../../assets/apps/images/links/5.png";
import linksImage6 from "../../assets/apps/images/links/6.png";
import linksImage7 from "../../assets/apps/images/links/7.png";
import linksImage8 from "../../assets/apps/images/links/8.png";
import linksImage9 from "../../assets/apps/images/links/9.png";
import linksImage10 from "../../assets/apps/images/links/10.png";
import linksImage11 from "../../assets/apps/images/links/11.png";
import linksImage12 from "../../assets/apps/images/links/12.png";
import linksImage13 from "../../assets/apps/images/links/13.png";

export const links = {
    title: "Links Lab",
    slug: "links-lab",
    url: "https://links.bilalabdulhadi.com",
    description: `
### Overview
**Links** is a custom Link-in-bio platform built for creators who want full control over their public profile page. It combines a **beautiful public page** with a **private dashboard** where the owner can edit content, manage links, and fully customize the visual style.

The public home page is **pure custom styling** (Tailwind + custom CSS only). The dashboard uses **shadcn/ui** for a clean and powerful editing experience.

---

### Purpose & Value
The goal of Links is to give creators a fast way to publish a polished link hub, while still giving them **deep control** over design, layout, and content. It works as a modern alternative to Linktree with full ownership of data and branding.

---

### Public Page Experience
The public page is a themed profile surface built from a single Firestore document.

#### Sections
- **Cover** (image, gradient, solid, or transparent)
- **Profile** (image, gradient, solid, or none)
- **Title + Description**
- **Icons row** (socials / quick links)
- **Buttons list** (multiple layouts)

#### Button Layouts
- **Card** (image + eyebrow + label)
- **Text**
- **Icon + Text**
- **Icon Only**
- Each button can use global style or a per-button custom style.

#### Share Modal
A built-in Share modal includes:
- QR code generation
- Download QR
- Copy link
- WhatsApp + Facebook share

---

### Dashboard Experience
The dashboard is **auth-only** (email/password). It contains editors for:

- **Profile** (type, image, gradient, solid, transparent)
- **Cover** (type, image, gradient, solid, transparent, plus position)
- **Icons** (choose from large React Icons library, reorder)
- **Buttons** (layouts, custom styles, reorder, image upload)
- **Theme** (background, text color, icon style, button style, content card)
- **Templates** (prebuilt themes)
- **Settings** (publish/unpublish, reset sections, recover theme)

---

### Theme System (Full Control)
The theme controls the entire look of the page:

- **Background**: solid, gradient, image, or video
- **Text color**: used in title, description, share modal, footer
- **Icon style**: border/text/bg/hover + radius + alignment
- **Button style**: border/text/bg/hover + radius + alignment
- **Content card**: background color, blur, opacity, radius
- **Hover animation**: lift / float / pulse / pop + transition duration

---

### Templates + Theme Backup
Links includes a **Templates** gallery with many preset themes.

- Templates update **visual style only** (never content).
- Applies to background, icon style, button style, content card, text color, and animation.
- When a template is **Set**, the previous theme is backed up.
- After **Save**, the backup is stored in Firestore.
- Users can restore the backup in **Settings → Recover Theme**.

---

### Upload Rules & Media Management
All media is stored in Firebase Storage under \`media/*\`.

- **Images**: max 5 MB  
- **Videos**: max 30 MB  
- When media is replaced, the old file is deleted automatically.
- When a button with an image is removed, its image is deleted too.

---

### Publish / Unpublish Flow
The site can be published or unpublished:
- **Published**: full public page
- **Unpublished**: shows Coming Soon or custom message
- You can control this in Settings

---

### Offline + No-Config States
Links handles edge cases gracefully:
- **Offline**: shows a friendly retry page
- **No config**: shows a setup-needed message (or clear “config missing” state)
- **404**: styled not-found page that matches the theme

---

### Technical Architecture
- **Frontend**: Next.js (App Router) + TypeScript  
- **UI**: Tailwind CSS + shadcn/ui (dashboard only)  
- **Backend**: Firebase Auth, Firestore, Storage  
- **Hosting**: Vercel  
- **Security**: strict Firestore/Storage rules  
- **Data model**: single document \`appConfig/main\`  

The project demonstrates:
- Full dashboard + public experience
- Custom theme engine
- File upload handling & cleanup
- Auth-protected admin panel
- Production-ready deployment

---

### Summary
Links is a production-ready, creator-focused link-in-bio platform with a powerful dashboard, flexible theming, and clean media management. It blends custom design with solid full-stack architecture to deliver a polished public profile system.
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

        tags.shadcn,
        tags.tailwind,
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
    icon: linksIcon,
    cover: linksCover,
    badge: "Next JS",
    images: [
        linksImage1,
        linksImage2,
        linksImage3,
        linksImage4,
        linksImage5,
        linksImage6,
        linksImage7,
        linksImage8,
        linksImage9,
        linksImage10,
        linksImage11,
        linksImage12,
        linksImage13,
    ],
    github: "https://github.com/bilalabdulhadii/links-nextjs",
    developer: developers.bilalabdulhadii,
};
