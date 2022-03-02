import React from "react";

const Form = () => {
  async function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;

      formData[field.name] = field.value;
    });

    fetch("api/feature", {
      method: "post",
      body: JSON.stringify(formData),
    });
    // console.log(formData)
  }

  return (
    <div>
      <form action="#" method="POST" onSubmit={handleOnSubmit}>
        <div className="flex flex-col text-left shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="flex flex-col">
              <div className="my-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="given-name"
                  required
                  className="mt-1 focus:ring-helloblue-500 focus:border-helloblue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="my-2">
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  required
                  className="mt-1 focus:ring-helloblue-500 focus:border-helloblue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
                <p className="mt-2 text-xs text-gray-500">
                  We need your e-mail to contact you for validation
                </p>
              </div>

              <div className="my-2">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category
                </label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-helloblue-500 focus:border-helloblue-500 sm:text-sm"
                >
                  <option>Top 3 Sponsoring</option>
                  <option>A Week Sponsoring</option>
                  <option>A Month Sponsoring</option>
                  <option>Lifetime Sponsoring</option>
                </select>
              </div>

              <div className="my-2">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <div className="mt-1">
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    className="shadow-sm focus:ring-helloblue-500 focus:border-helloblue-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                    placeholder="Please, provide some details to help the project succeed"
                    defaultValue={""}
                    required
                  />
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  Brief description for your request
                </p>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-left sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-helloblue-600 hover:bg-helloblue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-helloblue-500"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
