import Image from "next/image";

const QuotesCard = (props) => {
  return (
    <div className="md:max-w-[20.875rem] lg:max-w-full p-4 border rounded-lg">
      <h3 className="font-bold text-xl mb-6">"Quote"</h3>
      <div className="flex gap-2 items-center justify-start">
        <div className="image flex-shrink-0">
          <div className="h-[50px] w-[50px] rounded-full border overflow-hidden relative">
            <Image
              src={props.url}
              fill
              sizes="50px"
              alt="profile"
              className="object-contain"
            />
          </div>
        </div>
        
        <div className="details flex flex-col gap-1">
          <h4 className="text-sm opacity-45 font-semibold">{props.title}</h4>
          <p className="text-xs text-gray-500 font-light">
            {props.description.length > 119
              ? `${props.description.slice(0, 116)}...`
              : props.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuotesCard;
