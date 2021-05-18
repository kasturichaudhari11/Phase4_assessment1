import { Option } from './option';

export class Question {
    id: number;
    name: string;
    options: Option[];
    answered: boolean;

    constructor(question: any) {
        question = question || {};
        this.id = question.id;
        this.name = question.name;
        this.options = [];
        question.options.forEach(o => {
            this.options.push(new Option(o));
        });
    }
}
