import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreRoutingModule } from './core-routing.module';
import { AppComponent } from './components/app/app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { PostsModule } from '../posts/posts.module';
import { UserModule } from '../user/user.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KeystrokesPanelComponent } from './components/keystrokes-panel/keystrokes-panel.component';

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        HomePageComponent,
        NotFoundPageComponent,
        KeystrokesPanelComponent
    ],
    imports: [
        BrowserModule,
        CoreRoutingModule,
        PostsModule,
        FormsModule,
        UserModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class CoreModule { }
