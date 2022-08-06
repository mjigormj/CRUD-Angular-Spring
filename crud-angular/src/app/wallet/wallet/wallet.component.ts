import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Stock } from '../models/stock';
import { WalletService } from '../services/wallet.service';



@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  stocks$: Observable<Stock[]>;
  displayedColumns = ['name', 'price'];

  constructor(
    private walletService: WalletService,
    public dialog: MatDialog
  ) {
  this.stocks$ = this.walletService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar titulos.');
        return of([])
      })
    );
}

/** Gets the total cost of all transactions. */
getTotalPrice() {
  return 0
  //return this.stocks.map(t => t.price).reduce((acc, value) => acc + value, 0);
}

onError(errorMsg: string) {
  this.dialog.open(ErrorDialogComponent, {
    data: errorMsg
  });
}

ngOnInit(): void {
}

}
