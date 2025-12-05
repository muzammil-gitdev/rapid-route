import Image from "next/image";
interface myObj {
  value: {
    imgSrc: string;
    title: string;
    location: string;
    rating: number;
  };
}
const Card: React.FC<myObj> = ({ value }) => {
  console.log(value.imgSrc);
  return (
    <div className="rounded-2xl overflow-hidden ">
      <div className="">
        <Image
          src={value.imgSrc}
          height={0}
          width={0}
          className="w-full object-cover object-bottom rounded-2xl aspect-video"
          sizes="full"
          alt="Docuemnt"
        ></Image>
      </div>
      <div>
        <div className="flex justify-between px-4 py-2 items-center">
          <div className="">
            <h4 className="font-bold">{value.title}</h4>
            <p className="text-stone-500 text-sm">{value.location}</p>
          </div>

          <div className="text-white flex gap-1 justify-center items-center bg-blue-500 rounded-full px-2 py-1 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
            {value.rating}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
