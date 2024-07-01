import Image from "next/image";

function Socialmedia() {
  return (
    <div className="mt-[20%] pb-[20%] flex">
      <a
        target="_blank"
        href="https://www.linkedin.com/in/amjad-sharafeddine-3968b911b/"
        className=" hover:scale-110"
      >
        <Image
          src="/linkedin.png"
          className="w-[25px] h-[25px] md:w-[30px] md:h-[30px]"
          width={30}
          height={30}
          alt="Linkedin"
        />
      </a>

      <a
        target="_blank"
        href="https://github.com/amjadsh92"
        className=" hover:scale-110 ml-[6%] mt-[-4px]"
      >
        <Image
          src="/github17.png"
          className="w-[40px] h-[40px] md:w-[45px] md:h-[45px]"
          width={45}
          height={45}
          alt="GitHub"
        />
      </a>
    </div>
  );
}

export default Socialmedia;
