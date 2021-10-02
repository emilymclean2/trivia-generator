/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Typography, Card, CardActions, CardContent, Button } from "@mui/material";
import { Answer } from "./Answer";

interface Props {
	questionData: TriviaQuestion;
	questionNumber: number;
}

export const TriviaQuestionComponent: React.FC<Props> = ({ questionData, questionNumber }) => {
	const [showCorrect, setShowCorrect] = useState(false);
	//const [answers, setAnswers] = useState([...questionData.incorrect_answers, questionData.correct_answer]);
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

		console.log("shuffle");

		return array;
	};

	var answers: string[] = shuffle([...questionData.incorrect_answers, questionData.correct_answer]);

	//const answers: string[] = shuffle([...questionData.incorrect_answers, questionData.correct_answer]);
	//shuffle(answers);

	// useEffect(() => {
	// 	shuffle(answers);
	// }, []);

	return (
		<Card
			style={{
				margin: 100,
				//backgroundColor: "lightpink"
			}}
		>
			<CardContent>
				<Typography variant="h6" style={{ textAlign: "left" }}>
					{questionNumber + 1}. {questionData.question}
				</Typography>
				{answers.map((answer) => {
					return (
						<Answer
							key={answer}
							text={answer}
							isCorrect={answer === questionData.correct_answer}
							showCorrect={showCorrect}
						></Answer>
					);
				})}
			</CardContent>
			<CardActions style={{ justifyContent: "center" }}>
				<Button
					size="small"
					variant="contained"
					onClick={() => {
						setShowCorrect(true);
					}}
					style={{ marginBottom: 10 }}
				>
					Show answer
				</Button>
			</CardActions>
		</Card>
	);
};

/*
To fix:

- Answers shuffle again after clicking "show answer"

*/

/*
To add:

make component for answers? if clicked, highlights correct answer.

Question: make case / switch thing: if true or false, add in front of question, etc

*/
