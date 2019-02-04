import { Component, OnInit } from '@angular/core';
import { NumberService } from 'src/app/providers/number/number.service';

@Component({
  selector: 'app-sequence',
  templateUrl: './sequence.component.html',
  styleUrls: ['./sequence.component.scss']
})
export class SequenceComponent implements OnInit {
  count = 1;

  constructor(private numberService: NumberService) { }

  ngOnInit() {
    this.count = this.numberService.process(this.count);
  }

}
