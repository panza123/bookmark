import Broswercard from "../components/Broswercard";

export default function Browser() {
  return (
    <main className="max-w-[1440px] mt-10 flex flex-col items-center justify-center px-10 py-10">
      <h2 className="text-2xl lg:text-4xl text-center font-bold darkgrey">
        Download the extension
      </h2>
      <p className="grey text-center lg:w-[500px] pt-4" >
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.{" "}
      </p>
{/* {browserlist} */}
      <div className="w-full h-full grid lg:grid-cols-3 mt-3 items-center justify-center">
        <Broswercard />
      </div>
    </main>
  );
}
