export class Goal {

  hasDescription: boolean;

  constructor(public id: number,public name: string,public description: string, public completeDate: Date){
    this.hasDescription = false;
  }
}

// public, private, protected
