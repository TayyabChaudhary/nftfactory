import React from "react";

export default function ShippingAddress() {
  return (
    <>
      <h1 className="text-2xl">Shipping Address</h1>

      <form autoComplete="off">
        <div className="grid gap-6 mb-6 md:grid-cols-2 mt-8">
          <div>
            <label
              for="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 outline-none"
            >
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 py-3 px-4 w-full text-gray-900 text-sm rounded-lg outline-none"
              placeholder="First Name"
              required
            />
          </div>
          <div>
            <label
              for="last_name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              className="bg-gray-50 py-3 px-4 w-full text-gray-900 text-sm rounded-lg outline-none"
              placeholder="Last Name"
              required
            />
          </div>
          <div>
            <label
              for="company"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="text"
              id="company"
              className="bg-gray-50 py-3 px-4 w-full text-gray-900 text-sm rounded-lg outline-none"
              placeholder="Your Eamil"
              required
            />
          </div>
          <div>
            <label
              for="phone"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="bg-gray-50 py-3 px-4 w-full text-gray-900 text-sm rounded-lg outline-none"
              placeholder="Phone Number"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
          <div>
            <label
              for="website"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Country
            </label>
            <input
              type="url"
              id="website"
              className="bg-gray-50 py-3 px-4 w-full text-gray-900 text-sm rounded-lg outline-none"
              placeholder="Enter Country"
              required
            />
          </div>
          <div>
            <label
              for="visitors"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Address
            </label>
            <input
              type="number"
              id="visitors"
              className="bg-gray-50 py-3 px-4 w-full text-gray-900 text-sm rounded-lg outline-none"
              placeholder="Phone Number"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Address (optional)
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 py-3 px-4 w-full text-gray-900 text-sm rounded-lg outline-none"
            placeholder="Phone Number"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Postal Code
          </label>
          <input
            type="text"
            id="password"
            className="bg-gray-50 py-3 px-4 w-full text-gray-900 text-sm rounded-lg outline-none"
            placeholder="Postal Code"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="confirm_password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            State
          </label>
          <input
            type="text"
            id="confirm_password"
            className="bg-gray-50 py-3 px-4 w-full text-gray-900 text-sm rounded-lg outline-none"
            placeholder="State"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-[#6B43FB] hover:bg-[#6B43FB] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full sm:w-auto px-16 py-4 text-center"
        >
          Save
        </button>
      </form>
    </>
  );
}
