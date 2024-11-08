import Button from "./Button";

const Footer = () => {
  return (
    <div className="flex flex-col gap-4 bg-silver justify-center items-center mt-4 pb-8 px-8">
      <h1 className="font-bold text-dark text-center text-2xl mt-8">Pellentesque suscipit fringilla libero eu.</h1>
      <Button>
        Get a Demo
      </Button>
    </div>
  );
};

export default Footer;
