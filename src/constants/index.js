import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    robofriend,
    starwars,
    gameDatabase,
    threejs,
    tec,
    angular,
    mssql,
    cSharp,
    kali
  } from "../assets";

  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Desktop App Developer",
      icon: mobile,
    }
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Angular JS",
      icon: angular,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MSSQL",
      icon: mssql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "C#",
      icon: cSharp,
    },
    {
      name: "Kali",
      icon: kali,
    },
  ];
  
  const experiences = [{
    title: "C# (.NET Framework, .NET Core, ASP.NET, WPF)",
    company_name: "TEC P1",
    icon: tec,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - July 2022",
    points: [
      "Worked with console apps from basic functionality to retrieving and displaying datas from SQL database",
      "Worked with ASP.NET Core Web App MVC to create fullstack web applications with MSSQL Database",
      "Created numerous API with .NET Core Web API.",
      "Have experience with creating WPF and Winforms applications",
    ],
  },
    {
      title: "React.js",
      company_name: "TEC P2",
      icon: tec,
      iconBg: "#383E56",
      date: "August 2022 - June 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Created React apps with implementation of RESTful API",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Decent knowledge of using threejs with React"
      ],
    },
    
    {
      title: "Angular.js",
      company_name: "TEC P3",
      icon: tec,
      iconBg: "#383E56",
      date: "July 2023 - now",
      points: [
        "Decent knowledge in Typescript",
        "Recently started working on Angular projects"
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "Robo Friends",
      description:
        "A beginner-friendly, responsive and fun web app that allows users to filter through the robots.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "tachyons",
          color: "pink-text-gradient",
        },
      ],
      image: robofriend,
      source_code_link: "https://github.com/ZeroTwo5166/robofriends",
      demo_link: "https://zerotwo5166.github.io/robofriends/"
    },
    {
      name: "Starwars",
      description:
        "A cool website for Starwars fans that has all the information about people, planets, vehicles, etc.",
      tags: [
        {
          name: "vanillaJS",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: starwars,
      source_code_link: "https://github.com/ZeroTwo5166/Starwars_api",
      demo_link: "https://zerotwo5166.github.io/Starwars_api/",
    },
    {
      name: "Game Database",
      description:
        "An angular website that has informations and images of more than 500000+ games!!!",
      tags: [
        {
          name: "angular",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: gameDatabase,
      source_code_link: "https://github.com/ZeroTwo5166/ng_game_database",
      demo_link: "https://zerotwo5166.github.io/ng_game_database/"
    },
  ];
  
  export { services, technologies, experiences, projects };