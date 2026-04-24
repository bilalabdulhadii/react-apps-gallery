import developers from "../developers";
import tags from "../tags";

// icons
import widgetIcon from "../../assets/apps/icons/widget.png";

// images
import widgetCover from "../../assets/apps/images/widget/cover.png";
import widgetImage1 from "../../assets/apps/images/widget/1.png";
import widgetImage2 from "../../assets/apps/images/widget/2.png";
import widgetImage3 from "../../assets/apps/images/widget/3.png";
import widgetImage4 from "../../assets/apps/images/widget/4.png";
import widgetImage5 from "../../assets/apps/images/widget/5.png";
import widgetImage6 from "../../assets/apps/images/widget/6.png";
import widgetImage7 from "../../assets/apps/images/widget/7.png";
import widgetImage8 from "../../assets/apps/images/widget/8.png";
import widgetImage9 from "../../assets/apps/images/widget/9.png";
import widgetImage10 from "../../assets/apps/images/widget/10.png";
import widgetImage11 from "../../assets/apps/images/widget/11.png";

export const widget = {
    title: "Widget Studio",
    slug: "widget-studio",
    url: "https://widget.bilalabdulhadi.com",
    description: `
### Overview
Widget Studio is a modern widget platform for creating customizable, embeddable widgets for Notion, websites, dashboards, and custom apps. It combines a polished widget marketplace with dedicated builder pages, allowing users to browse widgets, customize them locally, and export clean embed links or iframe snippets.

### Purpose & Value
The goal of Widget Studio is to make widget creation simple, flexible, and frontend-only. Users can open a widget builder, adjust settings with live preview, and copy an embed URL that carries the widget configuration through query parameters. This makes the widgets easy to use anywhere iframe embeds are supported.

### User Experience & Design
Widget Studio features a marketplace-style widget catalog with search, autocomplete, featured widgets, preview thumbnails, category badges, and free price labels. Each widget has a clean product route such as /widgets/flip-clock, while embed output is handled separately through /embed/:slug routes.

### Key Features
- Polished widget marketplace with categories and search  
- Dedicated builder page for each widget  
- Clean widget routes such as /widgets/audio-bar and /widgets/event-board  
- Live preview with instant setting updates  
- Copy-ready embed links and iframe snippets  
- Slug-based embed routes using /embed/:slug  
- Frontend-only configuration through query parameters  
- Light and dark widget appearances  
- Optional custom background color  
- Centralized theme token system  
- Dedicated marketplace preview thumbnails  
- Free · 0$ label for all widgets  

---

### Widget Catalog

Widget Studio includes multiple widget categories:

#### Audio
Audio Bar, Mono Player, Focus Player, and Studio Player with play/pause, scrubbing, optional time display, volume control, loop visibility, and visualizer options.

#### Clock
Digital Clock, Flip Clock, Ring Clock, Split Clock, and Analog Clock with clean visual styles and customizable appearance.

#### Productivity
Pomodoro Timer, Event Board, Progress Tracker, Day Tracker, Habit Board, Focus Board, and Streak Counter for focused dashboards and productivity setups.

#### Utility
Quote Board, Greeting Card, Quick Links, and Note Board for lightweight dashboard content.

---

### Embed Model

Widget Studio separates builder pages from embed pages:

- Builder pages use clean URLs such as /widgets/flip-clock  
- Embed pages use /embed/:slug with query parameters  
- Builder settings stay in local React state  
- The generated embed link contains the widget configuration  
- The embed page renders only the widget without app chrome  

This structure keeps the editing experience clean while making widgets portable across Notion, websites, dashboards, and custom tools.

---

### Theme & Appearance

Widget Studio uses a shared theme system across the app and widgets. Widgets support light and dark appearances, optional custom background colors, and centralized token layers for background, surface, elevated surface, inner card, text, muted text, border, and shadow. Accent colors remain optional and only affect highlights.

---

### Technical Value

Widget Studio is a strong React project demonstrating modern frontend practices such as:

- Component-based architecture  
- Centralized widget configuration and defaults  
- Clean slug-based routing  
- Query-parameter embed generation  
- Marketplace search and filtering  
- Dedicated preview thumbnail system  
- Reusable widget renderer  
- Theme token architecture  
- Responsive builder and embed layouts  
- Frontend-only application design  

---

### Summary
Widget Studio is a polished frontend widget platform that lets users create, customize, preview, and embed beautiful widgets anywhere. It is designed for Notion dashboards, personal websites, internal tools, and custom interfaces, with a clean marketplace experience and a scalable React architecture.
`,
    tags: [
        tags.react,
        tags.javascript,
        tags.tailwind,
        tags.framer,

        tags.responsive,
        tags.mobileFirst,
        tags.animations,
        tags.darkMode,
        tags.customUI,
        tags.interactive,

        tags.search,
        tags.utility,
        tags.productivity,

        tags.webApp,
        tags.vercel,
    ],
    icon: widgetIcon,
    cover: widgetCover,
    badge: "React",
    images: [
        widgetImage1,
        widgetImage2,
        widgetImage3,
        widgetImage4,
        widgetImage5,
        widgetImage6,
        widgetImage7,
        widgetImage8,
        widgetImage9,
        widgetImage10,
        widgetImage11,
    ],
    github: "https://github.com/bilalabdulhadii/react-widget-studio",
    developer: developers.bilalabdulhadii,
};
