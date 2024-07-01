import Header from "./Header";

function Hobbies() {
  return (
    <div className="pb-16">
      <Header>Hobbies</Header>

      <ul className="group ml-[3%] w-[75%] pt-8 space-y-5 text-gray-500 list-disc marker:text-blue-600 text-xs 3xs:text-sm 2xs:text-[13px] xs:text-sm md:text-base">
        <li className="group-hover:brightness-200">
          {" "}
          Gym, cycling, reading and writing scientific documents{" "}
        </li>
      </ul>
    </div>
  );
}

export default Hobbies;
