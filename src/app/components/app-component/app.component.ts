import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly cv$;
  readonly languageControl: FormControl<boolean>;

  constructor(private translate: TranslateService) {
    const startInEnglish = (navigator.language || '').toLowerCase().startsWith('en');
    this.languageControl = new FormControl(startInEnglish, { nonNullable: true });
    this.translate.setDefaultLang('pt-PT');
    this.translate.use(startInEnglish ? 'en-US' : 'pt-PT');
    document.documentElement.lang = startInEnglish ? 'en' : 'pt-PT';
    this.cv$ = this.translate.stream('cv');
  }

  onLanguageChange() {
    const lang = this.languageControl.value ? 'en-US' : 'pt-PT';
    this.translate.use(lang);
    document.documentElement.lang = this.languageControl.value ? 'en' : 'pt-PT';
  }

  /** Browser print keeps real text in DOM order, which ATS parsers can read. */
  downloadPDF() {
    const previousTitle = document.title;
    document.title = 'Filipe_Bravo_CV';
    window.addEventListener('afterprint', () => (document.title = previousTitle), { once: true });
    window.print();
  }
}
