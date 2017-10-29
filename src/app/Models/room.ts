export class Room {
    constructor(
      public id?: number,
      public name?: string,
      public domicile_id?: number,
      public user? : any

     
  
    ) { }
  
    getId(): number {
      return this.id;
  }

  }