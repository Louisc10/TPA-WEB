import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.sass']
})
export class TextEditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById('sampleeditor').setAttribute('contenteditable', 'true');
    document.getElementById('sampleeditor2').setAttribute('contenteditable', 'true');
  }

  format(command, value) {
    document.execCommand(command, false, value);
  }

  setUrl() {
    var url = (<HTMLInputElement>document.getElementById('txtFormatUrl')).value;
    var sText = document.getSelection();
    document.execCommand('insertHTML', false, '<a href="' + url + '" target="_blank">' + sText + '</a>');
    (<HTMLInputElement>document.getElementById('txtFormatUrl')).value = '';
  }

}
