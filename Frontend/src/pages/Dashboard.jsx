import { useEffect, useState } from "react";
import api from "../api/axios";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(null); // taskId

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const res = await api.get("/tasks");
      setTasks(res.data.data);
    } catch (err) {
      console.error("Failed to fetch tasks");
    } finally {
      setLoading(false);
    }
  };

  const createTask = async () => {
    if (!title) return;
    setLoading(true);
    try {
      await api.post("/tasks", { title });
      setTitle("");
      fetchTasks();
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    setActionLoading(id);
    try {
      await api.put(`/tasks/${id}`, { status });
      fetchTasks();
    } finally {
      setActionLoading(null);
    }
  };

  const deleteTask = async (id) => {
    setActionLoading(id);
    try {
      await api.delete(`/tasks/${id}`);
      fetchTasks();
    } finally {
      setActionLoading(null);
    }
  };

  const logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const getStatusColor = (status) => {
  switch (status) {
    case "DONE":
      return "bg-green-100 text-green-700 border-green-300";
    case "IN_PROGRESS":
      return "bg-yellow-100 text-yellow-700 border-yellow-300";
    case "TODO":
    default:
      return "bg-red-100 text-red-700 border-red-300";
  }
};
  const getStatusBadge = (status) => {
  switch (status) {
    case "DONE":
      return "bg-green-500 text-white";
    case "IN_PROGRESS":
      return "bg-yellow-500 text-white";
    case "TODO":
    default:
      return "bg-red-500 text-white";
      }
    };


  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-primary">
            Task Dashboard
          </h2>
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-1 rounded text-sm"
          >
            Logout
          </button>
        </div>

        {/* Create Task */}
        <div className="bg-white p-4 rounded-xl shadow mb-6 flex gap-2">
          <input
            className="flex-1 border p-2 rounded"
            placeholder="New task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            onClick={createTask}
            className="bg-primary text-white px-4 rounded hover:bg-blue-700"
          >
            Add
          </button>
        </div>

        {/* Loading Spinner */}
        {loading && (
          <div className="text-center text-primary font-medium">
            Loading tasks...
          </div>
        )}

        {/* Task List */}
        {!loading && (
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="font-semibold mb-4">Your Tasks</h3>

            {tasks.length === 0 ? (
              <p className="text-gray-500 text-sm">No tasks found</p>
            ) : (
              <ul className="space-y-3">
                {tasks.map((task) => (
                  <li
                    key={task._id}
                    className="border p-3 rounded flex justify-between items-center"
                  >
                    <div>
                      
                      <div className="flex items-center gap-2">
                        <p
                          className={`font-medium ${
                            task.status === "DONE"
                              ? "line-through text-gray-400"
                              : "text-gray-800"
                          }`}
                        >
                          {task.title}
                        </p>

                        
                      </div>

                      <select
                        value={task.status}
                        onChange={(e) =>
                          updateStatus(task._id, e.target.value)
                        }
                        className={`mt-1 border text-sm rounded px-2 py-1 
                          ${getStatusColor(task.status)} 
                          focus:outline-none`}
                        disabled={actionLoading === task._id}
                      >
                        <option value="TODO">TODO</option>
                        <option value="IN_PROGRESS">IN PROGRESS</option>
                        <option value="DONE">DONE</option>
                      </select>
                    </div>

                    <div className="flex items-center gap-3">
                      {actionLoading === task._id && (
                        <span className="text-xs text-blue-500">
                          Updating...
                        </span>
                      )}
                      <button
                        onClick={() => deleteTask(task._id)}
                        className="text-red-500 text-sm hover:underline"
                        disabled={actionLoading === task._id}
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
