import developers from "../developers";
import tags from "../tags";

// icons
import enigmaIcon from "../../assets/apps/icons/enigma.png";

// images
import enigmaCover from "../../assets/apps/images/enigma/cover.png";
import enigmaImage1 from "../../assets/apps/images/enigma/1.png";
import enigmaImage2 from "../../assets/apps/images/enigma/2.png";
import enigmaImage3 from "../../assets/apps/images/enigma/3.png";
import enigmaImage4 from "../../assets/apps/images/enigma/4.png";

export const enigma = {
    title: "Enigma Machine Simulator",
    slug: "enigma-machine-simulator",
    url: "https://enigma.bilalabdulhadi.com",
    description: `
### Overview
Enigma Machine Simulator is an interactive web-based recreation of the historic cipher machine, designed to visualize how encrypted signals travel through each stage of the system.

### Purpose & Value
The project focuses on simplifying the understanding of classical encryption by turning complex internal processes into clear, real-time visual feedback.

### User Experience & Design
The interface mimics a physical machine with a modern touch, allowing users to interact with rotors, plugboard, and observe signal flow dynamically.

### Key Features
- Real-time signal path visualization  
- Configurable rotors and positions  
- Interactive plugboard connections  
- Reflector-based encryption logic  
- Step-by-step signal breakdown  
- Live rotor stepping mechanism  
- Adjustable animation speed  
- Sound effects for realistic interaction  
- Responsive and clean UI  

---

### Signal Visualization

The simulator highlights how each key press travels through:

#### Plugboard Mapping
Letters are swapped based on user-defined connections before entering the rotors.

#### Rotor Transformation
Signals pass through multiple rotating layers that change mapping dynamically.

#### Reflector Return Path
The signal is reflected back through the system, ensuring reversible encryption.

---

### Technical Value

This project demonstrates:

- Advanced state handling in React  
- Real-time animation synchronization  
- Complex data flow visualization  
- Modular component architecture  
- Interactive UI/UX design  

---

### Summary
A visually rich and interactive Enigma simulator that transforms encryption mechanics into an intuitive learning experience.
`,

    tags: [
        tags.react,
        tags.javascript,

        tags.animations,
        tags.framer,
        tags.realtimeAnimation,
        tags.interactive,

        tags.visualization,
        tags.simulation,
        tags.algorithm,

        tags.cryptography,
        tags.encryption,
        tags.cipher,

        tags.edu,
        tags.utility,

        tags.webApp,
    ],
    icon: enigmaIcon,
    cover: enigmaCover,
    badge: "Cryptography",
    images: [enigmaImage1, enigmaImage2, enigmaImage3, enigmaImage4],
    github: "https://github.com/bilalabdulhadii/enigma-machine-simulator",
    developer: developers.bilalabdulhadii,
};
