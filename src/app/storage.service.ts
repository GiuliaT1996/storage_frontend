import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StorageDto} from "./dtos/StorageDto";
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private httpClient: HttpClient) { }

  addStorage(storage: StorageDto) : string {
    let response = this.httpClient.post("http://localhost:8080/api/storage/insertNewStorageItem", storage )
      .subscribe(data => {
      console.log(data.toString())
      return data.toString()
    }, error => {
      console.log(error.response)
      throwError(error)
    })
    return "" + response.closed;
  }
}
