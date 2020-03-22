import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-write-notes',
  templateUrl: './write-notes.component.html',
  styleUrls: ['./write-notes.component.scss']
})
export class WriteNotesComponent implements OnInit {

  note: string;
  noteWritingDate = new Date();
  // noteWritingDate = moment().format('MMMM Do YYYY, h:mm:ss a');
  notesArray = [];

  constructor() { }

  ngOnChanges() {
    // this.noteWritingDate = moment().format('MMMM Do YYYY, h:mm:ss a');
  }

  ngDoCheck() {
    this.noteWritingDate = new Date();
  }

  ngOnInit() {
  }

  submit() {
    if (this.note != undefined || this.note != '') {
      this.notesArray.push({ "note": this.note, "date": this.noteWritingDate });
      localStorage.setItem('notes', JSON.stringify(this.notesArray));
    }
    this.note = '';
  }

  getData() {
    let notes = localStorage.getItem('notes');
    console.log("WriteNotesComponent -> ngOnInit -> notes", notes);
  }

}
