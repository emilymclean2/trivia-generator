import React from "react";
import { Typography, Card, CardContent } from "@mui/material";

interface Props {
	text: string;
	isCorrect: boolean;
	showCorrect: boolean;
}

export const Answer: React.FC<Props> = ({ text, isCorrect, showCorrect }) => {
	var correctColor = "white";
	if (isCorrect && showCorrect) {
		correctColor = "hsla(107, 100%, 38%, 0.5)";
	}
	return (
		<Card variant="outlined" style={{ borderWidth: 2, borderColor: "black", margin: 10, backgroundColor: correctColor }}>
			<CardContent>
				<Typography variant="h5">{text}</Typography>
			</CardContent>
		</Card>
	);
};
