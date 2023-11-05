import { IProduct } from "../interfaces";
import { textSlicer } from "../utils/Functions";
import Image from "./Image";
import Buttom from "./UI/Buttom";

interface Iprop {
  prduct: IProduct
}

const ProductCard = ({prduct}: Iprop) => {
    const {title,description,imageURL,price,colors,category}= prduct;
    return (
        <div className="max-w-sm border md:max-w-lg md:mx-0 mx-auto rounded-md p-2 flex flex-col">
            <Image classNm="rounded-md h-52 w-full lg:object-cover" alt="dd" imageUrl={imageURL}/>
            <h2>{title}</h2>
            <p>{textSlicer(description)}</p>
            <div className="flex items-center my-4 space-x-2">
                {/* {colors.map((col, index)=>(
                <span className={`w-5 h-5  rounded-full cursor-pointer ${col[index]}`} ></span>
                ))} */}



                <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer"></span>
                <span className="w-5 h-5 bg-yellow-600 rounded-full cursor-pointer"></span>
            </div>
            <div className="flex items-center justify-between"> 
                <span>${price}</span>
                <Image classNm="object-buttom w-10 h-10 rounded-full" alt={category.name} imageUrl={category.imageURL}/>
            </div>
            <div className="flex items-center justify-between space-x-2 mt-5">
                <Buttom className="bg-red-700 w-full"
                onClick={()=>{alert('ddd')}}
                > EDIT</Buttom>
                <Buttom className="bg-gray-700"> DELETE</Buttom>

            </div>
        </div>
    );
};

export default ProductCard;