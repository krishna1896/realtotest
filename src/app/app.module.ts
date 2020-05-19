import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthGuard } from './shared/guard';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { ToastrModule } from 'ng6-toastr-notifications';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AgePipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    AgePipe
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    AppRoutingModule, FormsModule, HttpClientModule , ToastrModule.forRoot() , Ng2SearchPipeModule
  ],
  providers: [AuthGuard], 
  bootstrap: [AppComponent]
})
export class AppModule { }
