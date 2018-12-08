import {Component, OnInit, ViewChild, Inject, ChangeDetectorRef} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {InvoiceService } from './invoice.service';

export interface UserData {
  invoiceNo: number;
  date: string;
  customer: string;
  qty: number;
  amount:number;
}
export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] = ['invoiceNo', 'date', 'customer', 'qty','amount','edit','delete'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  isEdit: boolean;
  users;
  isCreate: boolean;
  constructor(public dialog: MatDialog, private invoiceService:InvoiceService){
      // Create 100 users

      // Assign the data to the data source for the table to render
  }
  
  ngOnInit() {
    this.users = JSON.parse(localStorage.getItem("users"));
    if(this.users == null){
      this.users = data;
      localStorage.setItem("users",JSON.stringify(this.users))
    }
    this.dataSource = new MatTableDataSource(this.users);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
    this.invoiceService.changeData.subscribe(res=>{
      this.users = JSON.parse(localStorage.getItem("users"));
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    })

  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  openDialog(obj,value,index): void {
    this.isEdit = value;
    if(this.isEdit==undefined){
      this.isEdit=true;
      this.isCreate = true;
      localStorage.setItem("isEdit",JSON.stringify(this.isEdit));
      localStorage.setItem("isCreate",JSON.stringify(this.isCreate));
    }else{
      localStorage.setItem("isEdit",value);
      this.isCreate = false;
      localStorage.setItem("isCreate",JSON.stringify(this.isCreate));
    }
    localStorage.setItem("index",index);
    localStorage.setItem("invoice",JSON.stringify(obj));
    const dialogRef = this.dialog.open(DialogueCompoenent, {
      width: '450px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      localStorage.setItem("isEdit","false")
    });
  }
  
  
  title = 'angular-test';

}

@Component({
  templateUrl: 'dialog.html',
})
export class DialogueCompoenent {
  isEdit: string;
  invoice ={

  }
  isCreate: any;
  constructor(
    public dialogRef: MatDialogRef<DialogueCompoenent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private invoiceService:InvoiceService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.isEdit = JSON.parse(localStorage.getItem("isEdit"));
    this.isCreate = JSON.parse(localStorage.getItem("isCreate"));

    this.invoice = JSON.parse(localStorage.getItem("invoice"))
  }
  delete(){
    this.invoiceService.deleteInvoice()
  }
  update(){
    this.invoiceService.updateInvoice(this.invoice)
  }
  create(){
    this.invoiceService.createInvoice(this.invoice)
  }

}

let data = []