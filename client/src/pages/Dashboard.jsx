import DefaultMap from "../components/DefaultMap";
import Navigation from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Emergencies from "../components/Emergencies";
import WeatherStats from "../components/WeatherStats";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="relative w-[100%]">
        <Navigation />
        <section className="grid grid-cols-4 h-[92vh]">
          <Emergencies />
          <DefaultMap />
          <WeatherStats />
        </section>
      </main>
    </div>
  );
}
