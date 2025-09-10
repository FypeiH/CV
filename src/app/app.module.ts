import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app-component/app.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { ProfessionalInfoComponent } from './components/professional-info/professional-info.component';
import { ExperienceItemComponent } from './components/experience-item/experience-item.component'
import { SkillItemComponent } from './components/skill-item/skill-item.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    ProfessionalInfoComponent,
    ExperienceItemComponent,
    SkillItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './locales/', '.json'),
        deps: [HttpClient]
      }
    }),
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
