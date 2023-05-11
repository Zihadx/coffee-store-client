import { Link } from "react-router-dom";

const updateCoffee = () => {
  return (
    <>
      <div className=" bg-[#F4F3F0] md:px-28 p-8 md:pb-28">
        <div className="text-center">
          <Link to="/" className="font-bold text-amber-700">
            Home
          </Link>
          <h1 className="text-3xl font-bold my-8">Update coffee</h1>
        </div>
        <form>
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

export default updateCoffee;
