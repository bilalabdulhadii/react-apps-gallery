import developers from "../developers";
import tags from "../tags";

// icons
import snipboardIcon from "../../assets/apps/icons/snipboard.png";

// images
import snipboardCover from "../../assets/apps/images/snipboard/cover.png";
import snipboardImage1 from "../../assets/apps/images/snipboard/1.png";
import snipboardImage2 from "../../assets/apps/images/snipboard/2.png";
import snipboardImage3 from "../../assets/apps/images/snipboard/3.png";
import snipboardImage4 from "../../assets/apps/images/snipboard/4.png";
import snipboardImage5 from "../../assets/apps/images/snipboard/5.png";
import snipboardImage6 from "../../assets/apps/images/snipboard/6.png";

export const snipboard = {
    title: "Snipboard",
    slug: "snipboard",
    url: "https://snipboard.bilalabdulhadi.com",
    description: `
### Overview
Snipboard is a fast, private, and offline-first snippet manager designed for storing text that users copy and reuse frequently. Instead of searching through documents, messages, notes, or browser tabs for commonly used information, Snipboard provides a dedicated workspace where reusable text can be organized and copied instantly.

It is designed for content such as email addresses, phone numbers, links, commands, addresses, reusable replies, code snippets, usernames, business information, and any other text that is used repeatedly.

Unlike a traditional clipboard-history application, Snipboard does not automatically monitor or save everything copied by the user. Snippets are intentionally created and organized by the user, providing a cleaner and more controlled experience.

### Purpose & Value
The main goal of Snipboard is to reduce the repetitive work involved in finding and retyping frequently used text.

The core workflow is intentionally simple:

**Open Snipboard → Find a snippet → Click it → Copied**

A snippet can be copied directly by clicking its main card or list area, making frequently used content available within seconds.

Snipboard is particularly useful for users who repeatedly work with common responses, commands, contact information, development snippets, business details, URLs, or other reusable text.

### Privacy & Local-First Architecture
Snipboard is built around a local-first approach.

All user-created content is stored directly inside the browser using **IndexedDB**. Snippets, categories, preferences, usage information, ordering, and other application data remain on the user's own device.

The application does not require:

- User accounts
- Authentication
- A backend server
- Cloud storage
- External databases
- Online synchronization
- Analytics or tracking services

This architecture keeps the application lightweight while giving the user direct control over their own data.

Because IndexedDB is used instead of simple localStorage, Snipboard can maintain structured data such as snippets, categories, ordering, timestamps, settings, and usage information efficiently as the collection grows.

---

### Offline PWA Experience
Snipboard is built as a Progressive Web App and can continue working after the internet connection is lost.

After the application has been loaded successfully online and its application shell has been cached, users can reopen Snipboard while completely offline.

The offline experience includes normal application functionality such as:

- Viewing existing snippets
- Creating new snippets
- Editing snippets
- Deleting snippets
- Cloning snippets
- Copying content
- Searching
- Using categories
- Managing Favorites and Recent items
- Reordering content
- Switching views
- Changing preferences
- Exporting backups

The application's files are handled through a Service Worker and Cache Storage, while user content remains independently stored in IndexedDB.

Snipboard can also be installed from a supported browser and used in its own standalone application window, providing an experience closer to a native desktop or mobile utility.

---

### Snippet Management
Snippets are the central part of Snipboard.

Each snippet can contain a title, reusable text content, category information, favorite state, ordering information, and internal usage metadata.

Users can:

- Create new snippets
- Edit existing snippets
- Clone snippets
- Delete snippets
- Copy snippet content instantly
- Add snippets to Favorites
- Assign snippets to categories
- Reorder snippets manually

New snippets are designed to remain easy to access while still allowing users to customize their preferred order.

---

### Instant Copy Workflow
The primary interaction in Snipboard is copying.

Instead of opening a snippet and manually selecting its text, users can click the snippet directly to copy its complete content.

The interface provides immediate visual feedback after a successful copy action without interrupting the workflow with unnecessary confirmation dialogs.

This makes Snipboard especially useful when kept open beside another browser tab or application.

---

### Clone Snippets
Snipboard includes a Clone action for quickly creating variations of existing content.

Cloning creates a completely independent snippet with its own unique identifier while reusing the original snippet's content and category.

Clone titles are automatically generated using a structured naming pattern such as:

- Customer Reply
- Customer Reply (Copy)
- Customer Reply (Copy 2)
- Customer Reply (Copy 3)

The cloned snippet can then be edited immediately without affecting the original.

This is useful when several snippets share a common structure but contain small differences.

---

### Categories
Snipboard includes a flexible category system for organizing larger snippet collections.

Users can:

- Create custom categories
- Rename categories
- Delete categories
- Reorder categories
- Assign snippets to categories
- Search using category names

Categories can also be displayed in different styles depending on the user's preference, including text, text with an icon, or icon-only presentation.

Deleting a category does not automatically destroy the snippets that belonged to it, helping protect user content during organization changes.

---

### Favorites & Recent
Snipboard provides built-in Favorites and Recent filters.

#### Favorites
Frequently important snippets can be marked as Favorites for quick access.

Favorite status is controlled directly from the snippet interface, reducing the need to open additional menus.

#### Recent
The Recent section uses snippet usage information to make recently copied content easier to find again.

This is particularly useful when working repeatedly with a small group of snippets during the same session.

Favorites and Recent can also participate in the customizable navigation order.

---

### Search
Snipboard includes instant search designed for quickly locating content in larger collections.

Search can match information from:

- Snippet titles
- Snippet content
- Category names

Results update as the user types, avoiding unnecessary submit buttons or additional navigation.

This allows users to locate reusable information quickly even when hundreds of snippets are stored.

---

### Manual Organization & Drag and Drop
Snipboard supports manual ordering so users can organize snippets according to their own workflow.

Drag-and-drop interaction is implemented using **dnd-kit**, allowing items to be repositioned visually.

Alternative movement controls are also available so reordering does not depend entirely on dragging.

Navigation items and categories can also be manually organized, allowing the application to adapt to the user's own priorities.

---

### Grid & List Views
Snipboard supports multiple content layouts.

#### Grid View
Grid View presents snippets as cards and works well when users want a more visual overview of their saved content.

#### List View
List View provides a more compact layout, allowing a larger number of snippets to remain visible simultaneously.

This is particularly useful when Snipboard is opened in a narrow browser window or alongside another application.

The selected view preference is stored locally and restored automatically.

---

### Responsive & Split-View Design
Snipboard is designed mobile-first and remains usable across a wide range of screen sizes.

The interface adapts to:

- Mobile phones
- Tablets
- Narrow browser windows
- Chrome split view
- Desktop screens
- Large monitors

Special attention is given to narrow layouts because Snipboard is designed to work well beside another website or application.

The responsive interface keeps important actions reachable without simply shrinking a desktop dashboard into a smaller screen.

---

### Light & Dark Themes
Snipboard includes carefully designed Light and Dark themes.

The visual system is primarily monochrome, using neutral whites, blacks, and graphite tones rather than relying on strong brand colors throughout the interface.

The themes focus on:

- Clear hierarchy
- Comfortable contrast
- Minimal visual noise
- Modern neutral surfaces
- Long-term usability

Theme preference is persisted locally.

Snipboard also applies the saved theme before the main React interface renders, preventing the common bright Light-mode flash when reopening the application in Dark mode.

---

### Backup & Restore
Because Snipboard stores user data locally, backup functionality is an important part of the application.

Users can export their Snipboard data as a versioned JSON backup.

Backups can include application information such as:

- Snippets
- Categories
- Preferences
- Ordering
- Navigation configuration
- View settings

When importing data, Snipboard supports validated import behavior and can merge or replace local information depending on the selected workflow.

This provides a practical method for preserving or transferring locally stored content without requiring a cloud account.

---

### Keyboard Shortcuts
Snipboard includes keyboard shortcuts for faster desktop workflows.

Keyboard interactions are available for common actions such as:

- Focusing search
- Creating snippets
- Closing dialogs and menus

The shortcut system is designed to avoid interfering with normal text entry and browser behavior.

---

### Accessibility
Snipboard is designed with keyboard and accessibility support in mind.

The interface uses:

- Semantic buttons and controls
- Visible keyboard focus states
- Accessible dialogs
- ARIA labels and feedback
- Keyboard-accessible actions
- Alternative controls for drag-and-drop operations
- Reduced-motion support

Important workflows are designed to remain usable without relying exclusively on mouse interactions.

---

### Data Persistence
User data is stored with IndexedDB using the **idb** library.

Snipboard stores structured information including:

- Snippets
- Categories
- Unique snippet IDs
- Favorite state
- Creation and update timestamps
- Recent-copy timestamps
- Internal copy statistics
- Manual ordering
- Navigation ordering
- Theme preference
- Grid/List preference
- Other application settings

Each snippet uses its own unique ID rather than using the title as an identifier, allowing multiple snippets to safely have identical titles.

---

### Technologies & Engineering
Snipboard is built with modern frontend technologies and browser APIs.

The project uses:

- React
- JavaScript
- HTML5
- CSS3
- IndexedDB
- idb
- dnd-kit
- Lucide React
- Service Worker
- Web App Manifest
- Progressive Web App technologies
- Cache Storage
- Playwright
- React Testing Library

The current project uses React 19 and relies on IndexedDB through the idb package for structured local persistence. 

---

### Testing & Reliability
Snipboard includes automated testing for core user workflows.

Testing covers both application behavior and browser-level interactions using tools such as:

- Playwright
- React Testing Library

Important workflows including local persistence, offline behavior, snippet operations, responsive functionality, and PWA behavior are tested to help prevent regressions as the project evolves.

---

### Open Source & Learning Value
Snipboard is an open-source React project that demonstrates how a practical productivity application can be built without relying on a traditional backend.

The project demonstrates concepts including:

- React component architecture
- IndexedDB persistence
- Local-first application design
- Progressive Web Apps
- Service Workers
- Offline caching
- Responsive UI development
- Drag-and-drop interactions
- Structured data import/export
- Theme persistence
- Browser clipboard integration
- Accessibility
- End-to-end testing

It can serve both as a practical everyday tool and as a real-world example of building a privacy-focused offline-capable web application.

---

### Everyday Use Cases
Snipboard can be useful for many different workflows, including:

- Frequently used email replies
- Customer support responses
- Development commands
- Code snippets
- URLs and links
- Email addresses
- Phone numbers
- Business contact information
- Addresses
- Reusable form responses
- Social media text
- Product descriptions
- Common messages
- Repeated instructions
- Personal text templates
- Any information that needs to be copied repeatedly

---

### Summary
Snipboard is a private, responsive, offline-first quick-copy manager built around speed and simplicity.

It combines structured snippet organization, categories, Favorites, Recent items, search, cloning, manual ordering, Grid/List layouts, themes, JSON backups, IndexedDB persistence, and full PWA support into a focused productivity tool.

Its local-first architecture keeps user content on the device, while its responsive and installable design allows Snipboard to work comfortably as a normal website, a narrow split-view utility, or an installed Progressive Web App.

The result is a lightweight workspace designed around one simple idea:

**Save the text you use repeatedly, find it quickly, and copy it instantly.**
`,

    tags: [
        // Core
        tags.react,
        tags.javascript,

        // Functionality
        tags.crud,
        tags.search,
        tags.offline,
        tags.dragDrop,

        // Productivity
        tags.clipboard,
        tags.productivity,
        tags.utility,

        // UI / UX
        tags.responsive,
        tags.mobileFirst,
        tags.darkMode,
        tags.interactive,
        tags.customUI,

        // Project Type
        tags.webApp,
    ],

    icon: snipboardIcon,
    cover: snipboardCover,
    badge: "React",
    images: [
        snipboardImage1,
        snipboardImage2,
        snipboardImage3,
        snipboardImage4,
        snipboardImage5,
        snipboardImage6,
    ],
    github: "https://github.com/bilalabdulhadii/react-snipboard",
    developer: developers.bilalabdulhadii,
};
