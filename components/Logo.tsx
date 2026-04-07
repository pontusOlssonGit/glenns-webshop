// `´nb@NB${}[]\|| `${}`
import Image from "next/image";
import someImage from "../assets/logo.png";

export default function Logo() {
  return (
    <section>
      {/* <h2 className="font-roboto text-2xl">Logo</h2> */}
      <div className="flex flex-wrap">
        <Image
          loading="eager"
          src={someImage}
          alt="logo of the company Glenns"
          width={500}
          height={500}
          className="flex flex-wrap w-20 h-20 m-0 p-0"
        />
        <div className="flex flex-col align-bottom justify-end ml-0 pl-0 pb-1 font-serif text-2xl text-gray-500 text-shadow-[0_2px_4px_rgb(0_0_0_/0.5)]">
          lenns
        </div>
      </div>
    </section>
  );
}
