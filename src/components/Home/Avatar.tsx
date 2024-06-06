import Image from "next/image";

function Avatar() {
  return (
    <div className="pl-24 pt-36">
      <Image
        className=" w-[165px] h-[165px] rounded-full"
        src="/HomeAvater.jpeg"
        width={300}
        height={300}
        alt="Picture of the author"
      />
    </div>
  );
}

export default Avatar;
