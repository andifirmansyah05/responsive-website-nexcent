import Button from "./Button";
const items = ["Home", "Service", "Feature", "Product", "Testimonial", "FAQ"];

interface Props {
  toggleMenu: boolean;
}

const ListNavbar = ({ toggleMenu }: Props) => {
  return (
    <div className={`${toggleMenu ? "hidden" : "flex"} flex-col md:flex-row md:flex`}>
      <ul
        className={`flex flex-col gap-2 px-4 py-2 justify-center items-center md:flex-row md:flex `}
      >
        {items.map((item, index) => (
          <li key={index} className="hover:text-primary">
            {item}
          </li>
        ))}
      </ul>
      <div className="flex flex-row gap-1 mt-1 items-center justify-center">
        <div>
          <Button>Log in</Button>
        </div>
        <div>
          <Button>Sign up</Button>
        </div>
      </div>
    </div>
  );
};

export default ListNavbar;
