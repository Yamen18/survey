export class Commentary {

  Id: number;
  Commentary: string = '';
  Avatar: any;
  Reaction: any;
  Mode: string= 'new';
  ReplayCommentary: Commentary[];

  constructor() {
    this.Id = Math.random() * (999999 + 1) + 123;
  }
}
