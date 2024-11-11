import React from "react";
import { Link } from "react-router-dom";
import { Button, Navbar } from "flowbite-react";

export function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar fluid rounded className="bg-white shadow-md">
        <Navbar.Brand className="flex items-center">
        </Navbar.Brand>
        <Navbar.Collapse>
          <div className="flex space-x-4">
            <Navbar.Link
              as={Link}
              to="/"
              className="text-lg font-semibold text-gray-700 hover:bg-blue-100 rounded-md px-4 py-2 transition duration-200"
            >
              Home
            </Navbar.Link>
            <Navbar.Link
              as={Link}
              to="/tasks"
              className="text-lg font-semibold text-gray-700 hover:bg-blue-100 rounded-md px-4 py-2 transition duration-200"
            >
              Task List
            </Navbar.Link>
          </div>
        </Navbar.Collapse>
      </Navbar>

      <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome to Your Task Manager</h1>

        <Link
          to="/tasks"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-red-700 transition duration-300 ease-in-out transform hover:-translate-y-1 mb-4" //button using tailwind css
        >
          View Task List
        </Link>
        <Button color="blue">Register</Button>
      </div>
    </div>
  );
}
