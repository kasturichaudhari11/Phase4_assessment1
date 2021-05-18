import { Component, OnInit } from '@angular/core';
import { Option } from '../models/option';
import { Question } from '../models/question';
import { Quiz } from '../models/quiz';
import { QuizConfig } from '../models/quiz-config';
import { QuizService } from '../service/quiz.service';
// import { HelperService } from '../services/helper.service';
// import { Option, Question, Quiz, QuizConfig } from '../models/index';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers: [QuizService]
})
export class QuizComponent implements OnInit {
  quizes: any[];
  quiz: Quiz = new Quiz(null);
  mode = 'quiz';
  quizName: string;
  config: QuizConfig = {
    'isStepBackAllowed': true,
    'showPager': true,
  };
 
  pager = {
    index: 0,
    size: 1,
    count: 1
  };

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.quizes = this.quizService.getAll();
    this.quizName = this.quizes[0].id;
    this.loadQuiz(this.quizName);
  }

  loadQuiz(quizName: string) {
    this.quizService.get(quizName).subscribe(res => {
      this.quiz = new Quiz(res);
      this.pager.count = this.quiz.questions.length;
    });
    this.mode = 'quiz';
  }

  get filteredQuestions() {
    return (this.quiz.questions) ?
      this.quiz.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }

  onSelect(question: Question, option: Option) {
      question.options.forEach((opt) => { if (opt.id !== option.id) opt.selected = false; });
  }

  goTo(index: number) {
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
      this.mode = 'quiz';
    }
  }

  isAnswered(question: Question) {
    return question.options.find(option => option.selected) ? 'Answered' : 'Not Answered';
  };

  isCorrect(question: Question) {
    return question.options.every(option => option.selected === option.isAnswer) ? 'correct' : 'wrong';
  };

  onSubmit() {
    let answers = [];
    this.quiz.questions.forEach(x => answers.push({ 'quizId': this.quiz.id, 'questionId': x.id, 'answered': x.answered }));

    console.log(this.quiz.questions);
    this.mode = 'result';
  }
}
