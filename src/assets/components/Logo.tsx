interface Props {
  statusColor: string;
}

const colors = [
  {
    name: "white", 
    url: "/public/img/Logo-White.png",
  },
  {
    name: "dark", 
    url: "/public/img/Logo.png",
  },
]

const Logo = ({ statusColor }: Props) => {
  const statusC = statusColor === "white" ? colors[0].url : colors[1].url

  return <img src={statusC} alt="logo nexcent" />;
};

export default Logo;
