import Image from "next/image";

function Avatar() {
  return (
    <div className=" ml-[2%] pt-72 absolute">
      <div className="max-w-[20%] invisible md:visible fixed">
        <Image
          className="w-36 h-44 rounded-full ml-10"
          src="/amjadprofile3.jpg"
          width={300}
          height={300}
          alt="Picture of the author"
        />
        <div>
        <a href="mailto:amjadsharafeddien@gmail.com" className="email text-center font-mono text-lime-600 2xs:text-sm pt-4 pr-2">
          {" "}
          amjadsharafeddien@gmail.com
        </a>
        </div>
        <p className="address text-center font-mono text-lime-600 2xs:text-sm pt-2 pr-2">
          {" "}
          Nijmegen, Netherlands
        </p>
      </div>
    </div>
  );
}

export default Avatar;
