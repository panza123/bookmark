import chrome from "../assets/images/logo-chrome.svg";
import firefox from "../assets/images/logo-firefox.svg";
import opera from "../assets/images/logo-opera.svg";
import dot from "../assets/images/bg-dots.svg";

export default function Broswercard() {
  return (
    <>
      {/* {chrome-box} */}
      <div className="max-w-[300px] flex flex-col py-4 items-center justify-center bg-slate-50 shadow-lg shadow-gray-400 rounded-md  cursor-pointer hover:scale-[1.1]">
        <img src={chrome} alt="" />
        <h6 className="text-3xl font-bold darkgrey pt-4">Add to Chrome</h6>
        <p className="pt-4 grey">Minimum version 62</p>
        <img src={dot} alt="" className="mt-4" />
        <button
          className="w-[200px] h-[50px] bg-blue-700 mt-4 text-white rounded-sm
    hover:bg-[transparent] border-[1px] border-blue-700 hover:text-blue-700
    "
        >
          Add & Install Extension
        </button>
      </div>
      {/* {firefox-box} */}

      <div className="max-w-[300px] flex flex-col py-4 items-center justify-center bg-slate-50 shadow-lg shadow-gray-400 mt-11 rounded-md  cursor-pointer hover:scale-[1.1] ">
        <img src={firefox} alt="" />
        <h6 className="text-3xl font-bold darkgrey pt-4">Add to Firefox</h6>
        <p className="pt-4 grey">Minimum version 55</p>
        <img src={dot} alt="" className="mt-4" />
        <button
          className="w-[200px] h-[50px] bg-blue-700 mt-4 text-white rounded-sm
    hover:bg-[transparent] border-[1px] border-blue-700 hover:text-blue-700
    "
        >
          Add & Install Extension
        </button>
      </div>
      {/* {operaminin-box} */}
      <div className="max-w-[300px] flex flex-col py-4 items-center justify-center bg-slate-50 shadow-lg shadow-gray-400 mt-[88px] rounded-md  cursor-pointer hover:scale-[1.1]">
        <img src={opera} alt="" />
        <h6 className="text-3xl font-bold darkgrey pt-4">Add to Opera</h6>
        <p className="pt-4 grey">Minimum version 46</p>
        <img src={dot} alt="" className="mt-4" />
        <button
          className="w-[200px] h-[50px] bg-blue-700 mt-4 text-white rounded-sm
    hover:bg-[transparent] border-[1px] border-blue-700 hover:text-blue-700
    "
        >
          Add & Install Extension
        </button>
      </div>
    </>
  );
}
