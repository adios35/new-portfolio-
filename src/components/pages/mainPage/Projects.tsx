import { useNavigate } from "react-router-dom";
import CustomButton from "../../Buttons/customBtnMain";
// import StaticBtn from "../../Buttons/staticBtn";
import ProjectCard, { Project } from "../../projectCard";
import Header from "../../typoghrapy/Header";

const projects: Project[] = [
  {
    name: "Social-Media-App",
    stacks: ["React", "Typesript", "Firebase", "Redux"],
    description:
      "This project aims to develop a modern and interactive social media application leveraging the power of React, Firebase, and TypeScript. The application focuses on providing users with a seamless and engaging platform for social networking while incorporating robust functionalities and a user-friendly interface.",
    gitHub: "https://github.com/adios35/socialMediaAppFireBase",
    url: "https://social-media-app-fire-base.vercel.app",
    imgs: [
      "https://res.cloudinary.com/dhvra0tqf/image/upload/v1700575610/projects/wmxdq6xl6d1gz02fphbz.png",
      "https://res.cloudinary.com/dhvra0tqf/image/upload/v1700575608/projects/vi43mlov0ns1rkrl7jrl.png",
      "https://res.cloudinary.com/dhvra0tqf/image/upload/v1700575605/projects/y8mtonz27lewxvfwqfta.png",
    ],
  },
  {
    name: "e-commerce",
    stacks: ["React", "Typesript", "Firebase", "Redux"],
    description:
      "This eCommerce project with user-friendly interface powered by React Typescript and Firebase. It encompasses essential functionalities like cart management, user registration, and login features. With real-time updates from Firebase, this platform ensures interactive UI, providing a seamless shopping experience for all users.",
    url: "https://e-commerce-firebase.netlify.app/",
    gitHub: "",
    imgs: [
      "https://res.cloudinary.com/dhvra0tqf/image/upload/v1700838692/ltp0sydo6k93orbinr6y.png",
      "https://res.cloudinary.com/dhvra0tqf/image/upload/v1700838692/ltp0sydo6k93orbinr6y.png",
      "https://res.cloudinary.com/dhvra0tqf/image/upload/v1700838691/artgpr5jraqsxhimb6zr.png",
      "https://res.cloudinary.com/dhvra0tqf/image/upload/v1700838591/oj6pq48ahxg8t2kokqom.png",
    ],
  },
];

const Projects = () => {
  const navigate = useNavigate();
  return (
    <>
      <hr className="divider my-8 border-t-2 border-dashed mx-auto  border-main-dark" />
      <section id="projects">
        <Header className="text-xl pt-[4px]">Projects</Header>
      </section>
      {projects.map((project, i) => (
        <ProjectCard key={i} project={project} id={i} />
      ))}
      <CustomButton onClick={() => navigate("/projects")}>
        More Projects
      </CustomButton>
    </>
  );
};

export default Projects;
