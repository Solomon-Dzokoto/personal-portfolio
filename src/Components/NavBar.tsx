import { data } from '../data/NavData';
import useScreen from "../Hooks/useScreen";
import { useEffect, useState } from 'react';

const NavBar = () => {
  const [onScroll, setOnScroll] = useState<boolean>(true);
  const width = useScreen();

  useEffect(() => {
    let scrollTimeout: number 

    const handleScroll = () => {
      setOnScroll(true);

      if (scrollTimeout) clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        setOnScroll(false);
      }, 3000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <nav>
      <ul
        className={`fixed ${onScroll ? "translate-y-0 md:translate-y0" : "translate-y-[55rem] md:translate-y-0"} 
        z-50 md:relative md:bottom-0 md:left-0 bottom-4 left-1/4 bg-primary py-2 
        rounded-full flex items-center gap-2 px-8 transition-transform duration-300`}
      >
        {data.map((item) => (
          <a
            href={`#${item.name}`}
            className="flex cursor-pointer mt-2 flex-col items-center"
            key={item.id}
          >
            {width < 769 && <span className="text-[1.3rem]">{item.icon}</span>}
            <span
              style={{
                textTransform: "uppercase",
                fontSize: "clamp(.6rem,2vw,1.2rem)",
              }}
              className="transition-all md:hover:underline md:hover:underline-offset-8"
            >
              {item.name}
            </span>
          </a>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
