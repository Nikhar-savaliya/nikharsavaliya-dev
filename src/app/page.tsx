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
      id: 1,
      title: "Updates 2k24",
      role: "Team Lead & Frontend developer",
      description:
        "Developed the official website for Update2k24 (college tech fest)",
      href: "https://github.com/nikhar-savaliya/update-2k24",
    },
    {
      id: 2,
      title: "Ping SaaS",
      description:
        "Developed fully functional SaaS that allows you to track your saas' events.",
      href: "https://github.com/Nikhar-savaliya/PingSaaS",
      role: "developer",
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
