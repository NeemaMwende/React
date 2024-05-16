import { fireEvent, render, screen } from '@testing-library/react';
// import App from './App';
import FeedbackForm from "./FeedbackForm"

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("Feedback Form", () => {
  test("Submission is disabled if score is lower than 5 and there is no feedback", () => {
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);

    const rangeInput = screen.getByLabelText(/Score:/);
    fireEvent.change(rangeInput, { target: { value: "4" } });

    const SubmitButton = screen.getByRole("button");
    fireEvent.click(SubmitButton);

    expect(handleSubmit).not.toHaveBeenCalled();
    expect(SubmitButton).toHaveAttributes("disabled");
  });
});
