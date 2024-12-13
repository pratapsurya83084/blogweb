import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex items-center justify-center py-12 px-6">
      <div className="bg-white shadow-2xl rounded-lg p-10 w-full max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Information */}
          <div className="space-y-8">
            <h2 className="text-4xl font-extrabold text-purple-600">
              Get in Touch
            </h2>
            <p className="text-gray-700 text-lg">
              We'd love to hear from you! Feel free to reach out for inquiries,
              feedback, or support.
            </p>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-purple-600">
                Contact Details
              </h3>
              <p className="text-gray-700">
                <strong>Address:</strong> 456 Innovation Drive, Tech City, World
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> info@ourcompany.com
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> +123 456 7890
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-purple-600">
                Follow Us
              </h3>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="bg-purple-100 text-purple-600 p-3 rounded-full shadow-md hover:bg-purple-200 transition duration-300"
                >
                  <i className="fab fa-facebook fa-lg"></i>
                </a>
                <a
                  href="#"
                  className="bg-purple-100 text-purple-600 p-3 rounded-full shadow-md hover:bg-purple-200 transition duration-300"
                >
                  <i className="fab fa-twitter fa-lg"></i>
                </a>
                <a
                  href="#"
                  className="bg-purple-100 text-purple-600 p-3 rounded-full shadow-md hover:bg-purple-200 transition duration-300"
                >
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
                <a
                  href="#"
                  className="bg-purple-100 text-purple-600 p-3 rounded-full shadow-md hover:bg-purple-200 transition duration-300"
                >
                  <i className="fab fa-linkedin fa-lg"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <form className="bg-purple-50 p-8 rounded-lg shadow-lg space-y-6">
            <h3 className="text-2xl font-semibold text-purple-600 text-center mb-4">
              Send Us a Message
            </h3>

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Write your message here..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
