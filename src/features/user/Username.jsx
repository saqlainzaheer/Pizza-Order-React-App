import { useSelector } from "react-redux";
function Username() {
  const userName = useSelector((state) => state.user.userName);

  return (
    <div className="hidden text-sm font-semibold md:block">{userName}</div>
  );
}

export default Username;
