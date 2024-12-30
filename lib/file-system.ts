type FileSystem = {
  about: {
    description: string[];
  };
  projects: {
    [key: string]: {
      description: string[];
      stack: string[];
      images: {
        src: string;
        desc: string[];
        alt: string;
      }[];
      link: string;
      timespan: number;
    };
  };
  certifications: {
    [key: string]: {
      description: string[]; // Make sure this is an array of strings
      issuedBy: string;
      date: string;
      credentialLink: string;
      gallery?: string[]; // Optional gallery
    };
  };
  
  contact: {
    email: string;
    [key: string]: any;
  };
};

export const fileSystem: FileSystem = {
  about: {
    description: [
      "I'm a backend developer and aspiring data scientist with a passion for creating impactful and user-centric applications. My experience spans across technologies like React, TypeScript, and Azure, as well as backend development with Python and C, enabling me to build robust and scalable solutions.",
      "Currently, I'm focusing on the intersection of artificial intelligence and cloud technologies, with a keen interest in exploring graph neural networks, pervasive sensing, and Internet of Things (IoT) applications. My goal is to contribute to innovative solutions that enhance connectivity, improve efficiency, and empower communities.",
    ]
  },
  projects: {
    wolverine_code_companion: {
      description: [
        "Wolverine Code Companion is a Visual Studio extension designed for entry-level CS students. It provides interactive tutorials and course-specific guidance by integrating LLM with syllabi for hands-on learning. The project focuses on enhancing coding confidence and simplifying complex concepts for beginners."
      ],
      stack: ['AWS', 'Python', 'Flask', 'JavaScript', 'HTML', 'CSS', 'SageMaker', 'Llama 3.1'],
      images: [],
      link: "https://github.com/Sidd-satish12/Wolverine-Code-Companion",
      timespan: 2024,
    },
    journalingo: {
      description: [
        "Journalingo is a web app for tracking emotional well-being through video entries. It employs OpenAI’s GPT-4, Whispr, and Hugging Face APIs for emotional analysis, with facial recognition technology providing nuanced insights. The app offers PDF reports and a user-friendly interface to engage users in monitoring their emotional health."
      ],
      stack: ['Google Cloud', 'MongoDB Atlas', 'Flask', 'Bootstrap', 'JavaScript', 'Auth0'],
      images: [],
      link: 'https://github.com/Swefton/Impact-AVS',
      timespan: 2024,
    },
    eco_intellisense: {
      description: [
        "EcoIntelliSense is a web app designed to promote sustainable practices in the construction industry. It integrates APIs and databases for efficient material selection and resource management, helping companies reduce their ecological footprint and embrace eco-friendly construction."
      ],
      stack: ['HTML', 'CSS', 'JavaScript', 'Flask', 'Auth0', 'Redis'],
      images: [],
      link: 'https://github.com/ShahViraj11/EcoIntelliSense',
      timespan: 2024,
    },
    jester_io: {
      description: [
        "Jester.io transforms educational lectures into engaging short clips for social media. By combining machine learning and video editing, the platform humorously reimagines content, enhancing accessibility and relatability. It has gained positive feedback for its creative approach to education."
      ],
      stack: ['HTML', 'Swift', 'Dart', 'Ruby', 'Kotlin', 'Objective-C', 'Python'],
      images: [],
      link: 'https://github.com/ShahViraj11/jester',
      timespan: 2024,
    },
  },

  certifications: {
    "Azure AI Fundamentals": {
      description: ["A certification focused on AI and machine learning concepts using Azure."],
      issuedBy: "Microsoft",
      date: "2024-06-01",
      credentialLink: "https://learn.microsoft.com/api/credentials/share/en-gb/ShahViraj-4637/EFE422066A64298?sharingId=4C3D127B723CB7AE",
      gallery: ["/public/images/project1/1.jpg"], // Example gallery
   
    },
    "Azure Fundamentals": {
      description: ["A certification that covers foundational knowledge of Azure services and cloud concepts."],
      issuedBy: "Microsoft",
      date: "2024-06-01",
      credentialLink: "https://learn.microsoft.com/api/credentials/share/en-us/ShahViraj-4637/5FA6F3A520979F11?sharingId=4C3D127B723CB7AE",
      gallery: ["/public/images/project1/1.jpg"],
  
    },
    "Kubernetes and Cloud Native Associate (KCNA)": {
      description: ["A certification validating foundational knowledge of Kubernetes and Cloud Native technologies."],
      issuedBy: "Cloud Native Computing Foundation (CNCF)",
      date: "2024-07-01",
      credentialLink: "https://www.credly.com/badges/12eb6166-7cd3-4e4c-8069-4a2801a70de8/public_url",
      gallery: ["/public/images/project1/1.jpg"],
   
    },
  },
  
  
  contact: {
    email: 'shahvira@msu.edu',
    'contact.sh': '',
  }
}
