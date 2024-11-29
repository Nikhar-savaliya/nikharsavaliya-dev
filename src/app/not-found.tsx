import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center">
      <div className="space-y-6 text-center">
        <pre className="font-mono text-accent whitespace-pre scale-75">
          {`
                                        
          444444444       000000000            444444444  
          4::::::::4     00:::::::::00         4::::::::4  
        4:::::::::4   00:::::::::::::00      4:::::::::4  
        4::::44::::4  0:::::::000:::::::0    4::::44::::4  
      4::::4 4::::4  0::::::0   0::::::0   4::::4 4::::4  
      4::::4  4::::4  0:::::0     0:::::0  4::::4  4::::4  
    4::::4   4::::4  0:::::0     0:::::0 4::::4   4::::4  
    4::::444444::::4440:::::0 000 0:::::04::::444444::::444
    4::::::::::::::::40:::::0 000 0:::::04::::::::::::::::4
    4444444444:::::4440:::::0     0:::::04444444444:::::444
              4::::4  0:::::0     0:::::0          4::::4  
              4::::4  0::::::0   0::::::0          4::::4  
              4::::4  0:::::::000:::::::0          4::::4  
            44::::::44 00:::::::::::::00         44::::::44
            4::::::::4   00:::::::::00           4::::::::4
            4444444444     000000000             4444444444

          `}
        </pre>
        <p className="text-muted-foreground text-xl font-bold uppercase">
          Oops! you are lost
        </p>
        <Link
          href="/"
          className="inline-block text-muted-foreground underline hover:text-accent transition-colors"
        >
          return to home page
        </Link>
      </div>
    </div>
  );
}
