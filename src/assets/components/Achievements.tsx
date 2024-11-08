const items = [
  {
    amount: "2,245,341",
    name: "Members",
    url: "/public/img/Icon (3).png",
  },
  {
    amount: "46,328",
    name: "Clubs",
    url: "/public/img/Icon (4).png",
  },
  {
    amount: "828,867",
    name: "Event Bookings",
    url: "/public/img/Icon (5).png",
  },
  {
    amount: "1,926,436",
    name: "Payments",
    url: "/public/img/Icon (6).png",
  },
];
const Achievements = () => {
  return (
    <div className="px-8 mt-8 font-Inter bg-silver">
      <div>
        <h1 className="text-darkgray text-2xl font-bold">Helping a local</h1>
        <h1 className="text-2xl text-primary font-bold">business reinvent itself</h1>
        <h2 className="text-darkgray font-medium">We reached here with our hard work and dedication</h2>
      </div>
      <div className="grid gap-4 place-content-left mt-2 pl-3 ">
        {items.map((item) => (
          <div className="flex gap-4">
            <div>
              <img className="w-12" src={item.url} alt={item.name} />
            </div>
            <div className="text-darkgray">
              <h1 className="text-xl font-bold text-darkgray">{item.amount}</h1>
              <h2>{item.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
