import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stock } from '../models/stock';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private readonly API = 'api/stocks';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Stock[]>(this.API)
      .pipe(
        first(),
        delay(1000),
        tap(stocks => console.log(stocks))
      );
  }
}
