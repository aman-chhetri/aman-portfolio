import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "aman kshetri",
  initials: "AK",
  url: "https://amankshetri.com.np",
  location: "Kathmandu, Nepal",
  locationLink: "",
  description:
    "software engineer | ai & ml | web dev",
  summary:
    "Hey! I'm Aman Kshetri, a recent Computer Science graduate 🎓, currently working in the fields of Machine Learning and Web Development. I am mostly active within the AI/ML, Python, & Web Dev communities. \n\n I love contributing to open-source projects and have actively participated in multiple hackathons, where I collaborate, build, and solve real-world problems. \n\n I also write blogs on AI, ML, and other tech stuff. You can check them out here: [Blogs](/blog) ✍️ \n\n I'm currently available for internships, full-time opportunities, and freelance projects. If you're looking for someone passionate, skilled, and ready to contribute, I'm here to help bring your ideas to life! \n\n You can find my [Resume](https://tinyurl.com/amanresume101)📄 here! 👈",
  avatarUrl: "/pfp.jpg",
  skills: [
  "HTML",
  "CSS",
  "JavaScript",
  "Bootstrap",
  "React.js",
  "Python",
  "C++",
  "C",
  "Java",

  "Numpy",
  "Pandas",
  "TensorFlow",
  "Scikit-Learn",
  "PyTorch",
  "Keras",

  "MongoDB",
  "MySQL",
  "Supabase",

  "Node.js",
  "Express.js",
  "Flask",
  "Django",

  "Figma",
  "Adobe Photoshop",

  "Linux",
  "VS Code",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "chhetryaman3@gmail.com",
    tel: "+91 93874 85916",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/aman-chhetri",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/amankshetri",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/iamamanchhetri",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:chhetryaman3@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

    // ---------- Work Experience -----------


  work: [
    {
      company: "UIUC+ Summer Undergraduate Research - SE",
      href: "https://illinois.edu/",
      badges: [],
      location: "Remote",
      title: "Summer Research Intern",
      logoUrl: "https://res.cloudinary.com/dqbj2zfme/image/upload/v1752324325/blogs/portfolio_website/logo/uiuc_logo_r6d5kf.png",
      start: "Apr 2025",
      end: "Present",
      description:
        "Worked on a SE research track, reviewing top-tier conference papers (ICSE, FSE, ASE), and led weekly Zoom presentations and discussions to share insights about the papers with the team.",
    },

  ],

  // ---------- Educations -----------

  education: [
    {
      school: "Amrita Vishwa Vidyapeetham",
      href: "https://www.amrita.edu/",
      degree: "Bachelor of Technology in Computer Science (CSE)",
      logoUrl: "https://res.cloudinary.com/dqbj2zfme/image/upload/v1752307378/blogs/portfolio_website/logo/amrita_logo_zqssmm.jpg",
      start: "2021",
      end: "2025",
    },
    {
      school: "New Capital Secondary School",
      href: "https://edusanjal.com/college/new-capital-college/",
      degree: "Grade 12 - Higher Secondary Education (PCM)",
      logoUrl: "https://res.cloudinary.com/dqbj2zfme/image/upload/v1752324324/blogs/portfolio_website/logo/ncc_logo_xuqrg7.jpg",
      start: "2018",
      end: "2020",
    },

  ],

  // ---------- Projects -----------

  projects: [
    {
      title: "TLDR.ai",
      href: "https://text-summarizer-seven-ecru.vercel.app/",
      dates: "May 2025 - June 2025",
      active: true,
      description:
        "A modern AI-powered text summarization tool that effortlessly condenses articles, blogs, research papers, and documents into clear, easy-to-read summaries.",
      technologies: [
        "React.js",
        "Vite",
        "Chakra UI",
        "PDF.js",
        "OpenRouter API",
        "React Icons",
      ],
      links: [
        {
          type: "Demo",
          href: "https://text-summarizer-seven-ecru.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Code",
          href: "https://github.com/aman-chhetri/TLDR.ai",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dqbj2zfme/video/upload/v1752256077/blogs/portfolio_website/projects/tldr_ai_m0iksc.mp4",
    },

    // ---------- Project 2 - DropVault ---------

    {
      title: "DropVault",
      href: "https://dropvault.netlify.app/",
      dates: "Apr 2025 - May 2025",
      active: true,
      description:
        "A modern, secure, and user-friendly web application for personal file storage. Effortlessly upload, manage, and access your files from anywhere, with privacy and security at the core.",
      technologies: [
        "React.js",
        "Vite",
        "Typescript",
        "Tailwind CSS",
        "Supabase",
        "Netlify",
        "Lucide React",

      ],
      links: [
        {
          type: "Demo",
          href: "https://dropvault.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Code",
          href: "https://github.com/aman-chhetri/DropVault",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://res.cloudinary.com/dqbj2zfme/video/upload/v1752291228/blogs/portfolio_website/projects/dropvault_ke9tts.mp4",
    },


    // ----------- Project 3 - OsteoVision -----------

    {
      title: "OsteoVision",
      href: "https://github.com/aman-chhetri/OsteoVision",
      dates: "July 2024 - Oct 2024",
      active: true,
      description:
        "An advanced machine learning tool designed for the detection and measurement of bone fractures in X-ray images with high precision using the YOLOv8 model.",
      technologies: [
        "Streamlit",
        "Python",
        "Numpy",
        "Pandas",
        "Kaggle",
        "TensorFlow",
        "Scikit-Learn",
      ],
      links: [
        {
          type: "Code",
          href: "https://github.com/aman-chhetri/OsteoVision",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://res.cloudinary.com/dqbj2zfme/video/upload/v1752259293/blogs/portfolio_website/projects/osteovision_aatw7s.mp4",
    },

    // ------------ Project 4 - MediCare ------------

    {
      title: "MediCare",
      href: "https://medicare-v1.streamlit.app/",
      dates: "June 2024 - July 2024",
      active: true,
      description:
        "A sophisticated machine learning model capable of predicting disease risk factors based on 15+ health parameters, allowing healthcare providers to focus on patient care.",
      technologies: [
        "Streamlit",
        "Python",
        "Numpy",
        "Pandas",
        "Kaggle",
        "TensorFlow",
        "Scikit-Learn",
      ],
      links: [
        {
          type: "Demo",
          href: "https://medicare-v1.streamlit.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Code",
          href: "https://github.com/aman-chhetri/MediCare",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://res.cloudinary.com/dqbj2zfme/video/upload/v1752256910/blogs/portfolio_website/projects/medicare_1_lv9kpl.mp4",
    },

    // ------------- Project 5 - Movix App -------------

    {
      title: "Movix App",
      href: "https://movix-site.vercel.app/",
      dates: "Dec 2023 - Jan 2024",
      active: true,
      description:
        "A fully responsive web application built using React and Redux that provides users with information about movies, plot summaries, trailers, ratings, cast, and crew details using TMDB API.",
      technologies: [
        "React.js",
        "Vite",
        "Javascript",
        "Tailwind CSS",
        "Vercel",
        "TMDB API",
      ],
      links: [
        {
          type: "Demo",
          href: "https://movix-site.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Code",
          href: "https://github.com/aman-chhetri/movix-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dqbj2zfme/video/upload/v1752257301/blogs/portfolio_website/projects/movix_app_dqoenk.mp4",
    },

    // ------------ Project 6 - TripZen ------------

    {
      title: "TripZen",
      href: "https://aman-chhetri.github.io/TripZen/",
      dates: "May 2023 - June 2023",
      active: true,
      description:
        "A comprehensive travel planner platform enabling easy journey creation with advanced destination search, date selection, tour package options, and a trip photo gallery for a better user experience.",
      technologies: [
        "Javascript",
        "CSS",
        "HTML",
        "Bootstrap",
      ],
      links: [
        {
          type: "Demo",
          href: "https://aman-chhetri.github.io/TripZen/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Code",
          href: "https://github.com/aman-chhetri/TripZen",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://res.cloudinary.com/dqbj2zfme/video/upload/v1752289454/blogs/portfolio_website/projects/tripzen_pf157o.mp4",
    },
  ],

  // ---------- Certifications -----------
  hackathons: [
    {
      title: "AWS AI & ML Scholarship Program",
      dates: "",
      location: "Amazon (AWS), Udacity",
      description:
        "Received a valuable sponsorship worth USD 4,000 from Amazon Web Services - AWS for enrollment in the AI Programming Nanodegree Course.",
      image:
        "https://res.cloudinary.com/dqbj2zfme/image/upload/v1752306521/blogs/portfolio_website/logo/aws_logo_ske8td.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [        
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://res.cloudinary.com/dqbj2zfme/image/upload/v1752305190/blogs/portfolio_website/certifications/aws_t1jsiv.png",
        },
      ],
    },

    // ------------ Certification 2 - Google Cloud Arcade Recipient ------------

    {
      title: "Google Cloud Arcade Recipient",
      dates: "",
      location: "Google",
      description:
        "Received a valuable sponsorship worth USD 4,000 from Amazon Web Services - AWS for enrollment in the AI Programming Nanodegree Course.",
      image:
        "https://res.cloudinary.com/dqbj2zfme/image/upload/v1752306520/blogs/portfolio_website/logo/google_logo_gsbu4x.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://res.cloudinary.com/dqbj2zfme/image/upload/v1752305219/blogs/portfolio_website/certifications/arcade_nugatn.png",
        },
      ],
    },

        // ------------ Certification 3 - Machine Learning Specialization ------------

    {
      title: "Machine Learning Specialization",
      dates: "",
      location: "Deeplearning.ai, Standford, Coursera",
      description:
        "Received a valuable sponsorship worth USD 4,000 from Amazon Web Services - AWS for enrollment in the AI Programming Nanodegree Course.",
      image:
        "https://res.cloudinary.com/dqbj2zfme/image/upload/v1752307615/blogs/portfolio_website/logo/deeplearning_ai_t2pq4w.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [        
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://res.cloudinary.com/dqbj2zfme/image/upload/v1752305220/blogs/portfolio_website/certifications/machine_learning_ck80al.jpg",
        },
      ],
    },

        // ------------ Certification 4 - Front End Development Libraries ------------

        {
      title: "Front End Development Libraries",
      dates: "",
      location: "freeCodeCamp",
      description:
        "Received a valuable sponsorship worth USD 4,000 from Amazon Web Services - AWS for enrollment in the AI Programming Nanodegree Course.",
      image:
        "https://res.cloudinary.com/dqbj2zfme/image/upload/v1752306520/blogs/portfolio_website/logo/freeCodeCamp_logo_uqxduy.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [        
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://res.cloudinary.com/dqbj2zfme/image/upload/v1752305219/blogs/portfolio_website/certifications/front_end_bdbkqm.jpg",
        },
      ],
    },

    // ------------ Certification 5 - AWS Academy Cloud Foundations ------------

      {
      title: "AWS Academy Cloud Foundations",
      dates: "",
      location: "Amazon (AWS)",
      description:
        "Received a valuable sponsorship worth USD 4,000 from Amazon Web Services - AWS for enrollment in the AI Programming Nanodegree Course.",
      image:
        "https://res.cloudinary.com/dqbj2zfme/image/upload/v1752306521/blogs/portfolio_website/logo/aws_logo_ske8td.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [        
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://res.cloudinary.com/dqbj2zfme/image/upload/v1752309203/blogs/portfolio_website/certifications/cloud_uv9ebw.jpg",
        },
      ],
    },

    // ------------ Certification 6 - Microsoft Learn AI Skills Challenge ------------

    {
      title: "Microsoft Learn AI Skills Challenge",
      dates: "",
      location: "Microsoft",
      description:
        "Received a valuable sponsorship worth USD 4,000 from Amazon Web Services - AWS for enrollment in the AI Programming Nanodegree Course.",
      image:
        "https://res.cloudinary.com/dqbj2zfme/image/upload/v1752307490/blogs/portfolio_website/logo/microsoft_nub1bz.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [        
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://res.cloudinary.com/dqbj2zfme/image/upload/v1752309419/blogs/portfolio_website/certifications/microsoft_learn_nqi6gu.jpg",
        },
      ],
    },

    // ------------ Certification 7 - Z3R0 - Capture the Flag (CTF) ------------

    {
      title: "Z3R0 - Capture the Flag (CTF)",
      dates: "",
      location: "Amrita University",
      description:
        "Received a valuable sponsorship worth USD 4,000 from Amazon Web Services - AWS for enrollment in the AI Programming Nanodegree Course.",
      image:
        "https://res.cloudinary.com/dqbj2zfme/image/upload/v1752307378/blogs/portfolio_website/logo/amrita_logo_zqssmm.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [        
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://res.cloudinary.com/dqbj2zfme/image/upload/v1752305220/blogs/portfolio_website/certifications/tantrotsav_edm5hd.jpg",
        },
      ],
    },

    // ------------ Certification 8 - Ui-timate - UI Design Challenge ------------

    {
      title: "Ui-timate - UI Design Challenge",
      dates: "",
      location: "Cognizance, Amrita",
      description:
        "Received a valuable sponsorship worth USD 4,000 from Amazon Web Services - AWS for enrollment in the AI Programming Nanodegree Course.",
      image:
        "https://res.cloudinary.com/dqbj2zfme/image/upload/v1752307890/blogs/portfolio_website/logo/cognizance_amrita_nupjao.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [        
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://res.cloudinary.com/dqbj2zfme/image/upload/v1752305218/blogs/portfolio_website/certifications/ui_timate_eosgyo.jpg",
        },
      ],
    },

    // ------------ Certification 9 - Cepeheus - Capture the Flag (CTF) ------------

    {
      title: "Cepeheus - Capture the Flag (CTF)",
      dates: "",
      location: "IIT Goa",
      description:
        "Received a valuable sponsorship worth USD 4,000 from Amazon Web Services - AWS for enrollment in the AI Programming Nanodegree Course.",
      image:
        "https://res.cloudinary.com/dqbj2zfme/image/upload/v1752308552/blogs/portfolio_website/logo/iitgoa_logo_o6etbl.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [        
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://res.cloudinary.com/dqbj2zfme/image/upload/v1752309206/blogs/portfolio_website/certifications/cepheus_ccrbnz.jpg",
        },
      ],
    },

    // ------------ Certification 10 - Hacktoberfests ------------

    {
      title: "Hacktoberfests",
      dates: "",
      location: "Github",
      description:
        "Received a valuable sponsorship worth USD 4,000 from Amazon Web Services - AWS for enrollment in the AI Programming Nanodegree Course.",
      image:
        "https://res.cloudinary.com/dqbj2zfme/image/upload/v1752308932/blogs/portfolio_website/logo/hacktoberfest_logo_hmxnbx.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [        
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://res.cloudinary.com/dqbj2zfme/image/upload/v1752309204/blogs/portfolio_website/certifications/hacktoberfest_gq2cud.png",
        },
      ],
    },

  ],
} as const;
