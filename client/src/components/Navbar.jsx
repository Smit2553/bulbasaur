import { useState, useEffect } from "react";
import { Clock, Sun, Thermometer, Bell, Leaf } from "lucide-react";

export default function Navigation() {
  const [time, setTime] = useState(getTime());
  // const [position, setPosition] = useState("Community 👨‍👩‍👧‍👦");
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function getTime() {
    const date = new Date();
    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  }

  // const positions = [
  //   "Community 👨‍👩‍👧‍👦",
  //   "Government 🧑‍⚖️",
  //   "Mining Site Representative 🏭",
  // ];

  return (
    <nav className="w-[100%] flex justify-between border-b-1  max-h-[8vh] ">
      <a href="/" className="flex gap-2 p-2 pl-6 items-center">
        <Leaf className="text-[var(--color-lime-green)]"></Leaf>
        <h1 className="text-2xl font-medium">Bulbasaur</h1>
      </a>

      <section className="flex gap-5 p-4 items-center">
        <div className="flex gap-1 items-center">
          <Bell /> 7
        </div>

        <div className="flex gap-1 items-center">
          <Clock />
          {time}
        </div>

        <div className="flex gap-1 items-center">
          <Sun />
          Sunny
        </div>

        <div className="flex gap-1 items-center">
          <Thermometer />
          140°F
        </div>

        {/* <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-100"
          >
            Logged in as {position}
            <ChevronDown size={16} />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-72 bg-white border rounded-md shadow-lg">
              <div className="px-4 py-2 text-sm font-semibold border-b">
                Choose the Users to Login
              </div>
              <div className="py-1">
                {positions.map((pos) => (
                  <button
                    key={pos}
                    className={`w-full px-4 py-2 text-left hover:bg-gray-100 ${
                      position === pos ? "bg-gray-50" : ""
                    }`}
                    onClick={() => {
                      setPosition(pos);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {pos}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div> */}
      </section>
    </nav>
  );
}
