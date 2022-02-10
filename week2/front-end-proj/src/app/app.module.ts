import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { MainModule } from './main/main.module';
import { HeaderComponent } from './header/header.component';
import { MainGuard } from './main.guard';
import { ShareService } from './share.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //AuthModule,
    //MainModule,
    HttpClientModule,
  ],
  providers: [MainGuard,
             ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
