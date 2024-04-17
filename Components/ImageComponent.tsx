import Image from "next/image";

interface Props {
  src: string;
}

const ImageComponent = ({ src }: Props) => {
  const width = 480;
  const height = Math.ceil(width * 0.95);

  return (
    <div
      className="relative m-1 mt-10"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <Image
        alt="Picture of the author"
        src={src}
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default ImageComponent;
