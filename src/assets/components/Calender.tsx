import Button from "./Button";

const Calender = () => {
  return (
    <div className="px-8 mt-8">
      <div>
        <img src="/public/img/pana.png" alt="image pana" />
      </div>
      <div className="font-Inter">
        <h1 className="text-2xl font-bold mt-6">How to design your site footer like we did</h1>
        <p className="mt-2 mb-2">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <Button>
            Learn More
        </Button>
      </div>
    </div>
  );
};

export default Calender;
