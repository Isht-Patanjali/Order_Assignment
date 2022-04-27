import { Component } from '@angular/core';
import {NbDialogService} from "@nebular/theme";
import * as _ from "lodash";
import {ReceiptComponent} from "./receipt/receipt.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  data: any = [];
  title = 'Codinova-Assign';
  itemName: any = [];
  flag: boolean = false;
  tableSubTotal: any = 0;
  tableTotal: any = 0;
  tableQuantity: any = 0;
  vat: number = 0;
  discount: number = 0;
  vatDisplay: number = 0;
  discountDisplay: number = 0;
  over: boolean = false;

  constructor(private dialogService: NbDialogService, public dialog: MatDialog) {
    this.itemName = [{
      name: 'Strawberries',
      img: '../assets/images/strawberry.png',
      quantity: 0,
      price: 120,
      total: 120,
      category: 'fruit',
      description: 'red fruit'
    }, {
      name: 'Apples',
      img: '../assets/images/apple.png',
      quantity: 0,
      price: 100,
      total: 100,
      category: 'fruit',
      description: 'red fruit'
    }, {
      name: 'Mangoes',
      img: '../assets/images/mango.png',
      quantity: 0,
      price: 90,
      total: 90,
      category: 'fruit',
      description: 'yellow fruit'
    }, {
      name: 'Banana',
      img: '../assets/images/banana.png',
      quantity: 0,
      price: 50,
      total: 50,
      category: 'fruit',
      description: 'yellow fruit'
    }, {
      name: 'Litchee',
      img: '../assets/images/fruit.png',
      quantity: 0,
      price: 110,
      total: 110,
      category: 'fruit',
      description: 'white fruit'
    }, {
      name: 'Grapes',
      img: '../assets/images/grapes.png',
      quantity: 0,
      price: 70,
      total: 70,
      category: 'fruit',
      description: 'green fruit'
    }, {
      name: 'Water mellon',
      img: '../assets/images/watermellon.png',
      quantity: 0,
      price: 60,
      total: 60,
      category: 'fruit',
      description: 'red fruit'
    }, {
      name: 'Guava',
      img: '../assets/images/fruit.png',
      quantity: 0,
      price: 40,
      total: 40,
      category: 'fruit',
      description: 'green fruit'
    }, {
      name: 'Blue berries',
      img: '../assets/images/blueberry.png',
      quantity: 0,
      price: 115,
      total: 115,
      category: 'fruit',
      description: 'blue fruit'
    }]
    this.tableData();
  }

  addItemImg(item: string) {
    this.flag = true;
    if (this.data.length > 0) {
      const name = _.find(this.data, {name: item})
      if (name) {
        name.quantity = name.quantity  + 1;
        name.total = name.total + name.price;
      } else {
        const name = _.find(this.itemName, {name: item})
        if (name) {
          const value = name;
          value.quantity = value.quantity + 1;
          this.data.push(value);
        }
      }
    } else {
      const name = _.find(this.itemName, {name: item})
      if (name) {
        const value = name;
        value.quantity = value.quantity + 1;
        this.data.push(value);
      }
    }
    this.tableData();
  }

  increaseItem(i: any) {
    this.data[i].quantity = this.data[i].quantity + 1;
    this.data[i].total = this.data[i].total + this.data[i].price;
    this.tableData();
  }

  decreaseItem(i: any) {
    if (this.data[i].quantity >= 2) {
      this.data[i].quantity = this.data[i].quantity - 1;
      this.data[i].total = this.data[i].total - this.data[i].price;
    } else {
      this.deleteItem(i);
    }
    this.tableData();
  }

  deleteItem(i: any) {
    const name : any = _.find(this.data, this.data[i]);
    if (name) {
      name.quantity = 0;
      name.total = name.price;
    }
    _.remove(this.data, this.data[i]);
    if (this.data.length === 0) {
      this.flag = false;
    }
    if (this.data.length === 0) {
      this.discount = 0;
      this.vat = 0;
    }
    this.tableData();
  }

  tableData() {
    this.tableSubTotal = _.sumBy(this.data, 'total');
    this.tableQuantity = _.sumBy(this.data, 'quantity');
    // console.log(this.tableSubTotal);
    this.vatDisplay = (this.tableSubTotal * this.vat) / 100;
    this.discountDisplay = (this.tableSubTotal * this.discount) / 100;
    this.tableTotal = this.tableSubTotal + this.vatDisplay - this.discountDisplay;
  }

  receipt() {
    if (this.data.length > 0) {
      const send: any = {
        tableData: this.data,
        discount: this.discount,
        vat: this.vat,
        total: this.tableTotal,
        quantity: this.tableQuantity
      };
      const dialogbox = this.dialog.open(ReceiptComponent, {
        width: '350px',
        height: 'fit-Content',
        data: {data: send},
      });
      dialogbox.afterClosed().subscribe(result => {
        if (result) {
          this.cancelSale();
        }
      });
    }
  }

  cancelSale() {
    if (this.data.length > 0) {
      this.discount = 0;
      this.vat = 0;
      for (let i = 0; i < this.data.length; i++) {
        this.data[i].quantity = 0;
        this.data[i].total = this.data[i].price;
      }
      this.data = [];
      this.flag = false;
      this.tableData();
    }
  }
}

