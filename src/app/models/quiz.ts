import { QuizConfig } from './quiz-config';
import { Question } from './question';

export class Quiz {
    id: number;
    name: string;
    description: string;
    config: QuizConfig;
    questions: Question[];

    constructor(quiz: any) {
        if (quiz) {
            this.id = quiz.id;
            this.name = quiz.name;
            this.description = quiz.description;
            this.config = new QuizConfig(quiz.config);
            this.questions = [];
            quiz.questions.forEach(quest => {
                this.questions.push(new Question(quest));
            });
        }
    }
}
