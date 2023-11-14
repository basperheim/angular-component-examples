import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { PopupModalComponent } from "./popup-modal/popup-modal.component";
import { SlidingModalComponent } from "./sliding-modal/sliding-modal.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(private dialog: MatDialog) {} // Inject MatDialog

  openPopupModal(): void {
    // Open the dialog using MatDialog
    this.dialog.open(PopupModalComponent, {
      width: "400px",
      data: { message: "Your custom message here" },
    });
  }

  openSlidingModal(): void {
    // Open the dialog using MatDialog
    this.dialog.open(SlidingModalComponent, {
      width: "400px",
      data: { message: "Your custom message here" },
    });
  }
}
