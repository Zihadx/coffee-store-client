/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  // const { name, quantity, supplier, taste, category, details, photo } = coffee;
  const { _id, name, quantity, taste, category, photo } = coffee;
  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("delete confirm");
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
             
              //problem
              const remaining = coffees.filter((cof) => cof._id !== _id);
             console.log(remaining)
              setCoffees(remaining);


            }
          });
      }
    });
  };
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

              <Link to={`updateCoffee/${_id}`}>
                <button className="btn btn-outline w-full">Edit</button>
              </Link>
              <button
                className="btn btn-outline btn-error"
                onClick={() => handleDelete(_id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
