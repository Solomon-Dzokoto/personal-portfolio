import { useContext ,useEffect} from "react";
import { context } from "../Hooks/useContextApi";
import { IoCloseCircle } from "react-icons/io5";

const Modal = () => {
  const { isOpen, setIsOpen,primaryColor, setPrimaryColor,backgroundColor, setBackgroundColor } = useContext(context);

  useEffect(()=>{
    document.documentElement.style.setProperty("--primary", primaryColor);
    document.documentElement.style.setProperty("--background",backgroundColor);
  },[primaryColor,backgroundColor])

  const PrimaryColors = [
    { id: 1, color: "#28a745"},
    { id: 2, color: "#690cc6"},
    { id: 3, color: "#ffc107" },
    { id: 4, color: "#17a2b8" },
    { id: 5, color: "#2420B4" },
    { id: 6, color: "#C82583" },
    { id: 7, color: "#C72227" },
  ];

  const bgColor = ["white", "black"];

  const applyTheme = (basicColor: string, background: string) => {
    setPrimaryColor(basicColor);
    setBackgroundColor(background);
    if(background==="black"){
      document.documentElement.style.color="white"
    }else{
      return backgroundColor
    }
    document.documentElement.style.setProperty("--primary", basicColor);
    document.documentElement.style.setProperty("--background",background);
  };

  return (
    <>
      {isOpen ? (
        <section className="fixed bg-black bg-opacity-30 backdrop-blur-[1px] inset-0 grid place-content-center">
          <article className="relative w-10/12 rounded-3xl m-auto grid gap-4 text-center text-black bg-gray-100 shadow-md p-12">
            <IoCloseCircle
              onClick={() => setIsOpen((prev) => !prev)}
              className="absolute cursor-pointer -right-2 text-xl text-red-600 -top-2"
            />
            <h1 className="font-semibold text-2xl">Customize Your Theme</h1>
            <p>Change the Primary and Background color to your preference</p>

            <div className="btn">
              <h2 className="font-bold text-xl mb-4">Primary Color</h2>
              <ul className="flex items-center justify-center gap-2">
                {PrimaryColors.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => applyTheme(item.color, backgroundColor)}
                      style={{ background: item.color }}
                      className="p-4 rounded-full"
                    ></button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-bold text-xl mb-4">Background Color</h2>
              <ul className="flex gap-4 justify-center">
                {bgColor.map((item, i) => (
                  <li key={i}>
                    <button
                      onClick={() => applyTheme(primaryColor, item)}
                      style={{ background: item }}
                      className="py-4 px-12 rounded"
                    ></button>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </section>
      ) : null}
    </>
  );
};

export default Modal;
