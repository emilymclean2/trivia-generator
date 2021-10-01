interface TriviaOptions {
	amount: number;
	category: TriviaCategory;
	difficulty: QuestionDifficulty;
	type: QuestionType;
	token: any;
}

enum TriviaCategory {
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
}

enum QuestionDifficulty {
	"any",
	"easy",
	"medium",
	"hard",
}

enum QuestionType {
	"any",
	"choice",
	"multiple",
	"truefalse",
	"boolean",
}

interface TriviaQuestion {
	category: string;
	correct_answer: string;
	difficulty: string;
	incorrect_answers: string[];
	question: string;
	type: string;
}
