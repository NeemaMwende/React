// import { fireEvent, render, screen } from '@testing-library/react';
// // import App from './App';
// import FeedbackForm from "./FeedbackForm"

// // test('renders learn react link', () => {
// //   render(<App />);
// //   const linkElement = screen.getByText(/learn react/i);
// //   expect(linkElement).toBeInTheDocument();
// // });

// describe("Feedback Form", () => {
//   test("Submission is disabled if score is lower than 5 and there is no feedback", () => {
//     const handleSubmit = jest.fn();
//     render(<FeedbackForm onSubmit={handleSubmit} />);

//     const rangeInput = screen.getByLabelText(/Score:/);
//     fireEvent.change(rangeInput, { target: { value: "4" } });

//     const SubmitButton = screen.getByRole("button");
//     fireEvent.click(SubmitButton);

//     expect(handleSubmit).not.toHaveBeenCalled();
//     expect(SubmitButton).toHaveAttributes("disabled");
//   });
// });

import { fireEvent, render, screen } from "@testing-library/react";
import FeedbackForm from "./FeedbackForm";

describe("Feedback Form", () => {
  test("User is able to submit the form if the score is lower than 5 and additional feedback is provided", () => {
    const score = "3";
    const comment = "The pizza crust was too thick";
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);

    // You have to write the rest of the test below to make the assertion pass

    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment,
    });
  });

  test("User is able to submit the form if the score is higher than 5, without additional feedback", () => {
    const score = "9";
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);

    // You have to write the rest of the test below to make the assertion pass

    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment: "",
    });
  });
});

