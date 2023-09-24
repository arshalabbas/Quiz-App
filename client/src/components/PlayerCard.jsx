const PlayerCard = ({ name, avatar }) => {
  const firstName = name.split(" ")[0];

  const printName = () =>
    firstName.length > 10 ? `${firstName.slice(0, 10)}...` : firstName;

  return (
    <div className="py-3 px-10 shadow-md border-t-4 border-l-4 border-r-2 rounded-xl border-grey flex_center flex-col">
      <img
        src={avatar}
        alt="avatar"
        width={80}
        height={80}
        className="rounded-full bg-orange my-3"
      />
      <p className="font-biryani text-center">{printName()}</p>
    </div>
  );
};

export default PlayerCard;
