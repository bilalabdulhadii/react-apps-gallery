import developers from "../developers";
import tags from "../tags";

// icons
import clipboardIcon from "../../assets/apps/icons/clipboard.png";

// images
import clipboardCover from "../../assets/apps/images/clipboard/cover.png";
import clipboardImage1 from "../../assets/apps/images/clipboard/1.png";

export const clipboard = {
    title: "Clipboard Extension",
    slug: "chrome-clipboard-extension",
    url: "",
    description: `
### Overview
Chrome Clipboard Extension is a lightweight productivity tool designed to make copying and managing text snippets in your browser faster and more convenient. Built as a Chrome extension, it allows users to quickly add, store, and copy frequently used text with a few simple clicks, eliminating repetitive typing and streamlining workflows.

### Purpose & Value
This extension aims to simplify how users work with clipboard content by offering quick access to saved text snippets. Whether you're a developer, writer, student, or everyday user who often copies similar text, this tool helps reduce effort and boost efficiency by keeping your important text easily accessible.

### User Experience & Design
Chrome Clipboard Extension focuses on a clean and intuitive interface that feels seamless within the Chrome toolbar. When activated, the popup provides a simple list of saved text entries that the user can tap to instantly copy to the system clipboard. The easy-to-navigate UI ensures that even first-time users can start managing their clipboard data with ease.

### Key Features
- Add custom text snippets directly in the popup  
- Instantly copy saved text to the clipboard  
- Store and manage frequently used clipboard items  
- Delete unnecessary snippets with a single click  
- Toast notifications confirm copy actions  
- Lightweight and fast Chrome extension experience  
- No external dependencies or heavy interfaces  

---

### Workflow & Usage

Chrome Clipboard Extension provides a straightforward clipboard management experience:

#### Adding Snippets
Users can enter any text directly into the popup interface and save it to their clipboard list for later reuse.

#### Copying Text
With saved snippets displayed in a list, users can instantly copy any item with a single click — perfect for repetitive copy tasks.

#### Removing Snippets
Items can be removed easily to keep the clipboard collection organized and relevant.

---

### Practical Use Cases

This extension is useful for many everyday needs, including:

- Quickly inserting frequently used phrases or responses  
- Avoiding repeated typing of common text  
- Saving responses for customer support or social media  
- Quickly accessing reusable templates and blocks of text  

---

### Open Source & Learning Value
Chrome Clipboard Extension is an open-source project that serves as a practical example of building a Chrome browser extension using HTML, CSS, and JavaScript. It demonstrates how to use Chrome Extension APIs such as storage and clipboard actions, making it a valuable learning project for anyone interested in building browser tools.

### Summary
Chrome Clipboard Extension is a simple yet powerful productivity tool that enhances your browser's clipboard capabilities. With its intuitive design, quick access to saved text snippets, and efficient workflow, it provides a seamless way to manage and reuse text across web tasks.
`,

    tags: [
        tags.chrome,
        tags.clipboard,
        tags.javascript,
        tags.productivity,
        tags.tools,
    ],
    icon: clipboardIcon,
    cover: clipboardCover,
    badge: "Chrome Extension",
    images: [clipboardImage1],
    github: "https://github.com/bilalabdulhadii/Chrome-Clipboard-Extension",
    developer: developers.bilalabdulhadii,
};
