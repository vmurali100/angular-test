import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatTableDataSource, MatTableModule, MatPaginatorModule, MatDialogModule, MatCardModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatCardModule,
    MatNativeDateModule,
    MatDatepickerModule,
     ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule ,
    MatDialogModule,
    MatCardModule,
    MatNativeDateModule,
    MatDatepickerModule,

    ],
})
export class CustomMaterialModule { }