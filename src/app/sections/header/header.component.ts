import { Component, OnInit } from '@angular/core';
import { PortfolioConfigurationService } from 'src/app/services/portfolio-configuration/portfolio-configuration.service';

@Component({
  selector: 'section-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public readonly SECTIONS: string[] = ['about me', 'projects', 'LOGO', 'skills', 'contact'];

  public LOGO: string;

  constructor(private readonly configuration: PortfolioConfigurationService) {
    this.LOGO = this.configuration.getLogo();
    console.log(this.LOGO)
  }

  ngOnInit(): void {
  }

}
