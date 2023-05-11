const CoffeeCard = ({ coffee }) => {
  // const { name, quantity, supplier, taste, category, details, photo } = coffee;
  const { name, quantity, supplier, taste, category, details, photo } = coffee;
  return (
    <div className="">
      <div className="card card-side bg-[#F4F3F0] shadow-xl p-3 h-full w-full">
        <figure>
          <img
            src={photo}
            alt="Movie"
            className="w-[250px] h-[150px] rounded-md p-2"
          />
        </figure>
        <div className="flex justify-between items-center w-full px-2">
          <div>
            <h2 className="card-title">Name: {name}</h2>
            <p>Quantity: {quantity}</p>
            <p>Taste: {taste}</p>
            <p>Category: {category}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="btn-group btn-group-vertical space-y-3">
              <button className="btn btn-outline btn-error">View</button>
              <button className="btn btn-outline">Edit</button>
              <button className="btn btn-outline btn-error">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
