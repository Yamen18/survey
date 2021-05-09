export class Group {
  
  group_id: number;
  name: string = '';
  description: string = '';
  session_id: number;


  constructor() {
    this.group_id = Math.floor(Math.random() * 100);
  }
}