import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      { id: 'data/generalknowledge.json', name: 'GeneralKnowledge' },
      { id: 'data/java.json', name: 'Java' },
      { id: 'data/cssquiz.json', name: 'CssQuiz' }
    ];
  }

}
