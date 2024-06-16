import Image from "next/image";

function Avatar() {
  return (
    <div className="absolute right-0 pt-36">
      <Image
        className=" sm:w-[145px] sm:h-[145px] md:w-[165px] md:h-[165px] rounded-full"
        src="/HomeAvater.jpeg"
        width={300}
        height={300}
        alt="Picture of the author"
      />
    </div>
  );
}

export default Avatar;
