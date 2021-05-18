export class Option {
    id: number;
    questionId: number;
    name: string;
    isAnswer: boolean;
    selected: boolean;

    constructor(option: any) {
        option = option || {};
        this.id = option.id;
        this.questionId = option.questionId;
        this.name = option.name;
        this.isAnswer = option.isAnswer;
    }
}
