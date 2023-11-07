import { useState } from "react";
import { FormEvent } from "react";
import ProductCard from "./components/Productcard";
import Modal from "./components/UI/Modal";
import { formInputsList, productList } from "./data";
import Buttom from "./components/UI/Buttom";
import Input from "./components/UI/Input";
import { ChangeEvent } from "react";
import { IProduct } from "./interfaces";
import { productValidation } from "./validation";

export function App() {
  const defaultProductOpj = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: { name: "", imageURL: "" },
  };
  // -----states-------------
  const [product, setProduct] = useState<IProduct>(defaultProductOpj);
  const [isOpen, setIsOpen] = useState(false);

  // -----handeler-------------
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  const onChangHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
    // console.log(event);
  };
  // close
  const onCansel = () => {
    console.log("ddd");
    setProduct(defaultProductOpj);
    closeModal();
  };
  // submite
  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, price, imageURL } = product;
    const errors = productValidation({
      title,
      description,
      price,
      imageURL,
    });
    console.log(errors);
  };

  // -----render-------------
  // one render all product
  const renderProductListe = productList.map((product) => (
    <ProductCard key={product.id} prduct={product} />
  ));
  // cosund render all didteles in modal
  // معاها التايب بتاعها
  const renderFormInputList = formInputsList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label
        htmlFor={input.id}
        className="mb-[1px] text-sm font-medium text-gray-700"
      >
        {input.label}
      </label>

      <Input
        type={input.type}
        id={input.id}
        name={input.name}
        value={product[input.name]}
        onChange={onChangHandler}
      />
    </div>
  ));

  return (
    <main className="container mx-auto">
      <Buttom className="bg-indigo-700 hover:bg-indigo-800" onClick={openModal}>
        Add
      </Buttom>

      <div className="m-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductListe}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="Add New Product">
        <form className="space-y-3" onSubmit={submitHandler}>
          {renderFormInputList}
          <div className="flex items-center space-x-3">
            <Buttom className="bg-indigo-700 hover:bg-indigo-800">
              Submet
            </Buttom>
            <Buttom
              className="bg-gray-500 hover:bg-gray-700"
              onClick={onCansel}
            >
              Cancel
            </Buttom>
          </div>
        </form>
      </Modal>
    </main>
  );
}
