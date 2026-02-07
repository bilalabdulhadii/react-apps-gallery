import developers from "../developers";
import tags from "../tags";

// icons
import todolistIcon from "../../assets/apps/icons/todolist.png";

// images
import todolistCover from "../../assets/apps/images/todolist/cover.png";
import todolistImage1 from "../../assets/apps/images/todolist/1.png";
import todolistImage2 from "../../assets/apps/images/todolist/2.png";
import todolistImage3 from "../../assets/apps/images/todolist/3.png";
import todolistImage4 from "../../assets/apps/images/todolist/4.png";
import todolistImage5 from "../../assets/apps/images/todolist/5.png";

export const todolist = {
    title: "ToDo List",
    slug: "todo-list",
    url: "https://todolist.bilalabdulhadi.com",
    description: `
### Overview
Todo List is a clean and responsive task management web application designed to help users organize their daily activities, track progress, and stay productive. It provides a simple yet powerful interface for creating, managing, and completing tasks efficiently.

### Purpose & Value
The main goal of Todo List is to offer a practical solution for planning and productivity. By allowing users to break down their work into manageable tasks, the app helps reduce overwhelm and encourages consistent progress throughout the day.

### User Experience & Design
Todo List focuses on simplicity, clarity, and ease of use. The interface is modern and distraction-free, making task management feel smooth and enjoyable. The responsive layout ensures the experience works perfectly across desktops, tablets, and mobile devices.

### Key Features
- Create and manage daily tasks with ease  
- Mark tasks as completed to track progress  
- Delete tasks instantly with a clean workflow  
- Responsive design optimized for all screen sizes  
- Minimal and modern UI for better focus  
- Smooth interactions for an enjoyable user experience  

---

### Task Management Workflow

Todo List provides a straightforward productivity flow:

#### Adding Tasks
Users can quickly add new tasks through an input field, making it easy to capture ideas and responsibilities instantly.

#### Completing Tasks
Tasks can be marked as finished, giving users a sense of achievement and helping them visualize their progress.

#### Removing Tasks
Unnecessary or completed tasks can be removed cleanly, keeping the list organized and clutter-free.

---

### Productivity Benefits

Todo List is designed to support better daily planning by helping users:

- Stay organized with clear task lists  
- Maintain focus on priorities  
- Track accomplishments throughout the day  
- Build consistent productivity habits  

---

### Open Source & Learning Value
Todo List is an open-source project that demonstrates essential React development concepts, including state management, component-based UI design, and responsive layouts. It serves as both a useful productivity tool and a strong learning project for modern web development.

### Summary
Todo List is a lightweight yet effective task management application built with modern web technologies. With its clean design, responsive experience, and productivity-focused features, it offers a simple way to stay organized, complete tasks efficiently, and manage daily workflows with ease.
`,

    tags: [
        tags.react,
        tags.mui,
        tags.javascript,
        tags.bootstrap,
        tags.productivity,
        tags.realtime,
        tags.crud,
        tags.search,
        tags.responsive,
        tags.mobileFirst,
        tags.webApp,
    ],
    icon: todolistIcon,
    cover: todolistCover,
    badge: "React",
    images: [
        todolistImage1,
        todolistImage2,
        todolistImage3,
        todolistImage4,
        todolistImage5,
    ],
    github: "https://github.com/bilalabdulhadii/react-todo-list",
    developer: developers.bilalabdulhadii,
};
