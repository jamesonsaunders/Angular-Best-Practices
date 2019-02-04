import { Component, OnInit } from '@angular/core';
import { NumberService } from 'src/app/providers/number/number.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  count = 0;

  constructor(private numberService: NumberService,) { }

  ngOnInit() {
    this.count = this.numberService.process(this.count);
  }

}
