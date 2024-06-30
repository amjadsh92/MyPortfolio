import Image from "next/image";

function Avatar() {
  return (
    <div className="mt-[8%] pb-8 grid grid-cols-1 justify-items-center">
      <div>
        <Image
          src="/PortfolioAvatar.jpeg"
          width={300}
          height={300}
          alt="Picture of the author"
          className="xs:w-[130px] xs:h-[130px] 2xs:w-[110px] 2xs:h-[110px] 3xs:w-[105px] 3xs:h-[105px] w-[100px] h-[100px] rounded-full "
        />
      </div>
      <div>
        <a
          href="mailto:amjadsharafeddien@gmail.com"
          className="font-mono text-lime-600 text-[10px] 3x:text-xs xs:text-sm  pt-4"
        >
          amjadsharafeddien@gmail.com
        </a>
      </div>
      <div className="font-mono text-lime-600 text-[10px] 3x:text-xs xs:text-sm pt-2">
        Nijmegen, Netherlands
      </div>
    </div>
  );
}

export default Avatar;
