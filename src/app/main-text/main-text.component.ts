import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-text',
  templateUrl: './main-text.component.html',
  styleUrls: ['./main-text.component.sass']
})
export class MainTextComponent implements OnInit {
  quote = 'That wonderful Person of Sparta';

  constructor() { }

  ngOnInit() {
  }

}
