"use client";
import Image from "next/image";

const Card = (props) => {

  return (
    <div className={`${props.className} mx-auto bg-white shadow-md rounded-lg flex gap-4 p-4 h-full`}>
      {/* Image Section */}
      <div className="flex-shrink-0">
        <Image
          src={props.url}
          width={160}   // Fixed width
          height={160}  // Fixed height
          className="object-cover"
          alt="Card image"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col gap-3 w-full">
        <div className="details flex flex-col gap-1">
          <h4 className="text-xl font-semibold">{props.title}</h4>
          <p className="text-base text-gray-500 font-light overflow-y-hidden">
            {props.description}
          </p>
        </div>

        {/* Additional Element Section like Button and All */}
        <div className="add-element-section">{props.elements}</div>
      </div>
    </div>
  );
};

export default Card;

