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
  
  statusB: boolean = false
  statusI: boolean = false
  statusS: boolean = false
  statusU: boolean = false
  
  textEdit(format){
    const textEditor =  (<HTMLInputElement>document.getElementById('sampleeditor'))
    if(format == "b"){
      this.statusB = !this.statusB
      if(this.statusB){
        textEditor.value = textEditor.value + "<b>"
      }
      else{
        textEditor.value = textEditor.value + "</b>"
      }
    }
    else if(format == "i"){
      this.statusI = !this.statusI
      if(this.statusI){
        textEditor.value = textEditor.value + "<i>"
      }
      else{
        textEditor.value = textEditor.value + "</i>"
      }
    }
    else if(format == "u"){
      this.statusU = !this.statusU
      if(this.statusU){
        textEditor.value = textEditor.value + "<u>"
      }
      else{
        textEditor.value = textEditor.value + "</u>"
      }
    }
    else if(format == "s"){
      this.statusS = !this.statusS
      if(this.statusS){
        textEditor.value = textEditor.value + "<s>"
      }
      else{
        textEditor.value = textEditor.value + "</s>"
      }
    }
    else if(format == "c"){
      navigator.clipboard.writeText(textEditor.value)
      alert("Copied to Clipboard")
    }
  }


}
