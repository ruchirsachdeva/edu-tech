import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-quiz-component',
  templateUrl: './quiz-component.component.html',
  styleUrls: ['./quiz-component.component.scss'],
})
export class QuizComponentComponent  implements OnInit {

  questions: any[] = [];
  currentQuestionIndex = 0;
  selectedOption: string | null = null;
  userResponses: Array<{ questionId: number; selectedOption: string }> = [];


  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getQuizQues()
      .subscribe(data => {
        this.questions = data

        // Initialize userResponses with null for each question
        this.userResponses = data.map((q: any) => ({ questionId: q.id, selectedOption: '' }));      }
      );
  }

  onSelectOption(option: string): void {
    this.selectedOption = option;
    this.userResponses[this.currentQuestionIndex].selectedOption = option;

  }

  isLastQuestion(): boolean {
    return this.currentQuestionIndex === this.questions.length - 1;
  }
  isFirstQuestion(): boolean {
    return this.currentQuestionIndex === 0;
  }


  onNextQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.selectedOption = null; // Reset selected option for the next question
    }
  }

  onPreviousQuestion(): void {
    if (this.currentQuestionIndex <=this.questions.length - 1 && this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;  
      this.selectedOption = this.userResponses[this.currentQuestionIndex].selectedOption;
    }
  }

  onClick(event: Event): void {
    event.preventDefault();
    console.log('Submitting quiz answers...', this.userResponses);
  }

}
