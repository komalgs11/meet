import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import NumberOfEvents from "../components/NumberOfEvents";

describe("<NumberOfEvents /> Component", () => {
  let NumberOfEventsComponent;
  beforeEach(() => {
    NumberOfEventsComponent = render(
      <NumberOfEvents setNumberOfEvents={() => {}} setErrorAlert={() => {}} />
    );
  });

  test("the input textbox", () => {
    const input = NumberOfEventsComponent.queryByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  test("default number of events input value is 32", () => {
    const input = NumberOfEventsComponent.queryByRole("textbox");
    expect(input).toHaveValue("32");
  });

  test("updates number of events when user types", async () => {
    const input = NumberOfEventsComponent.queryByRole("textbox");
    await userEvent.type(input, "{backspace}{backspace}10");
    expect(input).toHaveValue("10");
  });
});
