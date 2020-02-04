import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { MatButtonToggleModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatOptionModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material';
import { MatNativeDateModule } from '@angular/material';

const MaterialComponents = [
  MatButtonModule,
  MatDialogModule,
  MatButtonToggleModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
];

@NgModule({
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
