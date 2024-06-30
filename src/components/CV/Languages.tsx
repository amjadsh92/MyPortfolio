import Header from "./Header";

function Languages() {
  return (
    <>
      <Header> Languages </Header>

      <ul className="group ml-[3%] pt-8 space-y-5 text-gray-500 list-disc marker:text-blue-600 text-xs 3xs:text-sm 2xs:text-[13px] xs:text-sm md:text-base">
        <li className="group-hover:brightness-200">Arabic(Native)</li>
        <li className="group-hover:brightness-200">English(proficient)</li>
        <li className="group-hover:brightness-200">Persiant(proficient)</li>
        <li className="group-hover:brightness-200">Dutch(basic)</li>
      </ul>
    </>
  );
}

export default Languages;
