import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PuzzleComponent }   from './puzzle/puzzle.component';
import { ContactComponent }   from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: PuzzleComponent, data : {text : 'The rules are easy : Find the way.', subtext : 'Use the input bar... are you ready?', answer: 'yes', newRoute: 'cool/city', tips: 'Type "yes" if you\'re ready'}},
  { path: 'cool/city', component: PuzzleComponent, data : {image : 'whatcityisthat.jpg', answer: 'Nantes', newRoute: 'school', tips: 'What is this city?'}},
  { path: 'school', component: PuzzleComponent, data : {image : 'school.png', answer: 'EPSI', newRoute: 'watchthismovie/seriously', tips: 'First one'}},
  { path: 'watchthismovie/seriously', component: PuzzleComponent, data : {image : 'samurai.jpg', answer: 'Mifune', newRoute: 'long/season', tips: 'Who\'s that cool actor?'}},
  { path: 'long/season', component: PuzzleComponent, data : {image : 'longseason.png', answer: 'Fishmans', newRoute: 'alain/damasio', tips: 'It\'s a long season...'}},
  { path: 'alain/damasio', component: PuzzleComponent, data : {image : 'horde.png', answer: 'Furvent', newRoute: '/blank', tips: '6ème forme du vent'}},
  { path: 'blank', component: PuzzleComponent, data : {image : 'blank.png', answer: 'lookimhidden', newRoute: '/movie/dune', tips: '<body>'}},
  { path: 'movie/dune', component: PuzzleComponent, data : {image : 'dune.png', answer: 'Jodorowsky', newRoute: '/changeme', tips: 'The unreleased one'}},
  { path: 'changeme', component: PuzzleComponent, data : {text : 'The answer is final', tips: 'Nice try, but that\'s not the way. Check url :)', disabled: 'true'}},
  { path: 'final', component: PuzzleComponent, data : {text : 'You are really close...', multipleAnswers: [{key:'yes', route:'/congratulation'},{key:'no', href:'https://google.com'}], newRoute: '/congratulation', tips: 'Do you want to find me?'}},
  { path: 'congratulation', component: ContactComponent },
  { path: '**', redirectTo: 'start', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true })],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
