import Header from "./Header";

function Languages() {
  return (
    <>
      <Header> Languages </Header>
       
      <ul className="group pt-8 ml-[412px] space-y-5 text-gray-500 list-disc marker:text-blue-600">
        <li className="group-hover:brightness-200">Arabic(Native)</li>
        <li className="group-hover:brightness-200">English(fluent)</li>
        <li className="group-hover:brightness-200">Persiant(proficient)</li>
        <li className="group-hover:brightness-200">Dutch(basic)</li>
      </ul>
    </>
  );
}

export default Languages;
