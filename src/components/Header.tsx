import { Icons } from "./Icons";

const Header = () => {
  const age = new Date().getFullYear() - 2003;

  return (
    <header className="pb-4 mt-16 px-4 lg:px-0">
      <h1 className="group relative overflow-hidden text-3xl text-white font-bold capitalize">
        <span aria-hidden className="inline-block">
          <p className="transition-all uppercase duration-300 ease-in-out group-hover:-translate-y-full">
            Nikhar Savaliya
          </p>
        </span>
        <p className="transition-all absolute left-0 top-0 duration-300 ease-in-out translate-y-full group-hover:translate-y-0 lowercase">
          @nikharx
        </p>
      </h1>
      <div className="flex capitalize justify-center items-start flex-col gap-1 mt-4 text-muted-foreground">
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
