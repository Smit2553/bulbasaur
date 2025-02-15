import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import { Droplets, Wind, TreePine, Users, MapPin, Home } from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function WeatherStats() {
  const locationInfo = {
    name: "Plumas County",
    population: "18,807",
    elevation: "3,494 ft",
    residentialAreas: "12",
    nearestCity: "Quincy",
    evacuationZones: "4",
  };

  const humidityData = {
    labels: ["6am", "9am", "12pm", "3pm", "6pm", "9pm"],
    datasets: [
      {
        label: "Humidity %",
        data: [45, 40, 35, 30, 35, 40],
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const treeData = {
    labels: ["Pine", "Oak", "Redwood", "Maple"],
    datasets: [
      {
        data: [40, 25, 20, 15],
        backgroundColor: ["#83ba36", "#2a513f", "#378e8e", "#70e0bb"],
      },
    ],
  };

  const fireRiskData = {
    labels: ["Current Risk Factors"],
    datasets: [
      {
        label: "Risk Level",
        data: [85],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="p-6 bg-white shadow border-l-2">
      <h2 className="text-2xl font-semibold mb-6 border-b-1 pb-2">
        Weather Evaluation
      </h2>

      {/* Location Information */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center gap-2 mb-2">
          <MapPin className="text-[var(--color-forest-green)]" />
          <h3 className="font-semibold text-lg">{locationInfo.name}</h3>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-3">
          <div className="flex items-center gap-2">
            <Users className="text-[var(--color-teal)]" />
            <div>
              <p className="text-sm text-gray-600">Population</p>
              <p className="font-medium">{locationInfo.population}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Home className="text-[var(--color-teal)]" />
            <div>
              <p className="text-sm text-gray-600">Residential Areas</p>
              <p className="font-medium">{locationInfo.residentialAreas}</p>
            </div>
          </div>
        </div>
        <div className="mt-2 text-sm text-gray-600">
          <p>Elevation: {locationInfo.elevation}</p>
          <p>Nearest City: {locationInfo.nearestCity}</p>
          <p>Evacuation Zones: {locationInfo.evacuationZones}</p>
        </div>
      </div>

      {/* Current Conditions */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="flex items-center gap-2 p-4 bg-gray-50">
          <Droplets className="text-[var(--color-teal)]" />
          <div>
            <p className="text-sm text-gray-600">Humidity</p>
            <p className="text-xl font-bold">35%</p>
          </div>
        </div>
        <div className="flex items-center gap-2 p-4 bg-gray-50 ">
          <Wind className="text-[var(--color-teal)]" />
          <div>
            <p className="text-sm text-gray-600">Wind Speed</p>
            <p className="text-xl font-bold">15 mph</p>
          </div>
        </div>
        <div className="flex items-center gap-2 p-4 bg-gray-50">
          <TreePine className="text-[var(--color-forest-green)]" />
          <div>
            <p className="text-sm text-gray-600">Vegetation</p>
            <p className="text-xl font-bold">High</p>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="space-y-6">
        <div className="p-4 border ">
          <h3 className="text-lg font-semibold mb-4">Humidity Trend</h3>
          <Line
            data={humidityData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 border ">
            <h3 className="text-lg font-semibold mb-4">Tree Distribution</h3>
            <Doughnut
              data={treeData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: "bottom",
                  },
                },
              }}
            />
          </div>

          <div className="p-4 border ">
            <h3 className="text-lg font-semibold mb-4">Fire Risk Level</h3>
            <Bar
              data={fireRiskData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    max: 100,
                  },
                },
              }}
            />
            <p className="text-center mt-2 text-red-400 font-semibold">
              High Risk (85%)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
