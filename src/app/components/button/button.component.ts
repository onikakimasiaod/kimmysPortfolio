import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Button } from 'src/app/models/button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() button: Button;

  @Output() clicked = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public clickFunction(): void {
    this.clicked.emit();
  }
}
