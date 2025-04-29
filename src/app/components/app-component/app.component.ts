import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  languageControl: FormControl = new FormControl(false);
  
  constructor(private translate: TranslateService) {
    const userLang = navigator.language || 'pt-PT';
    this.translate.setDefaultLang(userLang);
  }

  onLanguageChange() {
    const selectedLanguage = this.languageControl.value ? 'en-US' : 'pt-PT';
    this.translate.use(selectedLanguage);
  }

  title = 'CV';
}
