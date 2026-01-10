// import { useState } from "react";
// import api from "../api/axios";

// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       await api.post("/auth/register", { name, email, password });
//       setMessage("Registration successful. Please login.");
//     } catch (err) {
//       setMessage(err.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <form onSubmit={handleRegister}>
//       <h2>Register</h2>
//       <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
//       <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//       <input
//         type="password"
//         placeholder="Password"
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button>Register</button>
//       <p>{message}</p>
//     </form>
//   );
// };

// export default Register;



import { useState } from "react";
import api from "../api/axios";
import { Link } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/register", form);
      setMessage("Registration successful. Please login.");
    } catch (err) {
      setMessage(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-xl shadow-md w-96"
      >
        <h2 className="text-2xl font-semibold text-center text-primary mb-6">
          Register
        </h2>

        {message && (
          <p className="bg-blue-100 text-blue-700 p-2 rounded mb-4 text-sm">
            {message}
          </p>
        )}

        <input
          className="w-full border p-2 rounded mb-4"
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="w-full border p-2 rounded mb-4"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          className="w-full border p-2 rounded mb-4"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="w-full bg-primary text-white py-2 rounded hover:bg-blue-700">
          Register
        </button>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-medium">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
