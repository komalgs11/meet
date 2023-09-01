import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("An event element is collapsed by default", ({ given, when, then }) => {
    let AppComponent;
    given("a user opens the app", () => {
      AppComponent = render(<App />);
    });

    when("the user looks at the event elements", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });
    });

    then("each event element should be collapsed by default", async () => {
      const EventDOM = AppComponent.container.firstChild;
      const details = EventDOM.querySelector(".details");
      expect(details).not.toBeInTheDocument();
    });
  });

  test("User can expand an event to see details.", ({ given, when, then }) => {
    let AppComponent;
    given("a user is viewing a list of events", async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;

      await waitFor(() => {
        const eventList = within(AppDOM).queryAllByRole("listitem");
        expect(eventList[0]).toBeTruthy();
      });
    });

    when("the user clicks on an event element", async () => {
      const button = AppComponent.queryAllByText("Show Details")[0];
      await userEvent.click(button);
    });

    then(
      "the clicked event element should expand to reveal additional event details",
      () => {
        const EventDOM = AppComponent.container.firstChild;
        const details = EventDOM.querySelector(".details");
        expect(details).toBeInTheDocument();
      }
    );
  });

  test("User can collapse an event to hide details.", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let button;
    given("a user is viewing a list of events", async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;

      await waitFor(() => {
        const eventList = within(AppDOM).queryAllByRole("listitem");
        expect(eventList[0]).toBeTruthy();
      });

      button = AppComponent.queryAllByText("Show Details")[0];
      await userEvent.click(button);

      const EventDOM = AppComponent.container.firstChild;
      const details = EventDOM.querySelector(".details");
      expect(details).toBeInTheDocument();
    });

    when("the user clicks on an already expanded event element", async () => {
      await userEvent.click(button);
    });

    then(
      "the user should able to hide the information by clicking on the button",
      () => {
        const EventDOM = AppComponent.container.firstChild;
        const details = EventDOM.querySelector(".details");
        expect(details).not.toBeInTheDocument();
      }
    );
  });
});
