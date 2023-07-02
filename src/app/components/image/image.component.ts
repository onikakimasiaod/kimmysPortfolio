import { Component, Input, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image';
import { PortfolioConfigurationService } from 'src/app/services/portfolio-configuration/portfolio-configuration.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() image: Image

  public readonly DEFAULT_IMAGE: string =  this.configuration.getDefaultImage()

  constructor(private readonly configuration: PortfolioConfigurationService) { }

  ngOnInit(): void {
  }

}
