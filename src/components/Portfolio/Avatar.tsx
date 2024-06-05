import Image from "next/image";




function Avatar() {
    return (
      <div className="pt-12 pb-16 ml-[550px]">
        <div>
          <Image
            className="w-[180px] h-[180px] rounded-full ml-14"
            src="/PortfolioAvatar.jpeg"
            width={300}
            height={300}
            alt="Picture of the author"
          />
          <p className="email font-mono text-lime-600 pt-4">
            {" "}
            Email: amjadsharafeddien@gmail.com
          </p>
          <p className="address font-mono text-lime-600 pt-2">
            {" "}
            Address: Nijmegen, Netherlands
          </p>
        </div>
      </div>
    );
  }
  
  export default Avatar;