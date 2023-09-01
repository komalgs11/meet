Feature: Show/Hide Event Details.
  Scenario: An event element is collapsed by default
    Given a user opens the app
    When the user looks at the event elements
    Then each event element should be collapsed by default
  Scenario: User can expand an event to see details.
    Given a user is viewing a list of events
    When the user clicks on an event element
    Then the clicked event element should expand to reveal additional event details
  Scenario: User can collapse an event to hide details.
    Given a user is viewing a list of events
    When the user clicks on an already expanded event element
    Then the user should able to hide the information by clicking on the button
