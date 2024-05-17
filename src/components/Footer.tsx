import bookmark2 from "../assets/images/bookmark.svg";
import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
export default function Footer() {
  return (
    <footer className="max-w-[1440px] max-sm:grid m-auto lg:flex items-baseline justify-between py-5  px-10  bg-hsl-229-31-21">
<div className="max-sm:grid justify-center lg:flex items-center gap-4 ">
    <img src={bookmark2} alt="" />
    <ul className="max-sm:grid lg:flex gap-5 items-center justify-center text-white cursor-pointer">
         <li className="hover:text-orange-700">Features</li>
          <li className="hover:text-orange-700"> Pricing</li>
          <li  className="hover:text-orange-700">Contact</li>
    </ul>
</div>


<div className="flex justify-center gap-5 pt-10 ">
            <img src={facebook} alt="facebook-logo" />
            <img src={twitter} alt="twitter-logo" />
          </div>
    </footer>
  )
}
