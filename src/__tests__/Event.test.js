import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Event from "../components/Event";
import mockData from "../mock-data";

const mockEvent = mockData[0];

describe("<Event /> Component", () => {
  let EventComponent;
  beforeEach(() => {
    EventComponent = render(<Event event={mockEvent} />);
  });

  test("renders events title and summary", () => {
    const title = EventComponent.queryByText(mockEvent.summary);
    expect(title).toBeInTheDocument();
  });

  test("renders events time", () => {
    const time = EventComponent.queryByText(mockEvent.created);
    expect(time).toBeInTheDocument();
  });

  test("renders events location", () => {
    const location = EventComponent.queryByText(mockEvent.location);
    expect(location).toBeInTheDocument();
  });

  test("renders event details button with the title 'show details'", () => {
    const button = EventComponent.queryByText("Show Details");
    expect(button).toBeInTheDocument();
  });

  test("by default event's details section should be hidden", () => {
    const eventDOM = EventComponent.container.firstChild;
    const details = eventDOM.querySelector(".details");
    expect(details).not.toBeInTheDocument();
  });

  test("show the details section when user clicks on the 'show details' button", async () => {
    const user = userEvent.setup();
    const button = EventComponent.queryByText("Show Details");
    await user.click(button);

    const eventDOM = EventComponent.container.firstChild;
    const details = eventDOM.querySelector(".details");
    expect(details).toBeInTheDocument();
  });

  test("hide the details section when user clicks on the 'hide details' button", async () => {
    const button = EventComponent.queryByText("Show Details");
    const eventDOM = EventComponent.container.firstChild;
    await userEvent.click(button);

    const hideButton = EventComponent.queryByText("Hide Details");
    await userEvent.click(hideButton);

    const details = eventDOM.querySelector(".details");
    expect(details).not.toBeInTheDocument();
  });
});
