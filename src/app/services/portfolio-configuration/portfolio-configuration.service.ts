import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioConfigurationService {

  private readonly LOGO = 'assets/base/logo.png';

  public getLogo(): string {
    return this.LOGO;
  }
}
