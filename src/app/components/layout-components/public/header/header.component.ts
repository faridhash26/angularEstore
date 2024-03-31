import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  shipingQty: number;
  constructor(private router: Router) {
    this.shipingQty = 0;
  }
  search: string = '';
  ngOnInit(): void {
    const shipingListStringify = localStorage.getItem('shippingList');
    if (shipingListStringify) {
      this.shipingQty = JSON.parse(shipingListStringify).length;
    }
  }
  onSubmitSearch(searchForm: NgForm) {
    console.log('sdfsdfsdf', searchForm.value);
    this.router.navigate(['/products'], {
      queryParams: { search: searchForm.value.search },
    });
  }
}
