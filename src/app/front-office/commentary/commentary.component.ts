import { Component, OnInit, Input, EventEmitter, Output, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Commentary } from '../../Models/Commentary';

@Component({
  selector: 'app-commentary',
  templateUrl: './commentary.component.html',
  styleUrls: ['./commentary.component.css']
})
export class CommentaryComponent implements OnInit {
  @Input() commentary: Commentary;
  @Input() comments: Commentary[];
  @Output() actionNewCommentary = new EventEmitter();
  @ViewChild('toggleButton', { static: false }) toggleButton: ElementRef;
  @ViewChild('emojiPopUp', { static: false }) emojiPopUp: ElementRef;
  //@ViewChild('commentInput', { static: false }) commentInput: ElementRef;

  displayPopUp: boolean = false;
  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (e.target !== this.toggleButton.nativeElement && this.emojiPopUp && !this.emojiPopUp.nativeElement.contains(e.target)) {
        this.displayPopUp = false;
      }

      //if (this.commentInput && this.commentInput.nativeElement == e.target) {
      //  setTimeout(() =>
      //    this.commentInput.nativeElement.parentNode.focus(),
      //    0);
      //}
    });
  }

  ngOnInit() {
  }

  addNewComment() {
    if (this.commentary.Mode == 'new') {
      this.commentary.Mode = 'edit';
      this.actionNewCommentary.emit();
    }
  }

  addEmoji(event) {
    this.commentary.Commentary += event.emoji.native;
  }

  displayEmojiPopUp() {
    this.displayPopUp = !this.displayPopUp;
  }

  removeComment(id: number, comments: Commentary[]) {
    for (var i = 0; i < comments.length; i++) {
      if (comments[i].Id == id) {
        comments.splice(i, 1);
        break;
      } else {
        if (comments[i].ReplayCommentary) {
          this.removeComment(id, comments[i].ReplayCommentary);
        }
      }
    }
  }
}
