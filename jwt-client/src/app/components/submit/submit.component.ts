import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {

  isCopied: boolean;

  @Output() submitClicked = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  submit() {
    this.submitClicked.emit();
  }

}