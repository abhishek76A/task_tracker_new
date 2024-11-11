import React, { useState } from "react";
import { Table, Modal } from "flowbite-react";
import { tasks } from "./taskData"; 


type Task = {
  id: number;
  name: string;
  description: string;
  dueDate: string;
};

export function TaskList() {
  const tasksPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null); 

  const currentTasks = tasks.slice(
    (currentPage - 1) * tasksPerPage,
    currentPage * tasksPerPage
  );
  const totalPages = Math.ceil(tasks.length / tasksPerPage);

  
  const handleTaskClick = (task: Task) => { 
    setSelectedTask(task);
    setIsDialogOpen(true);
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">Task List</h2>
      <Table hoverable className="min-w-full">
        <Table.Head className="bg-gray-200 dark:bg-gray-700">
          <Table.HeadCell className="text-gray-700 dark:text-gray-300 font-semibold">Task Name</Table.HeadCell>
          <Table.HeadCell className="text-gray-700 dark:text-gray-300 font-semibold">Description</Table.HeadCell>
          <Table.HeadCell className="text-gray-700 dark:text-gray-300 font-semibold">Due Date</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y divide-gray-200 dark:divide-gray-600">
          {currentTasks.map((task) => (
            <Table.Row 
              key={task.id} 
              onClick={() => handleTaskClick(task)}
              className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer"
            >
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white p-4 border-b dark:border-gray-600">
                {task.name}
              </Table.Cell>
              <Table.Cell className="text-gray-600 dark:text-gray-300 p-4 border-b dark:border-gray-600">
                {task.description}
              </Table.Cell>
              <Table.Cell className="text-gray-600 dark:text-gray-300 p-4 border-b dark:border-gray-600">
                {task.dueDate}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table> 
      

      <div className="flex justify-center mt-4 space-x-2">
        <button
          onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-2 rounded ${
              currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((page) => Math.min(page + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>

      
      <Modal show={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <Modal.Header>
          {selectedTask?.name}
        </Modal.Header>
        <Modal.Body>
          <p><strong>Description:</strong> {selectedTask?.description}</p>
          <p><strong>Due Date:</strong> {selectedTask?.dueDate}</p>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={() => setIsDialogOpen(false)}
            className="px-4 py-2 bg-red-500 text-black border-4 rounded-lg"
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
