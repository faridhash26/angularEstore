import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
interface ISHipingList {
  id: string;
  name: string;
  color?: string;
  qty: number;
  price: number;
  img: string;
}
@Component({
  selector: 'app-shiping',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shiping.component.html',
  styleUrl: './shiping.component.css',
})
export class ShipingComponent implements OnInit {
  shipinglist: Array<ISHipingList>;
  constructor() {
    this.shipinglist = [];
  }
  ngOnInit(): void {
    const shipingListStringify = localStorage.getItem('shippingList');
    if (shipingListStringify) {
      this.shipinglist = JSON.parse(shipingListStringify);
    }
  }

  totalprice() {
    return this.shipinglist.reduce(
      (acc, cur) => acc + Number(cur.price) * cur.qty,
      0
    );
  }
  deleteFromShipingList(id: string) {
    this.shipinglist = this.shipinglist.filter((item) => item.id !== id);
    localStorage.setItem('shippingList', JSON.stringify(this.shipinglist));
  }
  increaseQtyItem(id: string) {
    const foundItemIndex = this.shipinglist.findIndex((item) => item.id === id);
    this.shipinglist[foundItemIndex].qty =
      this.shipinglist[foundItemIndex].qty + 1;
    localStorage.setItem('shippingList', JSON.stringify(this.shipinglist));
  }
  decreaseQtyItem(id: string) {
    const foundItemIndex = this.shipinglist.findIndex((item) => item.id === id);
    this.shipinglist[foundItemIndex].qty =
      this.shipinglist[foundItemIndex].qty - 1;
    localStorage.setItem('shippingList', JSON.stringify(this.shipinglist));
  }
}
