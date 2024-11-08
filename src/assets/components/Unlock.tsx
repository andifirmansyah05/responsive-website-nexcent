import Button from "./Button";

const Unlock = () => {
  return (
    <div>
      <div>
        <img src="/public/img/Frame 35.png" alt="" />
      </div>
      <div className="px-8">
        <h1 className="text-darkgray font-bold text-xl">The unseen of spending three years at Pixelgrade</h1>
        <p className="my-2 text-gray">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <Button>
            Learn More
        </Button>
      </div>
    </div>
  );
};

export default Unlock;
