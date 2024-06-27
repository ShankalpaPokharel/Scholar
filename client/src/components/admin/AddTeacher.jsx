import React, { useState } from "react";

import axios from "axios";
import { apiUrl } from "../../constant/variables";

export default function AddTeacher() {
  const [addSuccess, setAddSuccess] = useState(false);

  const handleSubmit = (e) => {
      e.preventDefault();
      setAddSuccess(false);

      const name = e.target.name.value;
      const field = e.target.field.value;
      const image = e.target.image.files[0];
      const facebook = e.target.facebook.value || '';
      const twitter = e.target.twitter.value || '';
      const linkedin = e.target.linkedin.value || '';

      const formData = new FormData();
      formData.append('name', name);
      formData.append('field', field);
      formData.append('image', image);
      formData.append('facebook', facebook);
      formData.append('twitter', twitter);
      formData.append('linkedin', linkedin);

      // console.log([...formData]); // Log the form data to see what will be sent

      axios.post(`${apiUrl}/admin/addTeacher`, formData, {
          headers: {
              'Content-Type': 'multipart/form-data',
          },
      })
      .then((response) => {
          console.log("Response data", response.data);
          setAddSuccess(true);
      })
      .catch((error) => {
          console.log("error", error);
      });
  };

  return (
    <div className="flex h-full flex-1 items-center justify-center bg-lightbg p-5">
      <div className="">
        <h4 className="mb-6 text-center text-3xl font-semibold text-primary">Add Teacher</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="default-input" className="mb-2 block font-medium text-gray-900">
            Name
          </label>
          <input type="text" name="name" id="default-input" className="mb-2 block w-full min-w-96 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:outline-primary" required />
          <label htmlFor="field" className="mb-2 block font-medium text-gray-900">
            Field
          </label>
          <input type="text" name="field" id="field" className="mb-2 block w-full min-w-96 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:outline-primary" required />
          <label htmlFor="image" className="mb-2 block font-medium text-gray-900">
            Photo
          </label>
          <input name="image" id="image" className="0 mb-2 block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:outline-none" type="file" accept="image/*" required />

          <label htmlFor="facebook" className="mb-2 block font-medium text-gray-900">
            Facebook url
          </label>
          <input type="text" name="facebook" id="facebook" className="mb-2 block w-full min-w-96 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:outline-primary" />

          <label htmlFor="twitter" className="mb-2 block font-medium text-gray-900">
            Twitter url
          </label>
          <input type="text" name="twitter" id="twitter" className="mb-2 block w-full min-w-96 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:outline-primary" />
          <label htmlFor="linkedin" className="mb-2 block font-medium text-gray-900">
            Linkedin
          </label>
          <input type="text" name="linkedin" id="linkedin" className="mb-6 block w-full min-w-96 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:outline-primary" />

          <button type="submit" className="w-fit rounded-md bg-blue-500 px-8 py-2 font-semibold text-white hover:bg-blue-600">
            Submit
          </button>
        </form>
        {addSuccess && <p className="mt-3 text-green-600">Teacher added successfully</p>}
      </div>
    </div>
  );
}
