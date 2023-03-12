import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'section-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public readonly footerText = `© onikakimasiaod. 2023. all rights reserved`

  constructor() { }

  ngOnInit(): void {
  }

}
