import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mindreader';
  chosen:string=''

  ChoosenNumber(event: any): void {
    const value = parseInt(event.target.value, 10);
  
    if (value === 1) {
      this.chosen = "Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change.";
    } else if (value === 2) {
      this.chosen = "Believe in your infinite potential. Your only limitations are those you set upon yourself.";
    } else if (value === 3) {
      this.chosen = "Every accomplishment starts with the decision to try.";
    } else if (value === 4) {
      this.chosen = "Challenges are what make life interesting, and overcoming them is what makes life meaningful.";
    } else if (value === 5) {
      this.chosen = "Don’t watch the clock; do what it does. Keep going.";
    } else if (value === 6) {
      this.chosen = "The mind is everything. What you think, you become.";
    } else if (value === 7) {
      this.chosen = "You don’t have to be great to start, but you have to start to be great.";
    } else if (value === 8) {
      this.chosen = "Your mind will always believe everything you tell it. Feed it hope. Feed it truth. Feed it with love.";
    } else if (value === 9) {
      this.chosen = "The difference between ordinary and extraordinary is that little extra.";
    } else if (value === 10) {
      this.chosen = "Success is not final, failure is not fatal: It is the courage to continue that counts.";
    } else if (value < 1 || value > 10) {
      alert("Please choose a number between 1 and 10.");
      this.chosen = "";
    } else {
      this.chosen = "Please choose a valid number between 1 and 10.";
    }
  }
  
  Restart(): void {
    window.location.reload();
  }
}  
