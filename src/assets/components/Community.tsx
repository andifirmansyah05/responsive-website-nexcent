const items = [
  {
    title: "Membership Organisations",
    desc: "Our membership management software provides full automation of membership renewals and payments",
    url: "/public/img/Icon.png",
  },
  {
    title: "National Associations",
    desc: "Our membership management software provides full automation of membership renewals and payments",
    url: "/public/img/Icon (1).png",
  },
  {
    title: "Clubs And Groups",
    desc: "Our membership management software provides full automation of membership renewals and payments",
    url: "/public/img/Icon (2).png",
  },
];
const Community = () => {
  return (
    <div className="mt-8 px-8 font-Inter">
      <h1 className="text-center text-darkgray font-bold text-xl">Manage your entire community in a single system</h1>
      <h2 className="text-gray text-center mt-2 text-sm">Who is Nextcent suitable for?</h2>
      <div className="grid gap-2 place-content-center place-items-center text-center mt-6">
        {items.map((item) => (
          <>
            <img src={item.url} alt="icons item" />
            <h1 className="text-darkgray font-bold">{item.title}</h1>
            <p className="text-gray">{item.desc}</p>
          </>
        ))}
      </div>
    </div>
  );
};

export default Community;
