// import { useState } from "react";
// import api from "../api/axios";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await api.post("/auth/login", { email, password });
//       localStorage.setItem("accessToken", res.data.accessToken);
//       localStorage.setItem("refreshToken", res.data.refreshToken);
//       window.location.href = "/";
//     } catch (err) {
//       setError(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <h2>Login</h2>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//       <input
//         type="password"
//         placeholder="Password"
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button>Login</button>
//     </form>
//   );
// };

// export default Login;


import { useState } from "react";
import api from "../api/axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", { email, password });
      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("refreshToken", res.data.refreshToken);
      window.location.href = "/";
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-md w-96"
      >
        <h2 className="text-2xl font-semibold text-center text-primary mb-6">
          Login
        </h2>

        {error && (
          <p className="bg-red-100 text-red-600 p-2 rounded mb-4 text-sm">
            {error}
          </p>
        )}

        <input
          className="w-full border p-2 rounded mb-4"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full border p-2 rounded mb-4"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-primary text-white py-2 rounded hover:bg-blue-700">
          Login
        </button>

        <p className="text-center text-sm mt-4">
          No account?{" "}
          <Link to="/register" className="text-primary font-medium">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
