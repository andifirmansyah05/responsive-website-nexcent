import Logo from "./Logo";

const icons = [
  {
    url: "/public/instagram.svg",
  },
  {
    url: "/public/xTwitter.svg",
  },
  {
    url: "/public/facebook.svg",
  },
];

const FooterBig = () => {
  return (
    <div className="bg-dark px-8 py-8 font-Inter text-silver">
      <div>
        <Logo statusColor={"white"} />
        <h1 className="mt-3">Copyright © 2020 Nexcent ltd.</h1>
        <h2>All rigths reserved</h2>
        <div className="flex gap-4 my-2">
          {icons.map((item) => (
            <div className="bg-darkgray/50 p-2 rounded-full">
              <img src={item.url} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-2 grid grid-cols-2 text-silver">
        <div>
          <h1 className="text-white text-lg font-bold mb-3">Company</h1>
          <ul className="flex flex-col gap-1">
            <li>About us</li>
            <li>Blog</li>
            <li>Contact us</li>
            <li>Pricing</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <div>
          <h1 className="text-white text-lg font-bold mb-3">Support</h1>
          <ul className="flex flex-col gap-1">
            <li>Help center</li>
            <li>Terms of service</li>
            <li>Legal</li>
            <li>Privacy policy</li>
            <li>Status</li>
          </ul>
        </div>
        <div className="col-span-2 mt-2">
          <h1 className="text-lg">Stay up to date</h1>
          <div className="relative mt-1">
            <img
              className="absolute h-6 w-6 right-2 top-1.5"
              src="/public/paperPlaneTilt.svg"
              alt=""
            />
            <input
              className="h-10 p-2 w-full bg-white/20 placeholder:text-silver rounded focus:outline-none focus:ring-2 focus:ring-primary"
              type="text"
              placeholder="Your email address"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBig;
