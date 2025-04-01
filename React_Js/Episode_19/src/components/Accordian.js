import ListItems from "./ListItems";

const Accordian = ({ title, open, setOpen }) => {
  const showItemList = () => {
    setOpen();
  };

  return (
    <div className="my-1 px-4 py-2 rounded-md border border-gray-200 shadow-lg w-64">
      <div className="flex items-center justify-between">
        <h1 className="text-md">{title}</h1>
        {open ? (
          <button className="text-xl" onClick={showItemList}>
            ▼
          </button>
        ) : (
          <button className="text-xl" onClick={showItemList}>
            ▲
          </button>
        )}
      </div>
      {open && (
        <div>
          <ListItems />
        </div>
      )}
    </div>
  );
};

export default Accordian;
