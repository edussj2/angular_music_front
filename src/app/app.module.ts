import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* === HttpClientModule === */
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

/* === Routing === */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* === Cookie Services === */
import { CookieService } from 'ngx-cookie-service';

/* === Interceptores === */
import { InjectSessionInterceptor } from '@core/interceptors/inject-session.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InjectSessionInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
