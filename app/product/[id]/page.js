import { notFound } from "next/navigation"
import { metadata } from "@/app/layout"


export const generateMetadata = ({ params }) => {
    return {
      title: `Product ${params.id}`,
    };
  };
export default function ProductDetails({params}){
    if(parseInt(params.id) >50){
       notFound()
    }
    return(
<h1> product details  {params.id} </h1>
    )
}

//ici n8eb exercice je veux /product/1/comment/5
// comment faire ??????????? et comme affichage , comment5product3