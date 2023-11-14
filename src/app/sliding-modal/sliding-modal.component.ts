import { Component, OnInit, OnDestroy, ViewContainerRef, TemplateRef, ViewChild, Inject } from "@angular/core";
import { Overlay, OverlayRef } from "@angular/cdk/overlay";
import { TemplatePortal } from "@angular/cdk/portal";
import { Subject, timer } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-popup-modal",
  templateUrl: "./sliding-modal.component.html",
  styleUrls: ["./sliding-modal.component.scss"],
  animations: [
    trigger("slideInOut", [
      state("in", style({ transform: "translateX(0)" })),
      transition("void => *", [style({ transform: "translateX(100%)" }), animate("300ms ease-in-out")]),
      transition("* => void", [animate("300ms ease-in-out", style({ transform: "translateX(100%)" }))]),
    ]),
  ],
})
export class SlidingModalComponent implements OnInit, OnDestroy {
  private overlayRef!: OverlayRef;
  private overlay!: Overlay;
  private destroy$ = new Subject<void>();
  private viewContainerRef!: ViewContainerRef;
  @ViewChild("popupTemplateRef", { static: true }) popupTemplate!: TemplateRef<any>;
  message: string = "Default Message";

  constructor(public dialogRef: MatDialogRef<SlidingModalComponent>, @Inject(MAT_DIALOG_DATA) public data: { message: string }) {}

  ngOnInit(): void {
    // Create an overlay configuration
    const overlayConfig = {
      hasBackdrop: true,
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
    };

    // Create an overlay
    this.overlayRef = this.overlay.create(overlayConfig);

    // Attach the template portal to the overlay
    const templatePortal = new TemplatePortal(this.popupTemplate, this.viewContainerRef);
    this.overlayRef.attach(templatePortal);

    // Automatically close the popup after 3 seconds
    timer(3000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.overlayRef.detach();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  openDialog(message: string): void {
    this.message = message;
    this.overlayRef.attach(new TemplatePortal(this.popupTemplate, this.viewContainerRef));
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
