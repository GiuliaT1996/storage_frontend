export class StorageDto {
  name: string;
  section: string;
  profile: string;
  quantity: number;
  trigger: number;
  expDate: Date | null;

  constructor(name: string, section: string, profile: string, quantity: number, trigger: number, expDate: Date | null) {
    this.name = name;
    this.section = section;
    this.profile = profile;
    this.quantity = quantity;
    this.trigger = trigger;
    this.expDate = expDate;
  }

}
