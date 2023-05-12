/* eslint-disable no-unused-vars */
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity,supplier, taste, category,details, photo } = coffee;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updatedCoffee);
    //send data to the server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };
  return (
    <>
      <div className=" bg-[#F4F3F0] md:px-28 p-8 md:pb-28">
        <div className="text-center">
          <Link to="/" className="font-bold text-amber-700">
            Home
          </Link>
          <h1 className="text-3xl font-bold my-8">Update coffee: {name}</h1>
        </div>
        <form onSubmit={handleUpdateCoffee}>
          {/* form name and quantity row */}

          <div className="md:flex mb-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter coffee name"
                  defaultValue={name}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-5">
              <label className="label">
                <span className="label-text font-bold">Available Quantity</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="quantity"
                  placeholder="quantity"
                  defaultValue={quantity}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* form supplier and taste row */}

          <div className="md:flex mb-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Supplier Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="supplier"
                  placeholder="supplier"
                  defaultValue={supplier}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-5">
              <label className="label">
                <span className="label-text font-bold">Taste</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="taste"
                  placeholder="taste"
                  defaultValue={taste}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* form category and details row */}

          <div className="md:flex mb-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  placeholder="category"
                  defaultValue={category}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-5">
              <label className="label">
                <span className="label-text font-bold">Details</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="details"
                  placeholder="details"
                  defaultValue={details}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* form photo url row */}

          <div className="mb-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  placeholder="input your coffee photo"
                  defaultValue={photo}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Update coffee"
            className="btn btn-block bg-amber-700 mt-4"
          />
        </form>
      </div>
    </>
  );
};

export default UpdateCoffee;
