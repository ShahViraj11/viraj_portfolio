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
      link: 'https://github.com/Sidd-satish12/Wolverine-Code-Companion',
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
  contact: {
    email: 'shahvira@msu.edu',
    'contact.sh': '',
  }
}
