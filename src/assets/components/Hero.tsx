import Button from "./Button";

const Hero = () => {
  return (
    <div className="font-Inter px-8 mb-6 flex justify-center items-center md:mt-3">
      <div className="flex flex-col-reverse md:flex-row md:justify-center md:items-center md:px-10 lg:px-20">
        <div className="flex flex-col gap-4 mt-2 md:pr-12">
          <h1 className="text-3xl font-semibold lg:text-5xl">
            Lessons and insights{" "} 
            <span className="text-primary">from 8 years</span>
          </h1>
          <p className="text-gray">
            Where to grow your business as a photographer: site or social media?
          </p>
          <div>
            <Button>Register</Button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            className="w-4/5 h-4/5 md:w-full md:h-full"
            src="/public/img/Illustration.png"
            alt="gambar illustration hero"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
