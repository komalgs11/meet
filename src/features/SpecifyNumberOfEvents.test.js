import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

const feature = loadFeature("./src/features/SpecifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When a user hasn’t specified a number, 32 events are shown by default.", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let eventList;
    given("the user hasn't entered the number", () => {
      AppComponent = render(<App />);
    });

    when("the user is viewing a list of events", async () => {
      const AppDOM = AppComponent.container.firstChild;
      await waitFor(() => {
        eventList = within(AppDOM).queryAllByRole("listitem");
        expect(eventList[0]).toBeTruthy();
      });
    });

    then(
      /^the default value should be disply as (\d+) events are available$/,
      (arg0) => {
        expect(eventList.length).toEqual(32);
      }
    );
  });

  test("The user can change the number of events displayed.", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given("the user is viewing a list of events", async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
      await waitFor(() => {
        const eventList = within(AppDOM).queryAllByRole("listitem");
        expect(eventList[0]).toBeTruthy();
      });
    });

    when("a user enters the number to change the event displayed", async () => {
      const button = AppComponent.queryByTestId("numberOfEventsInput");
      await userEvent.type(button, "{backspace}{backspace}10");
    });

    then("the user should be able to update the displayed event number", () => {
      const AppDOM = AppComponent.container.firstChild;
      const eventList = within(AppDOM).queryAllByRole("listitem");
      expect(eventList.length).toEqual(10);
    });
  });
});
