interface User {
    name: string;
    profession: string;
    email: string;
    linkedin: string;
    github: string;
}

interface Project {
    title: string;
    description: string;
    link: string;
    technologies: string[];
    github: string;
    
    date:string;
}

interface About {
    title: string;
    description: string;
    image: string;
}

interface Experience {
    title: string;
    description: string;
    timeline: string;
    location: string;
    companyname: string;
}

interface Education {
    title: string;
    description: string;
    timeline: string;
    location: string;
    schoolname: string;
    gpa?: string;
}

interface Extracurricular {
    title: string;
    description: string;
    timeline: string;
    location: string;
    eventname: string;
    
}

export interface UserData {
    personalInfo: User;
    about: About;
    experience: Experience[];
    projects: Project[];
    extracurricular: Extracurricular[];
    education: Education[];
}

const user: UserData = {
    personalInfo: {
        name: "Jeevika Sirwani",
        profession: "Associate Software Engineer",
        email: "jeevika.sirwani4@gmail.com",
        github: "https://github.com/jeevikasirwani",
        linkedin: "https://www.linkedin.com/in/jeevika-sirwani-51a776212/",
    },
    about: {
        title: "About Me",
        description: "Software Engineer with expertise in full-stack development using modern technologies like React, Node.js, TypeScript, and cloud platforms. Experienced in building scalable web applications, real-time chat systems, and AI-powered tools. Strong background in leadership and event management with a passion for creating innovative solutions.",
        image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    },
    experience: [
        {
            title: "Associate Software Engineer",
            description: "Currently working as an Associate Software Engineer, contributing to enterprise-level software solutions and development projects.",
            timeline: "Sept 2024 - Present",
            location: "Pune, India",
            companyname: "Accenture",
        },
        {
            title: "Web Development Intern",
            description: "Developed banking applications with React.js frontend, Node.js backend, and PostgreSQL database. Implemented payment gateway integration using React.js and Express.js.",
            timeline: "Feb 2023 - Mar 2023",
            location: "Remote",
            companyname: "Spark Foundation",
        },
        {
            title: "Web Development Intern",
            description: "Built a complete website for basketball association using HTML, CSS, JavaScript frontend with Firebase backend and Email.js integration.",
            timeline: "Mar 2023-April-2023",
            location: "Remote",
            companyname: "MSM Basketball Association",
        },
    ],
    projects: [
        {
            title: "Readme Blog App",
            description: "A blog application deployed on Cloudflare Workers featuring clean UI and smooth text editing experience. Enhanced with Framer Motion animations for polished user experience.",
            
            technologies: ["React", "Hono", "TypeScript", "Prisma", "PostgreSQL"],
            github: "https://github.com/jeevikasirwani/readme",
            link: "https://readme100xdevs-7of2q0v5a-jeevikasirwanis-projects.vercel.app/signup",
            date:"2025"
        },
        {
            title: "MERN Chat Application",
            description: "Real-time chat application utilizing the MERN stack, providing users with seamless and interactive communication platform with live messaging capabilities.",
            link: "",
            technologies: ["MongoDB", "Express.js", "React", "Node.js"],
            github: "https://github.com/jeevikasirwani/mernapp",
            
            date:"2024"
        },
        {
            title: "Website AI Builder",
            description: "Simple website builder that lets you create professional sites fast. Uses AI (Cohere) to help write content, with React and Tailwind ensuring sleek design.",
            link: "https://github.com/jeevikasirwani/bolt",
            technologies: ["React", "Tailwind CSS", "Cohere AI"],
            github: "https://github.com/jeevikasirwani/bolt",
            
            date:"2025"
        },
        {
            title: "Object Detection Web App",
            description: "Object detection application for visually impaired users using YOLOV8. Includes functionality to detect objects and provide voice feedback for accessibility.",
            link: "https://github.com/jeevikasirwani",
            technologies: ["React", "TypeScript", "YOLOV8", "ONNX Runtime", "TTS"],
            github: "https://github.com/jeevikasirwani",
            
            date:"2024"
        },
        {
            title: "Portfolio Website",
            description: "Portfolio Website.",
            link: "https://jeevikaportfolio1.vercel.app/",
            technologies: ["React", "TypeScript", "Framer", "Tailwind", "Nextjs"],
            github: "https://github.com/jeevikasirwani/jeevikaportfolio1",
            
            date:"2025"
        },
        {
            title: "LinkedIn Clone",
            description: "Object detection application for visually impaired users using YOLOV8. Includes functionality to detect objects and provide voice feedback for accessibility.",
           
            technologies: ["React", "TypeScript", "Redux"],
            github: "https://github.com/jeevikasirwani/linkedin-clone",
            link: "https://linkedin-clone-86f74.web.app/",
            date:"2024"
        },
    ],
    extracurricular: [
        {
            title: "Editorial Head",
            description: "Led editorial team at Google Developer Student Clubs, managing content creation, team coordination, and editorial processes. Demonstrated strong leadership and team management skills.",
            timeline: "Jul 2022 - Jul 2023",
            location: "Pune, India",
            eventname: "GDSC-PCCOER",
            
        },
        {
            title: "Member",
            description: "Active member of Computer Cosmos Consortium (CCube), the Students' Association of Computer Department, participating in various technical and academic activities.",
            timeline: "Jul 2022 - Jul 2023",
            location: "Pune, India",
            eventname: "Computer Cosmos Consortium (CCube)",
            
        },
        {
            title: "Crowd Management Volunteer",
            description: "Organized events and served as part of Event Managing Team for crowd control at GDG Pune and Women Techmakers events, demonstrating organizational and management skills.",
            timeline: "March 2023 - April 2023",
            location: "Pune, India",
            eventname: "GDG PUNE AND WOMEN TECHMAKERS EVENT",
            
        },
    ],
    education: [
        {
            title: "Bachelor of Engineering - Computer Engineering",
            description: "Pursuing Bachelor's degree in Computer Engineering with strong academic performance and comprehensive knowledge in computer science fundamentals, programming, and software development.",
            timeline: "Jul 2020 - Jul 2024",
            location: "Pune, India",
            schoolname: "Pimpri Chinchwad College of Engineering and Research, Ravet",
            gpa: "8.58",
        },
    ],
};


export default user;