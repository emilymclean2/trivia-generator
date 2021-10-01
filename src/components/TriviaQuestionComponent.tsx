import React from "react";
import { Typography } from "@mui/material";

interface Props {
	questionData: TriviaQuestion;
	questionNumber: number;
}

export const TriviaQuestionComponent: React.FC<Props> = ({ questionData, questionNumber }) => {
	const shuffle = (array: string[]) => {
		let currentIndex = array.length,
			randomIndex;

		// While there remain elements to shuffle...
		while (currentIndex !== 0) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			// And swap it with the current element.
			[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
		}

		return array;
	};

	//const highlightCorrectAnswer = () => {};

	var answers: string[] = [...questionData.incorrect_answers, questionData.correct_answer];
	shuffle(answers);

	return (
		<div style={{ margin: 100 }}>
			<Typography style={{ textAlign: "left" }}>
				{questionNumber + 1}. {questionData.question}
			</Typography>
			{answers.map((answer) => {
				return <Typography key={answer}>{answer}</Typography>;
			})}
		</div>
	);
};

/*
To add:

make component for answers? if clicked, highlights correct answer.

Question: make case / switch thing: if true or false, add in front of question, etc

*/
