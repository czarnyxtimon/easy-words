import { Component, OnInit } from '@angular/core';
import { WordsService } from '../../services/words.service';
import { WordType } from '../../data/models';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  word: WordType = null;

  constructor(private wordsService: WordsService) { }

  ngOnInit(): void {
    this.fetchWord();
  }

  addToNouns(word: WordType) {
    this.wordsService.addNouns(word);
    this.fetchWord();
  }

  addToVerbs(word: WordType) {
    this.wordsService.addVerbs(word);
    this.fetchWord();
  }

  check(): void {
    this.wordsService.check();
  }
  private fetchWord(): void {
    this.word = this.wordsService.getWords().shift();
  }
}
