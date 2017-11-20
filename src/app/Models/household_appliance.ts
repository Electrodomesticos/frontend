export class Household_appliance {
    constructor(
      public id?: number,
      public name?: string,
      public electricity_use?: number,
      public consumption?: number,
      public category_id?: number,
      public outlet_id?: number,
      public user_id? : number,
    ) { }
  
  }