import { Component } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeUk from "@angular/common/locales/uk";
registerLocaleData(localeUk, "uk");


@Component({
  selector: 'app-pipes-test',
  templateUrl: './pipes-test.component.html',
  styleUrls: ['./pipes-test.component.css']
})
export class PipesTestComponent {
  pi: number = Math.PI;
  num: number = 3.3400;
  town: string = "The London is a capital of Great Britain";
  dateObject: Date = new Date(2023, 2, 31);
  dateNumber: number = 1680281404220;
  dateString: string = "2023-03-31T16:50:04.220Z";
}
