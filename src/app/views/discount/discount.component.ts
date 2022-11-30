import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';
import { Router, NavigationExtras } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss']
})
export class DiscountComponent implements OnInit {

  discountForm: any;
  details: any;
  discount: any;
  restId: any = localStorage.getItem('restId');
  isLoadingItem: boolean = true;
  isDisplay = false;
  name: string;
  searchText: string
  includedItems: any[] = [];


  constructor(private restaurantService: RestaurantService,
    private router: Router,
    private menuService: MenuService) {
    this.getRestaurantDiscount();

    this.discountForm = new FormGroup({"deliveryDiscount": new FormControl(null, [Validators.required]),
                                       "collectionDiscount": new FormControl(null,  [Validators.required])});
  }

  ngOnInit(): void {
    this.getItem()
  }
  toggleDisplay(){
    this.isDisplay = !this.isDisplay;
  }

  getRestaurantDiscount(){
    console.log("restid====", this.restId);

    this.restaurantService.getRestaurantProfile(this.restId).subscribe((response) => {
      console.log("response ==========>",response);
      if(response.success) {
        this.details = response.data;

        this.discountForm.patchValue({"deliveryDiscount":this.details.deliveryDiscount,
                                      "collectionDiscount": this.details.collectionDiscount});
        console.log("Patched value....." +  this.discountForm.value);
        console.log(this.details);
      }

     },
     (err) => {
      console.log(err);
    })
  }

  updateRestaurantDiscount(){

    console.log(this.discountForm.value);

    this.restaurantService.updateRestaurantDiscount(this.restId, this.discountForm.value).subscribe((response) => {
      console.log(response);
      if(response.success) {
        this.details = response.data;
        console.log(this.details);
      }

     },
     (err) => {

      console.log(err);
    })
  }
  // name:any
 items: any
  getItem(){
    this.menuService.getItems(this.restId).subscribe((res)=>{
      this.items = res.data

      console.log("getiteasdfgh=========>", res);

    })

  }

// search(){
//   this.items = this.items.filter(res =>{
//     return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());



// })}

addIncludedItems(event: any, itemId: string)
{
  const index = this.includedItems.findIndex((item: any) => item.id == itemId);
  if(index == -1) {
    this.includedItems.push({id: itemId, excludeDiscount: event.checked});
  }
  else {
    this.includedItems[index].excludeDiscount = event.checked;
  }
}

excludeDiscount() {

  console.log(this.includedItems);

  this.menuService.excludeItemDiscount(this.includedItems).subscribe((res) =>{
    console.log("updateitemdiscou======>",res);

  })

  }

}
