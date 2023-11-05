interface Iprop {
  imageUrl: string;
  alt: string;
  classNm :string;
}

const Image = ({ imageUrl, alt,classNm}: Iprop) => {
  return (
    <img src={imageUrl} alt={alt} className={classNm}/>
  );
};

export default Image;


