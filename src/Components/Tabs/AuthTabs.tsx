import { useState } from "react";
import LoginForm from "../Login/loginForm";
import Signup from "../SignUp/Signup";

const types = ["Login", "Sign Up"];

function AuthTabs() {
  const [active, setActive] = useState(types[0]);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className=" space-x-4">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => setActive(type)}
            className={`
 ${active === type ? "text-[#112663]" : "text-[#969ca8]"}`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="w-full">
        {active === "Login" && <LoginForm />}
        {active === "Sign Up" && <Signup />}
      </div>
    </div>
  );
}

export default function App() {
  return <AuthTabs />;
}
