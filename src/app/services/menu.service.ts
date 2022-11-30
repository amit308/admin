import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  httpHeaders;
  httpOptions;

  constructor(private httpClient: HttpClient)
  {
    this.httpHeaders = new HttpHeaders({
      "Authorization": "Bearer " + localStorage.getItem('token')
    });

    this.httpOptions = {headers: this.httpHeaders}
  }
  addTopping(id, data): Observable<any>
  {
    return this.httpClient.post(environment.apiBaseUrl + 'adminService/addRestTopping/' + id, data, this.httpOptions);
  }
  addOption(id, data): Observable<any>
  {
    return this.httpClient.post(environment.apiBaseUrl + 'adminService/addRestOption/' + id, data, this.httpOptions);
  }
  addToppingGroup(id, data): Observable<any>
  {
    return this.httpClient.post(environment.apiBaseUrl + 'adminService/addRestToppingGroup/' + id, data, this.httpOptions);
  }
  addCategory(id, data): Observable<any>
  {
    return this.httpClient.post(environment.apiBaseUrl + 'adminService/addRestCategory/' + id, data, this.httpOptions);
  }
  addItem(id, data): Observable<any>
  {
    return this.httpClient.post(environment.apiBaseUrl + 'adminService/addRestItem/' + id, data, this.httpOptions);
  }
  getCategory(id): Observable<any>
  {
    return this.httpClient.get(environment.apiBaseUrl + 'adminService/getRestCategories/' + id, this.httpOptions);
  }

  getItems(id): Observable<any>
  {
      return this.httpClient.get(environment.apiBaseUrl + 'adminService/getRestItems/' + id, this.httpOptions);
  }

  updateItem(id, data): Observable<any>
  {
      return this.httpClient.put(environment.apiBaseUrl + 'adminService/updateRestItem/' + id, data, this.httpOptions);
  }

  getToppingGroup(id): Observable<any>
  {
      return this.httpClient.get(environment.apiBaseUrl + 'adminService/getRestToppingGroup/' + id, this.httpOptions);
  }

  getOption(id): Observable<any>
  {
      return this.httpClient.get(environment.apiBaseUrl + 'adminService/getRestOption/' + id, this.httpOptions);
  }

  getTopping(id): Observable<any>
  {
      return this.httpClient.get(environment.apiBaseUrl + 'adminService/getRestTopping/' + id, this.httpOptions);
  }

  deleteItem(id): Observable<any>
  {
    return this.httpClient.delete(environment.apiBaseUrl + 'adminService/deleteRestItem/' + id, this.httpOptions);
  }

  deleteCategory(id): Observable<any>
  {
    return this.httpClient.delete(environment.apiBaseUrl + 'adminService/deleteRestCategory/' + id, this.httpOptions);
  }

  deleteOption(id): Observable<any>
  {
    return this.httpClient.delete(environment.apiBaseUrl + 'adminService/deleteRestOption/' + id, this.httpOptions);
  }

  deleteTopping(id): Observable<any>
  {
    return this.httpClient.delete(environment.apiBaseUrl + 'adminService/deleteRestTopping/' + id, this.httpOptions);
  }

  deleteToppingGroup(id): Observable<any>
  {
    return this.httpClient.delete(environment.apiBaseUrl + 'adminService/deleteRestToppingGroup/' + id, this.httpOptions);
  }

  updateCategory(id, data): Observable<any>
  {
          return this.httpClient.put(environment.apiBaseUrl + 'adminService/updateRestCategory/' + id, data, this.httpOptions);
  }

  updateOption(id, data): Observable<any>
  {
      return this.httpClient.put(environment.apiBaseUrl + 'adminService/updateRestOption/' + id, data, this.httpOptions);
  }

  updateTopping(id, data): Observable<any>
  {
      return this.httpClient.put(environment.apiBaseUrl + 'adminService/updateRestTopping/' + id, data, this.httpOptions);
  }

  updateToppingGroup(id, data): Observable<any>
  {
      return this.httpClient.put(environment.apiBaseUrl + 'adminService/updateRestToppingGroup/' + id, data, this.httpOptions);
  }

  addAllergy(id, data): Observable<any>
  {
    return this.httpClient.post(environment.apiBaseUrl + 'adminService/addRestAllergy/' + id, data, this.httpOptions);
  }

  getAllergy(id): Observable<any>
  {
      return this.httpClient.get(environment.apiBaseUrl + 'adminService/getRestAllergy/' + id, this.httpOptions);
  }

  updateAllergy(id, data): Observable<any>
  {
      return this.httpClient.put(environment.apiBaseUrl + 'adminService/updateRestAllergy/' + id, data, this.httpOptions);
  }

  deleteAllergy(id): Observable<any>
  {
    return this.httpClient.delete(environment.apiBaseUrl + 'adminService/deleteRestAllergy/' + id, this.httpOptions);
  }

  addAllergyGroup(id, data): Observable<any>
  {
    return this.httpClient.post(environment.apiBaseUrl + 'adminService/addRestAllergyGroup/' + id, data, this.httpOptions);
  }

  getAllergyGroup(id): Observable<any>
  {
      return this.httpClient.get(environment.apiBaseUrl + 'adminService/getRestAllergyGroup/' + id, this.httpOptions);
  }

  updateAllergyGroup(id, data): Observable<any>
  {
      return this.httpClient.put(environment.apiBaseUrl + 'adminService/updateRestAllergyGroup/' + id, data, this.httpOptions);
  }

  deleteAllergyGroup(id): Observable<any>
  {
    return this.httpClient.delete(environment.apiBaseUrl + 'adminService/deleteRestAllergyGroup/' + id, this.httpOptions);
  }

  excludeItemDiscount(includedItems): Observable<any>
  {
    return this.httpClient.post(environment.apiBaseUrl + 'adminService/excludeItemDiscount' , includedItems, this.httpOptions);
  }

  addVarient(id, data): Observable<any>
  {
    return this.httpClient.post(environment.apiBaseUrl + 'menuService/addVariant/' + id, data, this.httpOptions);
  }

  getVariants(): Observable<any>
  {
      return this.httpClient.get(environment.apiBaseUrl + 'menuService/getVariants/', this.httpOptions);
  }

  getVariant(id): Observable<any>
  {
      return this.httpClient.get(environment.apiBaseUrl + 'menuService/getVariant/' + id, this.httpOptions);
  }

  updateVariant(id, data): Observable<any>
  {
      return this.httpClient.put(environment.apiBaseUrl + 'menuService/updateVariant/' + id, data, this.httpOptions);
  }

  deleteVariant(id): Observable<any>
  {
    return this.httpClient.delete(environment.apiBaseUrl + 'menuService/deleteVariant/' + id, this.httpOptions);
  }

  addVariantGroup(id, data): Observable<any>
  {
    return this.httpClient.post(environment.apiBaseUrl + 'menuService/addVariantGroup/' + id, data, this.httpOptions);
  }

  getVariantGroups(): Observable<any>
  {
      return this.httpClient.get(environment.apiBaseUrl + 'menuService/getVariantGroups/', this.httpOptions);
  }

  getVariantGroup(id): Observable<any>
  {
      return this.httpClient.get(environment.apiBaseUrl + 'menuService/getVariantGroup/' + id, this.httpOptions);
  }

  updateVariantGroup(id, data): Observable<any>
  {
      return this.httpClient.put(environment.apiBaseUrl + 'menuService/updateVariantGroup/' + id, data, this.httpOptions);
  }

  deleteVariantGroup(id): Observable<any>
  {
    return this.httpClient.delete(environment.apiBaseUrl + 'menuService/deleteVariantGroup/' + id, this.httpOptions);
  }
}
