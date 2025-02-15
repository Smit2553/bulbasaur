import { AzureMap, AzureMapsProvider } from "react-azure-maps";
import { AuthenticationType } from "azure-maps-control";

const option = {
  authOptions: {
    authType: AuthenticationType.subscriptionKey,
    subscriptionKey: import.meta.env.VITE_AZUREKEY,
  },
  style: "satellite",
  enableAccessibility: false,
  showLogo: false,
  showFeedbackLink: false,
};

const DefaultMap = () => (
  <div style={{ height: "300px" }}>
    <AzureMapsProvider>
      <AzureMap options={option}></AzureMap>
    </AzureMapsProvider>
  </div>
);
export default DefaultMap;
