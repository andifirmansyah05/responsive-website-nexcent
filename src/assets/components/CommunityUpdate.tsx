import ButtonTwo from "./ButtonTwo";

const items = [
  {
    desc: "Creating Streamlined Safeguarding Processes with OneRen",
  },
  {
    desc: "What are your safeguarding responsibilities and how can you manage them?",
  },
  {
    desc: "Revamping the Membership Model with Triathlon Australia",
  },
];

const CommunityUpdate = () => {
  return (
    <div className="font-Inter px-8 mt-8 pb-8">
      <div className="text-center">
        <h1 className="text-darkgray text-2xl font-bold">Caring is the new marketing</h1>
        <p className="text-gray mt-2 ">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.
        </p>
      </div>
      <div className="flex flex-col gap-4 mt-2">
        {items.map(item => (
            <div className="px-4 py-6 bg-white shadow-xl flex flex-col justify-center items-center">
                <h2 className="text-center font-bold text-lg">{item.desc}</h2>
                <ButtonTwo>
                    Readmore
                </ButtonTwo>
            </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityUpdate;
