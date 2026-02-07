import developers from "../developers";
import tags from "../tags";

// icons
import notesIcon from "../../assets/apps/icons/notes.png";

// images
import notesCover from "../../assets/apps/images/notes/cover.png";
import notesImage1 from "../../assets/apps/images/notes/1.png";
import notesImage2 from "../../assets/apps/images/notes/2.png";
import notesImage3 from "../../assets/apps/images/notes/3.png";
import notesImage4 from "../../assets/apps/images/notes/4.png";
import notesImage5 from "../../assets/apps/images/notes/5.png";
import notesImage6 from "../../assets/apps/images/notes/6.png";
import notesImage7 from "../../assets/apps/images/notes/7.png";

export const notes = {
    title: "Notes",
    slug: "notes",
    url: "https://notes.bilalabdulhadi.com",
    description: `
### Overview
Notes App is a modern and responsive web application designed to help users quickly capture ideas, organize thoughts, and manage personal notes in a simple and efficient way. It provides a clean digital space for writing, saving, and revisiting important information anytime.

### Purpose & Value
The main goal of Notes App is to offer an easy-to-use solution for everyday note-taking. Whether it's for study reminders, project ideas, meeting points, or personal journaling, the app allows users to store and manage their notes in one convenient place.

### User Experience & Design
Notes App focuses on clarity, minimalism, and usability. The interface is designed to be distraction-free, making writing and organizing notes feel smooth and enjoyable. With a responsive layout, the experience remains consistent across desktops, tablets, and mobile devices.

### Key Features
- Create and save notes instantly  
- Edit notes smoothly with a simple workflow  
- Delete notes to keep content organized  
- Clean and modern UI for comfortable writing  
- Responsive design optimized for all devices  
- Lightweight and fast performance  

---

### Note Management Workflow

Notes App provides a straightforward and practical experience:

#### Writing Notes
Users can quickly type and store ideas without unnecessary steps, making it perfect for fast note capture.

#### Updating Notes
Notes can be edited anytime, allowing users to refine content as thoughts evolve.

#### Organizing Content
With simple management actions, users can keep their notes clean, relevant, and easy to access.

---

### Everyday Use Cases

Notes App is useful for many scenarios, including:

- Study and revision notes  
- Personal reminders and to-do thoughts  
- Project planning and brainstorming  
- Quick journaling or idea collection  
- Meeting summaries and important points  

---

### Open Source & Learning Value
Notes App is an open-source project that demonstrates essential React development practices such as component structure, state handling, and user-focused UI design. It serves as both a functional tool and a strong learning example for building real-world productivity applications.

### Summary
Notes App is a lightweight yet powerful note-taking application built with modern web technologies. With its clean interface, responsive experience, and practical features, it provides an effective way to capture, manage, and organize notes seamlessly in daily life.
`,

    tags: [
        tags.react,
        tags.mui,
        tags.javascript,
        tags.bootstrap,
        tags.realtime,
        tags.productivity,
        tags.crud,
        tags.notes,
        tags.search,
        tags.responsive,
        tags.mobileFirst,
        tags.webApp,
    ],
    icon: notesIcon,
    cover: notesCover,
    badge: "React",
    images: [
        notesImage1,
        notesImage2,
        notesImage3,
        notesImage4,
        notesImage5,
        notesImage6,
        notesImage7,
    ],
    github: "https://github.com/bilalabdulhadii/react-notes",
    developer: developers.bilalabdulhadii,
};
