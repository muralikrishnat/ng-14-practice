import { InventoryService } from './../../services/inventory.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  cols: any[] = [];
  rows: any[] = [];
  constructor(
    public router: Router,
    public inventoryService: InventoryService
  ) { }

  ngOnInit(): void {
    this.inventoryService.fetchRecords().subscribe((resp: any) => {
      this.rows = resp.data;
      if(resp.data.length > 0) {
        this.cols = Object.keys(resp.data[0]).map(x => ({ name: x }))
      }
    });
  }
  navigateToAddInventory(id?:any) {
    if(id) {
      this.router.navigate(['/inventory/edit/' + id]);
    } else {
      this.router.navigate(['/inventory/add']);
    }
  }
  deleteInventory(id:any) {
    this.inventoryService.deleteRecord(id).subscribe((resp: any) => {
      this.rows = resp.data;
      if(resp.data.length > 0) {
        this.cols = Object.keys(resp.data[0]).map(x => ({ name: x }))
      }
    });
  }
}
