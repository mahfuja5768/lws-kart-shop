import Image from "next/image";
import Link from "next/link";
import sofa from "../public/sofa.svg";
import terrace from "../public/terrace.svg";
import bed from "../public/bed.svg";
import Outdoor from "../public/outdoor-cafe.svg";
import Office from "../public/office.svg";
import Mattress from "../public/bed-2.svg";
import { getAllCategories } from "@/queries";

const Navbar = async () => {
  const allCategories = await getAllCategories();
  return (
    <nav className="bg-gray-800">
      <div className="container flex">
        <div className="px-8 py-4 bg-primary md:flex items-center cursor-pointer relative group hidden">
          <span className="text-white">
            <i className="fa-solid fa-bars"></i>
          </span>
          <span className="capitalize ml-2 text-white hidden">
            All Categories
          </span>

          <div
            className="absolute left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible w-[600px]"
            style={{ width: "300px" }}
          >
            {allCategories?.map((category) => (
              <Link
                key={category?.id}
                href="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <Image
                  src={category?.image}
                  alt="sofa"
                  className="w-5 h-5 object-contain"
                  width={5}
                  height={5}
                />
                <span className="ml-6 text-gray-600 text-sm">
                  {category?.category}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between flex-grow md:pl-12 py-5">
          <div className="flex items-center space-x-6 capitalize">
            <Link
              href="/"
              className="text-gray-200 hover:text-white transition"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-gray-200 hover:text-white transition"
            >
              Shop
            </Link>
            <Link
              href="#"
              className="text-gray-200 hover:text-white transition"
            >
              About us
            </Link>
            <Link
              href="#"
              className="text-gray-200 hover:text-white transition"
            >
              Contact us
            </Link>
          </div>
          <Link
            href="/login"
            className="text-gray-200 hover:text-white transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
