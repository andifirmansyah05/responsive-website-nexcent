const icons = [
  {
    url: "/public/img/Logo (1).png",
  },
  {
    url: "/public/img/Logo (2).png",
  },
  {
    url: "/public/img/Logo (3).png",
  },
  {
    url: "/public/img/Logo (4).png",
  },
  {
    url: "/public/img/Logo (5).png",
  },
  {
    url: "/public/img/Logo (6).png",
  },
];

const Clients = () => {
  return (
    <div className="px-8 text-center mt-6">
      <h1 className="text-darkgray font-semibold text-3xl">Our Clients</h1>
      <h2 className="text-gray">We have been working with some Fortune 500+ clients.</h2>
      <div className="grid grid-cols-3 gap-4 items-center place-items-center place-content-center ">
        {icons.map((icon) => (
          <img className="w-14" src={icon.url} alt="icons" />
        ))}
      </div>
    </div>
  );
};

export default Clients;
