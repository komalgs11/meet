const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const handleInputChanged = (event) => {
    const value = event.target.value;

    if (isNaN(value)) {
      setErrorAlert("Only Numbers are allowed");
    } else if (value > 50) {
      setErrorAlert("maximum value is 50");
    } else if (value <= 0) {
      setErrorAlert("minimum value should be 1");
    } else {
      setErrorAlert("");
      setCurrentNOE(value);
    }
  };

  return (
    <div id="number-of-events">
      <input
        type="text"
        defaultValue="32"
        onChange={handleInputChanged}
        data-testid="numberOfEventsInput"
      />
    </div>
  );
};

export default NumberOfEvents;
