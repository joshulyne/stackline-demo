import React from "react";
import Image from "next/image";

import { ProductPageProps } from ".";

const ProductDescription = ({
  image,
  title,
  subtitle,
  tags,
}: ProductPageProps): JSX.Element => {
  return (
    <div className="min-w-96 bg-white">
      <div className="flex flex-col items-center text-center m-5 space-y-5">
        <Image src={image} width={160} height={50} alt={""} />
        <div className="space-y-2">
          <p className="text-2xl font-bold text-gray-600">{title}</p>
          <p className="text-sm text-gray-400 px-10">{subtitle}</p>
        </div>
        <div>
          <hr className="border-0 h-px bg-gray-200" />
          <div className="flex flex-wrap justify-between text-gray-900 text-sm my-2">
            {tags.map((tag, i) => {
              return (
                <span
                  key={i}
                  className="border-2 font-light border-gray-100 py-1 px-7 rounded-md my-1"
                >
                  {tag}
                </span>
              );
            })}
          </div>
          <hr className="w-full border-0 h-px bg-gray-200" />
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
