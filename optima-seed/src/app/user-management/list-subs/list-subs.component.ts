import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from 'app/service/subscription.service';
import { Subscription } from 'app/_model/subscription';

@Component({
  selector: 'app-list-subs',
  templateUrl: './list-subs.component.html',
  styleUrls: ['./list-subs.component.css']
})
export class ListSubsComponent implements OnInit {

  subs: Subscription[];
  selectedSub: Subscription = null;
  currentIndex = -1;
  //
  constructor(private service: SubscriptionService) { }

  ngOnInit(): void {
    this.readSubs();
  }

  readSubs(): void {
    this.service.getSubs().subscribe(
      subs => {
        this.subs = subs;
        console.log(subs);
      },
      error => {
        console.log(error);
    });
  }

  myDateParser(dateStr: string): string {
    let year = dateStr.toString().substring(0, 4);
    let month = dateStr.substring(5, 7);
    let day = dateStr.substring(8, 10);
    let validDate = year + '/' + month + '/' + day;
    return validDate
  }

  refresh(): void {
    this.readSubs();
    this.selectedSub = null;
    this.currentIndex = -1;
  }

  selectSub(sub: Subscription, index: number): void {
    this.selectedSub = sub;
    this.currentIndex = index;
  }

}
