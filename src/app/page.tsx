import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionList, { SectionItem } from "@/components/SectionList";

export default function Home() {
  const workItems: SectionItem[] = [
    {
      title: "Webito Infotech",
      role: "MERN stack Intern",
      period: "aug 2024 - sep 2024",
      description:
        "Developed application using MERN stack. Implemented 2 Factor-Authenticatios and CRUD operations ",
      href: "/",
    },
    {
      title: "Freelancing",
      role: "web developement",
      period: "may 2023 - aug 2023",
      description: "Developed A VS code extension for a client",
      href: "/",
    },
  ];

  const projectItems = [
    {
      title: "updates 2k24",
      role: "Team Lead & Frontend developer",
      description:
        "Led the frontend development of the website for the college tech event Update2k24 in collaboration with the web development team",
      href: "https://coupdates.in",
    },
    {
      title: "Pearl",
      role: "develoeper",
      description: "Mern stack blog website inspired by Medium.com",
      href: "https://github.com/Nikhar-savaliya/Pearl",
    },
  ];

  return (
    <>
      <Header />
      <SectionList title="work" items={workItems} />
      <SectionList
        title="projects"
        items={projectItems}
        viewAllHref="/projects"
        viewAllText="all projects"
      />
      <Footer />
    </>
  );
}
