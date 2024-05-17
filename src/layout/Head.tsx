import hero from "../assets/images/illustration-hero.svg";

export default function Head() {
  return (
    <main className="max-w-[1440px] max-sm:flex flex-col-reverse gap-10 lg:grid grid-cols-2 ">
      <div className="max-w-[720px] grid pt-10">
        <h1 className="text-3xl  lg:text-5xl px-10  font-bold darkgrey ">
          A Simple Bookmark Manager
        </h1>
        <p className="pt-2 grey px-5 lg:px-10 ">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex gap-4 mt-3  px-10">
          <button className="max-sm:w-[150px] lg:w-[200px] h-[50px] rounded-sm text-white bg-blue-500 
          hover:bg-[transparent] border-[1px] border-blue-500 hover:text-blue-500">
            Get it on Chrome
          </button>
          <button className="max-sm:w-[150px] lg:w-[200px] h-[50px] rounded-sm bg-gray-200
          hover:bg-[transparent] hover:border-[1px] border-gray-500 hover:text-gray-500">
            Get it on Firefox
          </button>
        </div>
      </div>
      {/* Image and blue background */}
      <div className="max-w-[720px] relative ">
        <img src={hero} alt="image" className="z-10 w-[500px] object-cover" />
        <div className="w-[300px] h-[200px] bg-blue-700 rounded-l-[100px] absolute right-4 bottom-[0px] z-[-10]"></div>
      </div>
    </main>
  );
}
