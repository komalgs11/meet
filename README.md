# meet
This is a progressive web application (PWA) with React using a test-driven development (TDD) technique.
and it is a serverless application.

# The Gherkin syntax (User's story)

## Feature 1: Filter Events By City
### SCENARIO 1: When user hasn’t searched for a specific city, show upcoming events from all cities.
- Given user hasn’t searched for any city;
- When the user opens the app;
- Then the user should see a list of upcoming events.

### SCENARIO 2: Users should see a list of suggestions when they search for a city.
- Given the main page is open;
- When a user starts typing in the city textbox;
- Then the user should receive a list of cities (suggestions) that match what they’ve typed.

### SCENARIO 3: User can select a city from the suggested list.
- Given user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;
- When the user selects a city (e.g., “Berlin, Germany”) from the list;
- Then their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.

## Feature 2: Show/Hide Event Details
### SCENARIO 1: An event element is collapsed by default.
- Given user opens the page;
- When the user looks at the event elements;
- Then each event element should be collapsed by default;

### SCENARIO 2: User can expand an event to see details.
- Given a user is viewing a list of events;
- When the user clicks on an event element;
- Then the clicked event element should expand to reveal additional event details.

### SCENARIO 3: User can collapse an event to hide details.
- Given a user is viewing a list of events;
- When the user clicks on an already expanded event element;
- Then the user should able to hide the information by clicking on the button;

## Feature 3: Specify the Number of Events.

### SCENARIO 1: When a user hasn’t specified a number, 32 events are shown by default.
- Given user hasn't entered the number;
- When the user is viewing a list of events ;
- Then the default value should be disply as 32 events are available.

### SCENARIO 2: The user can change the number of events displayed.
- Given the user is viewing a list of events;
- When a user enters the number to change the event displayed;
- Then the user should be able to update the displayed event number;

# Feature 4: Use the App When Offline
  
### SCENARIO 1: Show cached data when there’s no internet connection
- Given user trying to use the app;
- When there is no internet connection;
- Then the cached data should be shown to the user.

### SCENARIO 2: Show error when the user changes search settings (city, number of events)
- Given user enter in the setting option;
- when the user wants to change the search settings of the city, number of events etc. ;
- Then the user should get the error;

## Feature 5: Add an App Shortcut to the Home Screen
  
### SCENARIO 1: User can install the meet app as a shortcut on their device home screen
- Given user install the app;
- when user installs app then user able to add the app as a shortcut on their device's home screen ;
- Then user can open the app faster;

## Feature 6: Display Charts Visualizing Event Details
  
### SCENARIO 1: Show a chart with the number of upcoming events in each city.
- Given user see the element list;
- when user opens the element list of events;
- Then the user should able to see the number of upcoming events in each city;

# Use of serverless function in app
- Meet app using serverless function because there is No backend maintenance,
  easy to scale, always available, no cost for idle time.
  

# A screenshot of the app.

<img width="1439" alt="Screenshot 2023-09-11 at 20 03 07" src="https://github.com/komalgs11/meet/assets/126813272/cc05a241-9c3c-4719-824b-2c70459f9913">







