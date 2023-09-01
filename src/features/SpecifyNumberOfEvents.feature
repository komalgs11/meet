Feature: Specify the Number of Events.
  Scenario: When a user hasn’t specified a number, 32 events are shown by default.
    Given the user hasn't entered the number
    When the user is viewing a list of events
    Then the default value should be disply as 32 events are available
  Scenario: The user can change the number of events displayed.
    Given the user is viewing a list of events
    When a user enters the number to change the event displayed
    Then the user should be able to update the displayed event number
