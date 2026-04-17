import developers from "../developers";
import tags from "../tags";

// icons
import textlabIcon from "../../assets/apps/icons/textlab.png";

// images
import textlabCover from "../../assets/apps/images/textlab/cover.png";
import textlabImage1 from "../../assets/apps/images/textlab/1.png";
import textlabImage2 from "../../assets/apps/images/textlab/2.png";
import textlabImage3 from "../../assets/apps/images/textlab/3.png";
import textlabImage4 from "../../assets/apps/images/textlab/4.png";
import textlabImage5 from "../../assets/apps/images/textlab/5.png";
import textlabImage6 from "../../assets/apps/images/textlab/6.png";
import textlabImage7 from "../../assets/apps/images/textlab/7.png";
import textlabImage8 from "../../assets/apps/images/textlab/8.png";
import textlabImage9 from "../../assets/apps/images/textlab/9.png";
import textlabImage10 from "../../assets/apps/images/textlab/10.png";

export const textlab = {
    title: "Text Lab",
    slug: "text-lab",
    url: "https://textlab.bilalabdulhadi.com",
    description: `
### Overview
TextLab is a modern writing workspace designed for users who want a clean and organized environment for managing text files, notes, and folders. It combines the familiarity of a file explorer with the convenience of a focused editor, creating a practical space for writing and organization.

### Purpose & Value
The goal of TextLab is to provide a lightweight productivity tool for capturing ideas, organizing content, and editing text without unnecessary complexity. It is built for speed, simplicity, and everyday usability.

### User Experience & Design
TextLab features a polished and responsive interface with a minimal design language. Users can switch between grid and list views, navigate folders easily, and customize the editor experience with personalized styles and themes.

### Key Features
- Create folders and text files with ease  
- File explorer style navigation with breadcrumbs  
- Fullscreen writing editor with auto save  
- Search files and folders instantly  
- Favorites and tag organization system  
- Grid and list layouts with size controls  
- Custom file appearance and writing styles  
- Dark mode with persistent settings  
- Download files as .txt format  
- Responsive design for desktop and mobile  

---

### Writing Workspace

TextLab is designed to keep writing simple and focused:

#### Smart Organization
Create structured folders, manage files, rename items, move content, and keep everything organized in one workspace.

#### Focused Editing
Use a distraction-free fullscreen editor with automatic saving, search inside files, and customizable appearance settings.

#### Personal Workflow
Pin important items, filter by tags, and personalize how the workspace looks and behaves.

---

### Technical Value

TextLab is a strong React project demonstrating modern frontend practices such as:

- Component-based architecture  
- State management with persistent local storage  
- Responsive UI design  
- Dynamic filtering and search systems  
- Material UI integration  
- Clean user experience patterns  

---

### Summary
TextLab is a polished browser-based writing workspace that blends file management and focused editing into one smooth experience. It is ideal for note-taking, drafting ideas, and organizing personal content in a fast and modern interface.
`,
    tags: [
        tags.react,
        tags.javascript,
        tags.mui,

        tags.crud,
        tags.search,
        tags.localStorage,
        tags.fileManager,
        tags.workspace,
        tags.textEditor,

        tags.productivity,
        tags.utility,

        tags.responsive,
        tags.mobileFirst,
        tags.darkMode,
        tags.webApp,
        tags.vercel,
    ],
    icon: textlabIcon,
    cover: textlabCover,
    badge: "React",
    images: [
        textlabImage1,
        textlabImage2,
        textlabImage3,
        textlabImage4,
        textlabImage5,
        textlabImage6,
        textlabImage7,
        textlabImage8,
        textlabImage9,
        textlabImage10,
    ],
    github: "https://github.com/bilalabdulhadii/react-text-lab",
    developer: developers.bilalabdulhadii,
};
