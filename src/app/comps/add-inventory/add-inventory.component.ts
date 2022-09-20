import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import globaldata from 'src/app/data/globaldata';
import { InventoryService } from './../../services/inventory.service';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})
export class AddInventoryComponent implements OnInit {
  id: any = null;
  record: any = {
    category: ''
  };
  paramsSubscription: any;
  categories: any[] = globaldata.CATEGORIES;
  currencies: any[] = globaldata.CURRENCIES;
  constructor(
    private route: ActivatedRoute, 
    public router: Router,
    public inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.id = (this.route.snapshot.params as any).id;
    this.paramsSubscription = this.route.params.subscribe(params => {
      if(this.id !== params['id']){
        this.id = params['id'];
        this.loadRecord();
      }
    });
    this.loadRecord();
  }
  loadRecord() {
    if(this.id != null) {
      this.inventoryService.getRecord(this.id).subscribe((resp:any) => {
        if(resp && resp.data && resp.data.length > 0) {
          this.record = resp.data[0];
        }
      });
    }
  }
  ngOnDestroy() {
    if(this.paramsSubscription) {
      this.paramsSubscription.unsubscribe();
    }
  }
  handleRecord() {
    this.inventoryService.addEditRecord(this.record).subscribe(() => {
      this.router.navigate(['/inventory']);
    });
  }
  setPrice() {
    let parseIt = parseFloat(this.record.price);
    this.record.price = isNaN(parseIt) ? 0 : (
      (this.record.price + '').substr(-1, 1) === '.' ?
      parseIt + '.' :
      parseIt
    );
  }
  roundPrice(){
    if(this.record.price && (this.record.price + '').length > 0) {
      let parseIt = parseFloat(this.record.price);
      this.record.price = parseIt.toFixed(2);
    }
  }
}
