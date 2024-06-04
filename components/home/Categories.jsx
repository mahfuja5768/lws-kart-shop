import { getAllCategories } from "@/queries";
import Image from "next/image";
import Link from "next/link";

const Categories = async () => {
  const allCategories = await getAllCategories();

  return (
    <div className="container py-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        shop by category
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {allCategories?.map((category) => (
          <div
            key={category?.id}
            className="relative rounded-sm overflow-hidden group"
          >
            <Image
              src={category?.image}
              alt="category 1"
              className="w-full"
              width={100}
              height={100}
            />
            <Link
              href="#"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
            >
              {category?.category}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
