Project Bulbasaur is an innovative wildfire early warning system that leverages multiple technologies and APIs to protect communities from fire hazards. The system begins with an Azure Map Package integration that allows users to select their current location. Once a location is chosen, the system extracts the precise coordinates, which then triggers two parallel processes:

    It queries a Weather API to gather critical environmental data such as humidity and dryness levels

    It extracts satellite or aerial imagery of the specified coordinates

The gathered imagery is processed through a Wildfire Classification Model that analyzes the visual data for signs of wildfire activity. If the model detects a wildfire, it automatically triggers the Twilio API to send immediate alert messages to users in the affected area. All this information, including weather conditions and classification results, is aggregated and displayed on a web interface for comprehensive monitoring.

This automated pipeline demonstrates a sophisticated approach to early wildfire detection by combining geographical data, weather metrics, image analysis, and instant communication capabilities, potentially providing crucial early warnings that could save lives and property.
