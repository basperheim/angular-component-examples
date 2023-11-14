import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PopupModalComponent } from "./popup-modal/popup-modal.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SlidingModalComponent } from './sliding-modal/sliding-modal.component';

@NgModule({
  declarations: [AppComponent, PopupModalComponent, SlidingModalComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatDialogModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
