import { useState } from "react";
import arrow from "../assets/images/icon-arrow.svg";
import orange from "../assets/images/orange.svg";
import { click } from "../layout/index";

export default function AskedCard() {
    const [openItems, setOpenItems] = useState<boolean[]>(new Array(click.length).fill(false));

    function handleClick(index: number) {
        const newOpenItems = [...openItems];
        newOpenItems[index] = !openItems[index];
        setOpenItems(newOpenItems);
    }

    return (
        <main className="max-w-[500px] lg:w-[500px] ">
            {click.map((item, index) => (
                <div key={index}>
                    <div className="w-full h-[1px] bg-gray-500 "></div>
                    <div className="w-full flex justify-between items-center grey pt-4">
                        <p>{item.title}</p>
                        <div className="cursor-pointer" onClick={() => handleClick(index)}>
                            {!openItems[index] ? (
                                <img src={arrow} alt="arrow" />
                            ) : (
                                <img src={orange} alt="close" className="rotate-180" />
                            )}
                        </div>
                    </div>
                    <p className={openItems[index] ? "block" : "hidden"}>{item.text}</p>
                    
                </div>
            ))}
        </main>
    );
}
