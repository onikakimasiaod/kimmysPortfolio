import { Component, OnInit } from '@angular/core';
import { PortfolioConfigurationService } from 'src/app/services/portfolio-configuration/portfolio-configuration.service';
import { HOME_CONTENT } from 'src/app/static-content/home';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public readonly HOME = HOME_CONTENT

  constructor() {
  }

  ngOnInit(): void {
  }

}
