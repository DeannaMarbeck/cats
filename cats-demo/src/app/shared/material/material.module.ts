import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule, MatSelectModule, MatSlideToggleModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatRadioModule,
  MatProgressSpinnerModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports:  [MatButtonModule, MatMenuModule, MatIconModule, MatInputModule, MatToolbarModule, MatListModule,
    MatGridListModule, MatTableModule, MatSortModule, MatPaginatorModule, MatDialogModule, MatDatepickerModule,
    MatNativeDateModule, MatCardModule, MatChipsModule, MatButtonToggleModule, MatCheckboxModule, MatSlideToggleModule,
    MatBadgeModule, MatSelectModule, MatAutocompleteModule, MatSnackBarModule, MatExpansionModule, MatTooltipModule, MatRadioModule,
    MatProgressSpinnerModule]
})
export class MaterialModule { }

