//Module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// CustomerModule child module
import { CustomerModule } from './customer/customer.module';
// MedicineModule child module
import { MedicineModule } from './medicine/medicine.module';
//main routes
import { AppRoutingModule } from './app-routing.module'
//Module used for the login and authentication component
import { AuthModule } from './login/auth/auth.module';
import{ FirebaseConfigService } from './core/service/firebase-config.service';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from "./login/auth/auth.guard";

@NgModule({
    imports:[ BrowserModule,
              CustomerModule,
              MedicineModule,
              AppRoutingModule,
              AuthModule
             ],
    declarations: [ AppComponent,
                    NavbarComponent,
                    HomeComponent
                  ],
    providers: [FirebaseConfigService,AuthGuard],
    bootstrap: [AppComponent]
})

export class AppModule { }
