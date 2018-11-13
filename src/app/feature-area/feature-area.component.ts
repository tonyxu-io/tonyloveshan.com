import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-feature-area",
  templateUrl: "./feature-area.component.html",
  styleUrls: ["./feature-area.component.css"]
})
export class FeatureAreaComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  getDays() {
    var oneDay:number = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    var firstDate: Date = new Date(2016,3,18);
    var secondDate: Date = new Date();

    var diffDays:number = Math.round(
      Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay)
    );

    return diffDays;
  }
}
