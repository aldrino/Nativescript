import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptUISideDrawerModule } from "nativescript-telerik-ui/sidedrawer/angular";
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';
import { NativeScriptUIListViewModule } from "nativescript-telerik-ui/listview/angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { DrawerComponent } from "./shared/drawer/drawer.component";
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ReservationModalComponent } from "./reservationmodal/reservationmodal.component";
import { PromotionService } from './services/promotion.service';
import { LeaderService } from './services/leader.service';
import { FavoriteService } from "./services/favorite.service";
import { CouchbaseService } from './services/couchbase.service';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

import { DishService } from './services/dish.service';
import { ProcessHTTPMsgService } from './services/process-httpmsg.service';

import { baseURL } from './shared/baseurl';
import { AboutComponent } from "./about/about.component";
import { FavoritesComponent } from "~/favorites/favorites.component";
import { ReservationComponent } from './reservation/reservation.component';
import { CommentComponent } from "~/comment/comment.component";
import { UserAuthComponent } from "./userauth/userauth.component"; 
import { PlatformService } from './services/platform.service';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpModule,
        NativeScriptUISideDrawerModule,
        TNSFontIconModule.forRoot({
            'fa': './fonts/font-awesome.min.css'
        }),
        NativeScriptUIListViewModule,
        NativeScriptFormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        MenuComponent,
        DishdetailComponent,
        DrawerComponent,
        HomeComponent,
        ContactComponent,
        AboutComponent,
        FavoritesComponent,
        ReservationComponent,
        ReservationModalComponent,
        CommentComponent,
        UserAuthComponent
    ],
    entryComponents: [ReservationModalComponent, CommentComponent],
    providers: [
        {provide: 'BaseURL', useValue: baseURL},
        DishService,
        PromotionService,
        LeaderService,
        FavoriteService,
        ProcessHTTPMsgService,
        CouchbaseService,
        PlatformService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
