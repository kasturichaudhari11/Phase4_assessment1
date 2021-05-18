export class QuizConfig {
    isStepBackAllowed: boolean;
    showPager: boolean;

    constructor(quizconfig: any) {
        quizconfig = quizconfig || {};
        this.isStepBackAllowed = quizconfig.isStepBackAllowed;
        this.showPager = quizconfig.showPager;
    }
}
