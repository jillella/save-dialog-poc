import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  template: `
  <button (click)="handleDownload()"> Download</button>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'file-saver';
  handleDownload() {
    axios({
      url: 'http://localhost:3000/sample.txt',
      method: 'GET',
      responseType: 'blob', // important
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'sample.txt');
      document.body.appendChild(link);
      link.click();
    });
  }
}
