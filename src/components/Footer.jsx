import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-2">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold mb-2">About Us</h2>
          <p className="text-sm">
            Welcome to our website! We are dedicated to providing you with the
            best products and services. Stay connected and explore our
            offerings.
          </p>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
          <ul className="text-sm space-y-2">
            <li>Email: contact@website.com</li>
            <li>Phone: +1 123 456 7890</li>
            <li>Address: 123 Main Street, City, Pakistan</li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-4 text-center text-sm border-t border-gray-600 pt-4">
        © {new Date().getFullYear()} Moeed Dummy website. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
