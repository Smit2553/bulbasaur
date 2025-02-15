import { Search, AlertCircle } from "lucide-react";

export default function Emergencies() {
  const stats = {
    total: 10,
    critical: 7,
    resolved: 3,
  };

  const emergencies = [
    {
      id: 1,
      title: "Dixie Fire Emergency",
      location: "Plumas County",
      time: "10:46:37 PM",
      status: "CRITICAL",
      acres: "963,309",
      containment: "45%",
    },
    {
      id: 2,
      title: "Caldor Fire Emergency",
      location: "El Dorado County",
      time: "09:23:15 PM",
      status: "CRITICAL",
      acres: "221,835",
      containment: "60%",
    },
    {
      id: 3,
      title: "Creek Fire Emergency",
      location: "Fresno County",
      time: "08:15:22 PM",
      status: "CRITICAL",
      acres: "379,895",
      containment: "30%",
    },
    {
      id: 4,
      title: "Glass Fire Emergency",
      location: "Napa County",
      time: "07:55:41 PM",
      status: "CRITICAL",
      acres: "67,484",
      containment: "25%",
    },
    {
      id: 5,
      title: "LNU Lightning Complex",
      location: "Napa/Sonoma County",
      time: "06:32:18 PM",
      status: "CRITICAL",
      acres: "363,220",
      containment: "15%",
    },
    {
      id: 6,
      title: "SCU Lightning Complex",
      location: "Santa Clara County",
      time: "05:48:33 PM",
      status: "CRITICAL",
      acres: "396,624",
      containment: "35%",
    },
    {
      id: 7,
      title: "August Complex",
      location: "Mendocino County",
      time: "04:27:59 PM",
      status: "CRITICAL",
      acres: "1,032,648",
      containment: "20%",
    },
    {
      id: 8,
      title: "North Complex",
      location: "Plumas County",
      time: "03:15:44 PM",
      status: "RESOLVED",
      acres: "318,935",
      containment: "100%",
    },
    {
      id: 9,
      title: "River Complex",
      location: "Trinity County",
      time: "02:41:12 PM",
      status: "RESOLVED",
      acres: "199,343",
      containment: "100%",
    },
    {
      id: 10,
      title: "Monument Fire",
      location: "Trinity County",
      time: "01:33:27 PM",
      status: "RESOLVED",
      acres: "223,124",
      containment: "100%",
    },
  ];

  return (
    <div className="p-3 overflow-y-auto border-r-2">
      <h1 className="text-2xl font-semibold mb-4 border-b-1 pb-2">
        Emergencies
      </h1>
      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Filter emergencies..."
          className="w-full pl-10 pr-4 py-2 border"
        />
      </div>

      {/* Stats */}
      <div className="flex justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold">{stats.total}</h2>
          <p className="text-gray-600">Total</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">{stats.critical}</h2>
          <p className="text-gray-600">Critical</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">{stats.resolved}</h2>
          <p className="text-gray-600">Resolved</p>
        </div>
      </div>

      {/* Emergency List */}
      <div className="space-y-4">
        {emergencies.map((emergency) => (
          <div key={emergency.id} className="p-4 border">
            <div className="flex items-start justify-between">
              <div className="flex gap-3">
                <AlertCircle className="text-red-500" />
                <div>
                  <h3 className="font-semibold">{emergency.title}</h3>
                  <p className="text-gray-600">at {emergency.location}</p>
                  <p className="text-sm text-gray-500">{emergency.time}</p>
                  <div className="mt-2">
                    <p className="text-sm">Acres Burned: {emergency.acres}</p>
                    <p className="text-sm">
                      Containment: {emergency.containment}
                    </p>
                  </div>
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  emergency.status === "CRITICAL"
                    ? "bg-red-100 text-red-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {emergency.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
