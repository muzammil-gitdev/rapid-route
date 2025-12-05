import Card from "./Card";
interface myObj {
  imgSrc: string;
  title: string;
  location: string;
  rating: number;
}
const dest: myObj[] = [
  {
    imgSrc: "/skardu.jpg",
    title: "Serenity At Skardu City",
    location: "Skardu, Gilgit-Baltistan, Pakistan",
    rating: 4.7,
  },
  {
    imgSrc: "/card2.jpg",
    title: "Indus River View",
    location: "Gahkuch, GilgitBaltistan, Pakistan",
    rating: 4.5,
  },
  {
    imgSrc: "/card3.webp",
    title: "Calm in Gilgit City",
    location: "Gilgit, Gilgit-Baltistan, Pakistan",
    rating: 4.6,
  },
];
const Destination: React.FC = () => {
  return (
    <section className="px-3 my-30">
      <div className="w-[80%] mx-auto">
        <div className="space-y-2">
          <h3 className="leading-8">Popular Destinations</h3>
          <p className="text-sm text-stone-500 font-medium">
            Discover the Most Loved Destination Around the Globe
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-6 mt-10 ">
          {dest.map((value, i) => {
            return <Card key={i} value={value} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default Destination;
