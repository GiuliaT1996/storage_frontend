import {Component} from '@angular/core';
import {StorageService} from "../storage.service";
import {StorageDto} from "../dtos/StorageDto";
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {NgFor, NgIf} from "@angular/common";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";

interface Section {
  value: string;
}

@Component({
  selector: 'app-add-storage',
  templateUrl: './add-storage.component.html',
  styleUrls: ['./add-storage.component.css'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, NgIf, NgFor, MatSelectModule, MatButtonModule],
})
export class AddStorageComponent {

  sections: Section[] = [
    {value: 'Snack'},
    {value: 'Altro'},
    {value: 'Pulizie'},
  ];

  json = ""
  nameFormControl = new FormControl('', [Validators.required]);
  profileFormControl = new FormControl('', [Validators.required]);
  sectionControl = new FormControl<Section | null>(null, Validators.required);

  constructor(private storageService: StorageService) { }
  //TODO prima di tutto chiamare servizio che restituisce un boolean per assicurarmi che
  //il nome non ci sia già
  addStorage() {
    let storage = new StorageDto(<string>this.nameFormControl.getRawValue(),
        <string>this.sectionControl.value?.value, <string>this.profileFormControl.getRawValue(), 0, 0, null)
    this.json = this.storageService.addStorage(storage)
  }
}
