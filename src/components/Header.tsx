import { Icons } from "./Icons";
import ScrambledText from "./ScrambledText";

const Header = () => {
  const age = new Date().getFullYear() - 2003;

  return (
    <header className="pb-4 mt-16 px-4 lg:px-0">
      <h1 className="text-3xl text-white font-bold capitalize">
        <span className="inline-block">
          <ScrambledText className="uppercase" text={"nikhar savaliya"} />
        </span>
      </h1>
      <div className="flex justify-center items-start flex-col gap-1 mt-4 text-muted-foreground">
        <span className="flex leading-7 items-center justify-start gap-2">
          <Icons.Location className="size-5" />
          Gujarat, India.
        </span>
        <span className="flex leading-7 items-center justify-start gap-2">
          <Icons.Work className="size-5" />
          student & Web developer
        </span>
      </div>
      <p className="mt-4 leading-7">
        I&apos;m a {age}-years-old web developer from India. I&apos;m currently
        chasing a degree in Computer Engineering and spending my days
        experimenting with web technologies to build engaging, efficient web
        applications
      </p>
    </header>
  );
};

export default Header;
