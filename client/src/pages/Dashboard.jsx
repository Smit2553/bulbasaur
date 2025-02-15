import { AlertTriangle, Map, Info } from "lucide-react";
import DefaultMap from "../components/DefaultMap";

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <header className="bg-orange-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">WildFire Watch</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/alerts" className="hover:underline">
                  Alerts
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 bg-gray-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2 flex items-center">
              <Map className="mr-2" /> Fire Map
            </h2>
            <DefaultMap />
          </div>
          <div className="space-y-4">
            <div className="bg-orange-100 p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-2 flex items-center">
                <AlertTriangle className="mr-2 text-orange-500" /> Active Alerts
              </h2>
              <ul className="list-disc list-inside">
                <li>San Gabriel Mountains</li>
                <li>Sierra Nevada Foothills</li>
                <li>Coastal Range</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-2 flex items-center">
                <Info className="mr-2" /> Quick Stats
              </h2>
              <ul className="space-y-2">
                <li>Active Fires: 3</li>
                <li>Acres Burned: 5,000</li>
                <li>Containment: 15%</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-200 text-center p-4 mt-8">
        <div className="container mx-auto">
          <p>&copy; 2025 WildFire Watch. All rights reserved.</p>
          <div className="mt-2">
            <a href="/privacy" className="text-orange-500 hover:underline mr-4">
              Privacy Policy
            </a>
            <a href="/terms" className="text-orange-500 hover:underline mr-4">
              Terms of Service
            </a>
            <a href="/contact" className="text-orange-500 hover:underline">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
