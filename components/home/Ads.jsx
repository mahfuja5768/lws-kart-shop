import Image from "next/image";
import offer from "../../public/offer.jpg";

const Ads = () => {
  return (
    <div className="container py-16">
      <a href="#">
        <Image src={offer} alt="ads" class="w-full" />
      </a>
    </div>
  );
};

export default Ads;
