import { Component } from '@angular/core';
import { User } from './user';
import {EnrollmentService} from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;
  submitted = false;
  errorMsg = '';
  userModel = new User('','rob@test.com',4446664466,'default','morning', true);
  constructor(private enrollmentService: EnrollmentService){

  }
  validateTopic(value){
    if(value === 'default') {
      this.topicHasError = true;
    } else{
      this.topicHasError = false;
    }
  }

  onSubmit(userForm){
    console.log(userForm);
    this.submitted = true;
    this.enrollmentService.enroll(this.userModel)
    .subscribe( data => {
      console.log('Success!', data);
    }, error => {
      this.errorMsg = error.statusText;
    })
  }

}
