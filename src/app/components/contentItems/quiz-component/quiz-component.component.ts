import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import {map, Subscription, take, timer} from "rxjs";

@Component({
  selector: 'app-quiz-component',
  templateUrl: './quiz-component.component.html',
  styleUrls: ['./quiz-component.component.scss'],
})
export class QuizComponentComponent  implements OnInit {

  quizSubmitted: boolean = false; // Flag to track submission state

  questions: any[] = [];
  currentQuestionIndex = 0;
  selectedOption: string | null = null;
  userResponses: Array<{ questionId: number; selectedOption: string }> = [];
  timeLimit: number | null = null; // Updated to handle time limit
  timeLeft: number = 0; // Time left in seconds
  timerSubscription!: Subscription;

  constructor(private cdr: ChangeDetectorRef, private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getQuizQues().subscribe((quiz) => {
      this.questions = quiz.questions; // Assuming quiz object structure
      this.timeLimit = quiz.timeLimit; // Fetching timeLimit from the quiz object
      this.userResponses = this.questions.map(q => ({ questionId: q.id, selectedOption: '' }));

      // Initialize timer if timeLimit exists
      if (this.timeLimit) {
        this.timeLeft = this.timeLimit; // Directly use timeLimit as the number of seconds left
        this.startTimer();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  onSelectOption(option: string): void {
    this.selectedOption = option;
    this.userResponses[this.currentQuestionIndex].selectedOption = option;
  }

  startTimer() {
    // Assuming timeLimit is a non-null number at this point
    const endDate = new Date();
    endDate.setSeconds(endDate.getSeconds() + this.timeLimit!);

    this.timerSubscription = timer(0, 1000).pipe(
        take(this.timeLimit!),
        map(() => {
          this.timeLeft--;
        })
    ).subscribe({
      complete: () => {
        console.log('Time is up!');
        this.submitQuiz(); // Automatically submit the quiz when time is up
      }
    });

    // Initialize timeLeft with the total duration in seconds at the start
    this.timeLeft = this.timeLimit!;
  }


  formatTime(seconds: number): string {
    const minutes: number = Math.floor(seconds / 60);
    const remainingSeconds: number = seconds % 60;
    return `${this.padZero(minutes)}:${this.padZero(remainingSeconds)}`;
  }

  padZero(number: number): string {
    return number < 10 ? `0${number}` : number.toString();
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
    this.submitQuiz();
  }

  submitQuiz(): void {
    console.log('Submitting quiz answers...', this.userResponses);
    // Additional logic to handle quiz submission, e.g., sending answers to a backend API

    this.quizSubmitted = true; // Assuming quizSubmitted is a boolean flag used to indicate submission status
    // Call change detection if needed, e.g., if using ChangeDetectorRef
    this.cdr.detectChanges(); // Force change detection
  }


  getWidthStyle(): string {
    const widthPercentage = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
    return `width: ${widthPercentage}%`;
  }



}
