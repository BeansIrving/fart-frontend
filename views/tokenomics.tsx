import Image from "next/image";
const Tokenomics = () => {
  return (
    <div className="flex justify-center items-center">
      <Image
        src={"/assets/tokenomics.png"}
        alt={"tokenomics"}
        height={1000}
        width={1000}
        className="w-full"
      />
    </div>
  );
};

export default Tokenomics;
