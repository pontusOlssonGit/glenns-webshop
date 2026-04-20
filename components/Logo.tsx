// `´nb@NB${}[]\|| `${}`
import Image from "next/image";
import someImage from "../assets/logo.png";

export default function Logo() {
  return (
    <section>
      {/* <h2 className="font-roboto text-2xl">Logo</h2> */}
      <div className="flex justify-content align-items align-text-bottom justify-start flex-wrap h-18 w-37 border-2 border-gray-200 rounded-lg bg-gray-300 p-1">
        <Image
          loading="eager"
          src={someImage}
          alt="logo of the company Glenns"
          width={400}
          height={400}
          className="flex flex-wrap w-16 h-16 m-0 p-0"
        />
        <div className="flex flex-col align-bottom justify-end pb-0 ml-0 pl-0 font-serif text-2xl text-gray-500 text-shadow-[0_2px_4px_rgb(0_0_0_/0.5)]">
          lenns
        </div>
      </div>
    </section>
  );
}
