import Header from "./Header";

function Hobbies() {
  return (
    <div className="pb-16">
      
       <Header>Hobbies</Header> 
      

      <ul className="group pt-8 ml-[412px] space-y-5 text-gray-500 list-disc marker:text-blue-600">
        <li className="group-hover:brightness-200">
          {" "}
          Gym, cycling, reading and writing scientific documents{" "}
        </li>
      </ul>
    </div>
  );
}

export default Hobbies;
