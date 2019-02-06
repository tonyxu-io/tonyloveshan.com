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
    var oneDay: number = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    var firstDate: Date = new Date(1460962800000); // 2018-04-18 PDT
    var secondDate: Date = new Date();

    var diffDays:number = Math.floor(
      Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay)
    );

    return diffDays;
  }
}
