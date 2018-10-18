import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.css']
})
export class PuzzleComponent implements OnInit {

  image: string;
  text: string;
  subtext: string;
  field: string;
  answer: string;
  tips: string;
  newRoute: string;
  disabled: boolean;
  isClicked: boolean;
  multipleAnswers: any[];
  private sub: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.sub = this.route.data.subscribe(data => {
      this.image = (data['image']) ? data['image'] : null;
      this.text = (data['text']) ? data['text'] : null;
      this.subtext = (data['subtext']) ? data['subtext'] : null;
      if(data['answer']) this.answer = data['answer'];
      if(data['newRoute']) this.newRoute = data['newRoute'];
      if(data['tips']) this.tips = data['tips'];
      if(data['disabled']) this.disabled = data['disabled'];
      if(data['multipleAnswers']) this.multipleAnswers = data['multipleAnswers'].slice();
    });
  }

  doSomething(event) {
    if(this.multipleAnswers){
      this.multipleAnswers.forEach(answers => {
        if(answers.key.toLowerCase() === event.toLowerCase()){
          if(answers.href){
            window.location=answers.href;
            return;
          }
          this.router.navigateByUrl(answers.route);
        }
      });
      return;
    }
    if(this.answer.toLowerCase() === event.toLowerCase()){
      this.router.navigateByUrl(this.newRoute);
    }
  }

  animateInput(){
    this.isClicked = true;
  }
  stopInput(){
    this.isClicked = false;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
