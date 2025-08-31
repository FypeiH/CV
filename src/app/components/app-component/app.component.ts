import { Component, ViewChild, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormControl } from '@angular/forms';
import jsPDF from 'jspdf';
import * as htmlToImage from 'html-to-image';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('cvContainer') cvContainer!: ElementRef;
  languageControl: FormControl = new FormControl(false);
  
  constructor(private translate: TranslateService) {
    const userLang = navigator.language || 'pt-PT';
    this.translate.setDefaultLang(userLang);
  }

  async downloadPDF() {
    const DATA = this.cvContainer.nativeElement;

    try {
      const dataUrl = await htmlToImage.toPng(DATA, { 
        quality: 1,
        backgroundColor: '#ffffff',
        pixelRatio: 3
      });


      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(dataUrl);
      const pdfWidth = 210; // A4 em mm
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;


      pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('CV.pdf');
    } catch (error) {
      console.error('Erro ao gerar o PDF:', error);
    }
  }

  onLanguageChange() {
    const selectedLanguage = this.languageControl.value ? 'en-US' : 'pt-PT';
    this.translate.use(selectedLanguage);
  }

  title = 'CV';
}
