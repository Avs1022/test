import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginscreenComponent } from './loginscreen/loginscreen.component';
import { ProductpageComponent } from './productpage/productpage.component';

const routes :Routes =[
  {path:'homepage',component:HomepageComponent},
  {path:'loginscreen',component:LoginscreenComponent},
  {path:'productpage',component:ProductpageComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginscreenComponent,
    ProductpageComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule { }
