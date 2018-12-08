import { Component, OnInit, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
export interface DialogData {
 
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.openLoginModal()
  }
  openLoginModal(){
    const dialogRef = this.dialog.open(LoginDialogueCompoenent, {
      width: '450px',
      disableClose:true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      localStorage.setItem("isEdit","false")
    });
   }

   

}
@Component({
  templateUrl: 'login-modal.html',
})
export class LoginDialogueCompoenent {
  user={
    email:'',
    password:''
  }
  constructor(
    public dialogRef: MatDialogRef<LoginDialogueCompoenent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) {}

    login(){
      if(this.user.email=="admin@admin.com" && this.user.password=="admin"){
        this.dialogRef.close()
      }
    }
}