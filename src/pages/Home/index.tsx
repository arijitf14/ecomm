// src/pages/Page1.tsx
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      <Link to="/page2" className="bg-black text-white px-4 py-2 rounded">
        Go to Page 2
      </Link>
    </div>
  );
};

export default Home;
