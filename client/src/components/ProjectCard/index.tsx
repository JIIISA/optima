import { Project } from "@/state/api";
import React, { useState } from "react";

type Props = {
  project: Project;
  onEdit: (project: Project) => void;
  onDelete: (projectId: number) => void;
};

const ProjectCard = ({ project, onEdit, onDelete }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProject, setEditedProject] = useState(project);

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onEdit(editedProject);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedProject(project); // Reset to the original project
  };

  return (
    <div className="rounded border p-4 shadow">
      {isEditing ? (
        <div>
          <input
            type="text"
            name="name"
            value={editedProject.name}
            onChange={handleEditChange}
            className="block mb-2 w-full border"
          />
          <textarea
            name="description"
            value={editedProject.description || ""}
            onChange={handleEditChange}
            className="block mb-2 w-full border"
          />
          <input
            type="date"
            name="startDate"
            value={
              editedProject.startDate
                ? new Date(editedProject.startDate).toISOString().substr(0, 10)
                : ""
            }
            onChange={handleEditChange}
            className="block mb-2 w-full border"
          />
          <input
            type="date"
            name="endDate"
            value={
              editedProject.endDate
                ? new Date(editedProject.endDate).toISOString().substr(0, 10)
                : ""
            }
            onChange={handleEditChange}
            className="block mb-2 w-full border"
          />
          <button onClick={handleSave} className="mr-2 bg-blue-500 text-white p-2 rounded">
            Save
          </button>
          <button onClick={handleCancel} className="bg-gray-500 text-white p-2 rounded">
            Cancel
          </button>
        </div>
      ) : (
        <div>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <p>Start Date: {project.startDate ? new Date(project.startDate).toDateString() : "N/A"}</p>
          <p>End Date: {project.endDate ? new Date(project.endDate).toDateString() : "N/A"}</p>
          <button onClick={() => setIsEditing(true)} className="mr-2 bg-yellow-500 text-white p-2 rounded">
            Edit
          </button>
          <button onClick={() => onDelete(project.id)} className="bg-red-500 text-white p-2 rounded">
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
