import I from "next/image";

const Image = ({ src, alt, ...props }) => {
  return <Image src={src} alt={alt} {...props} />;
};

export default Image;
