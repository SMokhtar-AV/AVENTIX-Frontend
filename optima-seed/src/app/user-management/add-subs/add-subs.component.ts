import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from 'app/service/subscription.service';
import { Subscription } from 'app/_model/subscription';

@Component({
  selector: 'app-add-subs',
  templateUrl: './add-subs.component.html',
  styleUrls: ['./add-subs.component.css']
})
export class AddSubsComponent implements OnInit {

  sub: Subscription = {
    id: null,
    timestamp: '',
    firstName: '',
    lastName: '',
    email: '',
    type: '',
    phone : '',
    company : '',
    startDate: '',
    endDate: '',
  }

  submitted = false;

  constructor(private service: SubscriptionService) { }

  subscribe(): void {
    const newsub = {
      timestamp: this.sub.timestamp,
      firstName: this.sub.firstName,
      lastName: this.sub.lastName,
      email: this.sub.email,
      type: this.sub.type,
      phone : this.sub.phone,
      company : this.sub.company,
      startDate: this.sub.startDate,
      endDate: this.sub.endDate,
    };
    console.log(newsub);
    this.service.addSubs(newsub).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
  }

  ngOnInit(): void {
  }

}
