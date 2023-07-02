import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioConfigurationService {


  private readonly CATALOG_IMAGES = {
    LOGO: 'assets/base/logo.png',
    DEFAULT_IMAGE: 'assets/base/default.png',
  }

  public getLogo(): string {
    return this.CATALOG_IMAGES.LOGO;
  }

  public getDefaultImage(): string {
    return this.CATALOG_IMAGES.DEFAULT_IMAGE;
  }
}
