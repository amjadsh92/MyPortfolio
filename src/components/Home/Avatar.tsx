import Image from "next/image";

function Avatar() {
  return (
    <div className="block order-1 ml-[25%] 3xs:ml-[30%] 2xs:ml-[0%] 2xs:ml-auto  2xs:mr-[0%] pt-36 2x:order-2 ">
      <Image
        className="w-[120px] h-[120px] 3xs:w-[130px] 3xs:h-[130px] 2xs:w-[115px] 2xs:h-[115px] xs:w-[135px] xs:h-[135px] sm:w-[145px] sm:h-[145px] md:w-[165px] md:h-[165px] rounded-full"
        src="/HomeAvater.jpeg"
        width={300}
        height={300}
        alt="Picture of the author"
      />
    </div>
  );
}

export default Avatar;
