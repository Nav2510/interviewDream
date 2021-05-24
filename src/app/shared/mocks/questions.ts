import { IQuestionModel } from "../models/question.model";

export const questions: IQuestionModel[] = [
  {
    id: "2281",
    // tslint:disable-next-line: max-line-length
    statement:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    difficulty: 4,
    categories: ["Data structure"],
    order: 2,
    numberOfOptions: 4,
    marks: 20,
    subCategories: ["Array"],
    type: "multiple_correct",
    // tslint:disable-next-line: max-line-length
    explanation:
      "Lorem ipsum dolor sit amet, consecturu adipising elit, Lorem ipsum dolor sit amet, consecturu adipising elit, Lorem ipsum dolor sit amet, consecturu adipising elit, Lorem ipsum dolor sit amet, consecturu adipising elit,",
    options: [
      {
        label: "Label1",
        value: "value1",
        isAnswer: true,
      },
      {
        label: "Label2",
        value: "value2",
      },
      {
        label: "Label3",
        value: "value3",
        isAnswer: true,
      },
      {
        label: "Label4",
        value: "value4",
        isAnswer: true,
      },
    ],
  },
  {
    id: "2281",
    // tslint:disable-next-line: max-line-length
    statement:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    difficulty: 4,
    categories: ["Data structure"],
    order: 2,
    numberOfOptions: 4,
    marks: 20,
    subCategories: ["Array", "Algorithm"],
    type: "single_correct",
    explanation: "",
    options: [
      {
        label: "Label1",
        value: "value1",
        isAnswer: true,
      },
      {
        label: "Label2",
        value: "value2",
      },
      {
        label: "Label3",
        value: "value3",
      },
      {
        label: "Label4",
        value: "value4",
      },
    ],
  },
];
