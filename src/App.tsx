import React, { useState } from "react";
import "./App.css";
import { Button, Typography, FormControl, Select, SelectChangeEvent, MenuItem, Slider, TextField } from "@mui/material";
import { TriviaQuestionComponent } from "./components/TriviaQuestionComponent";
const opentdb = require("opentdb-api");

interface TriviaOptions {
	amount: number;
	category: string;
	difficulty: string;
	type: string;
	token: any;
}

const QuestionCategories = [
	"any",
	"general",
	"books",
	"film",
	"music",
	"theatre",
	"television",
	"videogames",
	"boardgames",
	"science",
	"computers",
	"mathematics",
	"math",
	"mythology",
	"sports",
	"geography",
	"history",
	"politics",
	"art",
	"celebrities",
	"animals",
	"vehicles",
	"comics",
	"gadgets",
	"anime",
	"cartoons",
];

const QuestionDifficulties = ["any", "easy", "medium", "hard"];

const QuestionTypes = ["any", "choice", "multiple", "truefalse", "boolean"];

// const getRandomInt = (max: number) => {
// 	return Math.floor(Math.random() * max);
// };

function App() {
	const [questions, setQuestions] = useState<TriviaQuestion[]>([]);
	const [amount, setAmount] = useState<number>(10);
	const [category, setCategory] = useState<string>("any");
	const [difficulty, setDifficulty] = useState<string>("any");
	const [type, setType] = useState<string>("any");

	const getQuestions = async () => {
		const newToken = await opentdb.getToken();

		var options: TriviaOptions = {
			amount,
			category,
			difficulty,
			type,
			token: newToken,
		};

		const uniqueTrivia: TriviaQuestion[] = await opentdb.getTrivia(options);

		setQuestions(uniqueTrivia);

		console.log(uniqueTrivia);
	};

	return (
		<div
			className="App"
			//style={{ backgroundColor: "lightblue" }}
		>
			<Typography variant="h2" component="div" align="center" gutterBottom>
				Trivia Generator - Version 1.0
			</Typography>
			<div style={{ padding: 100, display: "flex" }}>
				<div id="selectAmount" style={{ flex: 1 }}>
					<Typography variant="h5" style={{ marginBottom: 20 }}>
						Number of Questions
					</Typography>
					<Slider
						aria-label="Number of Questions"
						valueLabelDisplay="auto"
						defaultValue={10}
						min={1}
						max={50}
						value={amount}
						onChange={(event: Event, newValue: number | number[], activeThumb: number) => {
							setAmount(newValue as number);
						}}
					/>
				</div>
				<div id="selectCategory" style={{ flex: 1 }}>
					<FormControl size="medium">
						<Typography variant="h5" style={{ marginBottom: 20 }}>
							Category
						</Typography>
						<Select
							value={category}
							defaultValue={QuestionCategories[0]}
							onChange={(event: SelectChangeEvent) => {
								setCategory(event.target.value as string);
							}}
							style={{ paddingLeft: 40, paddingRight: 40 }}
						>
							{QuestionCategories.sort().map((category) => {
								return (
									<MenuItem value={category} key={category}>
										{category}
									</MenuItem>
								);
							})}
						</Select>
					</FormControl>
				</div>
				<div id="selectDifficulty" style={{ flex: 1 }}>
					<FormControl size="medium">
						<Typography variant="h5" style={{ marginBottom: 20 }}>
							Difficulty
						</Typography>
						<Select
							value={difficulty}
							defaultValue={QuestionDifficulties[0]}
							onChange={(event: SelectChangeEvent) => {
								setDifficulty(event.target.value as string);
							}}
							style={{ paddingLeft: 40, paddingRight: 40 }}
						>
							{QuestionDifficulties.sort().map((difficulty) => {
								return (
									<MenuItem value={difficulty} key={difficulty}>
										{difficulty}
									</MenuItem>
								);
							})}
						</Select>
					</FormControl>
				</div>
				<div id="selectType" style={{ flex: 1 }}>
					<FormControl size="medium">
						<Typography variant="h5" style={{ marginBottom: 20 }}>
							Type
						</Typography>
						<Select
							value={type}
							defaultValue={QuestionTypes[0]}
							onChange={(event: SelectChangeEvent) => {
								setType(event.target.value as string);
							}}
							style={{ paddingLeft: 40, paddingRight: 40 }}
						>
							{QuestionTypes.sort().map((type) => {
								return (
									<MenuItem value={type} key={type}>
										{type}
									</MenuItem>
								);
							})}
						</Select>
					</FormControl>
				</div>
			</div>
			{/* <TextField id="outlined-textarea" label="Multiline Placeholder" placeholder="Placeholder" multiline /> */}
			<Button
				variant="contained"
				size="large"
				color="secondary"
				style={{ textTransform: "lowercase", margin: 50 }}
				onClick={() => {
					getQuestions();
				}}
			>
				Click here to generate your quiz!
			</Button>
			{questions.length > 0 &&
				questions.map((questionData, index) => (
					<TriviaQuestionComponent
						key={questionData.question}
						questionData={questionData}
						questionNumber={index}
					></TriviaQuestionComponent>
				))}
		</div>
	);
}

export default App;

/*
Future Additions

- Button to highlight correct answers

- Select multiple categories (have category be array called categories, and call getQuestions for length of categories)


*/
