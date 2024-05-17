import { useState } from "react";
import { data } from "./index";

export default function Body() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clickedButtonIndex, setClickedButtonIndex] = useState(null);

  const handleClick = (index: any) => {
    setCurrentIndex((currentIndex + 1) % data.length);
    setClickedButtonIndex(index);
    // Reset clickedButtonIndex after a delay (e.g., 1 second)
    setTimeout(() => {
      setClickedButtonIndex(null);
    }, 1000);
  };

  return (
    <main className="max-w-[1440px]">
      <div className="w-full flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl lg:text-4xl font-bold darkgrey">Features</h2>
        <p className="text-center px-10 grey pt-10 lg:w-[500px] ">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      {/* Button links */}
      <div className="w-[50%] grid lg:grid-cols-3 m-auto items-center justify-between mt-5 border-b-[1px] border-gray-400">
        {data.map((item, index) => (
          <button
            key={index}
            className={`bg-[transparent] w-[220px] text-xl 
          ${index === clickedButtonIndex ? "  text-orange-400" : "darkgrey"}`}
            onClick={() => handleClick(index)}
          >
            {item.title}
          </button>
        ))}
      </div>
      {/* Display of the images */}
      <div className="max-w-[1440px] flex flex-shrink-0 mt-3">
        {data.map((item, index) => (
          <div
            className="w-full h-full flex shrink-0"
            key={index}
            style={{ display: index === currentIndex ? "block" : "none" }}
          >
            <div className="w-full h-full grid lg:grid-cols-2 px-10">
              {/* Image and blue background */}
              <div className="relative max-w-[720px] ">
                <img
                  src={item.img}
                  alt=""
                  className="z-10 w-[400px] object-fill"
                />

                <div
                  className="w-[350px] h-[200px] bg-blue-700 py-10
                
                 rounded-r-[100px] absolute left-[-30px] bottom-[-50px] z-[-10]"
                ></div>
              </div>

              {/* Text content */}
              <div className="flex flex-col justify-center max-w-[720px] mt-11 ">
                <h4 className="text-2xl lg:text-4xl darkgrey font-bold">
                  {item.title}
                </h4>
                <p className="grey pt-4 lg:w-[500px]">{item.text}</p>
                <button className="bg-blue-700 mt-2 text-white rounded-sm  hover:bg-[transparent] border-[1px] border-blue-700 hover:text-blue-700 ">
                  More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
