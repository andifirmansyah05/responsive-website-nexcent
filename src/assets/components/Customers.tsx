import ButtonTwo from "./ButtonTwo";

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

const Customers = () => {
  return (
    <div className="px-8 mt-8 pb-8 bg-silver font-Inter">
      <div className="mb-4 pt-8">
        <div className="w-80 h-80 bg-gray flex items-center justify-center">
            <h1>photo</h1>
        </div>
      </div>
      <div>
        <p className="text-gray">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>
        <h1 className="text-primary text-lg mt-4">Tim Smith</h1>
        <h2 className="text-gray">British Dragon Boat Racing Association</h2>
        <div className="grid mt-4">
            <div className="flex justify-between items-center gap-1 mb-2">
                {icons.map(icon => (
                    <img className="w-12 h-12" src={icon.url} alt="icons" />
                ))}
            </div>
            <ButtonTwo>
                Meet all customers
            </ButtonTwo>
        </div>
      </div>
    </div>
  );
};

export default Customers;
