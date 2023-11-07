export const productValidation = (product: {
  title: '';
  description: '';
  imageURL: '';
  price: '';
}) => {
  // returns and object (error objeect)


  const errors: {
    title: string,
    description: string,
    imageURL: string,
    price: string,
  } = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
  };

  const validURL = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imageURL);
  if (
    !product.title.trim() ||
    product.title.length < 10 ||
    product.title.length > 50
  ) {
    errors.title = "prodict title must de between 10 and charcters!";
  }
  if (
    !product.description.trim() ||
    product.description.length < 10 ||
    product.description.length > 50
  ) {
    errors.description = "prodict description must de between 10 and charcters!";
  }
  if(!product.imageURL.trim() || !validURL){
    errors.imageURL = "VAlid image url is required"
  }
  if(!product.price.trim() || isNaN(Number(product.price))){
    errors.price = "VAlid Price url is required"
  }

  return errors;
};
