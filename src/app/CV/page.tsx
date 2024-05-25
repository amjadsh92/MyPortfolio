import { ReactNode } from "react"

function MyCV(){

return(
 <div className="mt-32">  
<Section>
      <Part status={"date"}>Date</Part>
      <Part status={"title"}>Title</Part>
      <Part status={"content"}>Content</Part>

</Section> 

<Section>
      <Part status={"date"}>Date</Part>
      <Part status={"title"}>Title</Part>
      <Part status={"content"}>Content</Part>

</Section>    

</div> 

)



}



export default MyCV



export function Section({children}: {children: ReactNode}){

    return(
        <div className="ml-4">
        <section className="border border-black flex w-2/5 mt-8 ml-96">
            {children}
        </section>
        </div>
 )



}


export function Part({status,children}: {status: string, children: ReactNode}){
    switch (status) {
        case "date":
          return <h2 className="font-sans font-semibold text-slate-600">{children}</h2>;
        case "title":
          return <h2 className="pl-28 font-sans font-semibold text-stone-800">{children}</h2>;
        case "content":
          return <h2 className="pt-8 -ml-8 font-sans font-semibold text-slate-600">{children}</h2>;
        
        default:
          throw Error('Unknown level: ' + status);
      }



}