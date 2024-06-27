import React, { useState } from "react";

export default function AddUpcomingCourse() {
  const [addSuccess, setAddSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddSuccess(false);
    const category = e.target.category.value;
    const date = e.target.date.value;
    const duration = e.target.duration.value;
    const price = e.target.price.value;
    const image = e.target.image.files[0];
    const course = { category, date, duration, price, image };
    console.log(course)
    setAddSuccess(true);
  };

  return (
    <div className="flex h-full flex-1 items-center justify-center bg-lightbg p-5">
      <div className="">
        <h4 className="mb-6 text-center text-3xl font-semibold text-primary">Add Upcoming Courses</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="category" className="mb-2 block font-medium text-gray-900">
            Category
          </label>
          <input type="text" name="category" id="category" className="mb-2 block w-full min-w-96 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:outline-primary" required />

          <label htmlFor="date" className="mb-2 block font-medium text-gray-900">
            Date
          </label>
          <input type="text" name="date" id="date" className="mb-2 block w-full min-w-96 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:outline-primary" required />

          <label htmlFor="duration" className="mb-2 block font-medium text-gray-900">
            Duration (in hours)
          </label>
          <input type="number" name="duration" id="duration" className="mb-2 block w-full min-w-96 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:outline-primary" required />

          <label htmlFor="price" className="mb-2 block font-medium text-gray-900">
            Price
          </label>
          <input type="number" name="price" id="price" className="mb-2 block w-full min-w-96 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:outline-primary" required />

          <label htmlFor="image" className="mb-2 block font-medium text-gray-900">
            Image
          </label>
          <input name="image" id="image" className="0 mb-2 block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:outline-none" type="file" accept="image/*" required />

          <button type="submit" className="w-fit rounded-md bg-blue-500 px-8 py-2 font-semibold text-white hover:bg-blue-600">
            Submit
          </button>
        </form>
        {addSuccess && <p className="mt-3 text-green-600">Course added successfully</p>}
      </div>
    </div>
  );
}
