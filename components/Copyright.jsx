import Image from "next/image";
import methods from "../public/methods.png";

const Copyright = () => {
  return (
    <div className="bg-gray-800 py-4">
      <div className="container flex items-center justify-between">
        <p className="text-white">&copy; TailCommerce - All Right Reserved</p>
        <div>
          <Image src={methods} alt="methods" className="h-5" />
        </div>
      </div>
    </div>
  );
};

export default Copyright;
