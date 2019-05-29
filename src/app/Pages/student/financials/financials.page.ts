import { LoadingService } from 'src/app/core/loader/loading.service';
import { FinancialService } from './../../../Services/student/financial.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financials',
  templateUrl: './financials.page.html',
  styleUrls: ['./financials.page.scss'],
})
export class FinancialsPage implements OnInit {

  financialDeatils: any;
  totalBalance: number;

  constructor(
    private financialService : FinancialService,
    private loadingService: LoadingService
    ) { }

  ngOnInit() {
    this.getFinancialDetails();
  }

  getFinancialDetails(){
    this.loadingService.loadingStart();
    this.financialService.financialDetails().subscribe(res => {
      this.loadingService.loadingDismiss();
      this.financialDeatils = res.Data;
      this.totalBalance = this.calculateTotalBalance(this.financialDeatils.TotalDebit, this.financialDeatils.TotalCredit);
    })
  }

  calculateTotalBalance (debit: number, credit: number): number {
    let result = debit - credit;
    return Number(result.toFixed(2));
  }
}
