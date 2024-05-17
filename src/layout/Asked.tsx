import AskedCard from "../components/AskedCard";


export default function Asked() {
  return (
    <main className="max-w-[1440px] flex flex-col items-center justify-center  py-10">
<h2 className="text-2xl lg:text-4xl text-center font-bold darkgrey"  > Frequently Asked Questions</h2>
<p className="grey text-center text-[14px] lg:w-[500px] pt-4" > Here are some of our FAQs. If you have any other questions you’d like 
  answered please feel free to email us.</p>
{/* {box} */}
<div className="max-w-[500px] grid  mt-3 ">
    <AskedCard/>
    <button className="bg-blue-700 h-[50px] mt-4 text-white rounded-sm m-auto text-center
      hover:bg-[transparent] border-[1px] border-blue-700 hover:text-blue-700 ">
                  More info
                </button>
</div>

    </main>
  )
}
