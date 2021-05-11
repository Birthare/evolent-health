import { Component, ViewChild, OnInit, TemplateRef } from '@angular/core';
import { faSort, faFilter, faPager, faFile, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faYoutube, faLinkedinIn, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { from } from 'rxjs';
import { AppService } from './app.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator} from '@angular/material/paginator';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MatRadioButton,  } from '@angular/material/radio';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatExpansionPanel } from '@angular/material/expansion';
import { NgForm } from '@angular/forms'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SanitizeHtmlPipe } from './safeHtml';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'EvolentHealth';
  faSort = faSort;
  faFilter = faFilter;
  faPager = faPager;
  faFile = faFile;
  faPlus = faPlus;
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faYoutube = faYoutube;
  faLinkedinIn = faLinkedinIn;
  faInstagram = faInstagram;
  faPinterest = faPinterest;

  userData = [];
  isUserListAvailable: boolean = false;

  displayedColumns: string[] = ['IsActive', 'FirstName', 'LastName', 'Gender', 'Email', 'Phone', 'Actions'];
  userGridData: any;
  modalRef: BsModalRef;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  tooltipPosition = 'above';
  
  alertData: any;
  alertMessage: string;
  alertClass: string;

  // Validations
  firstName = new FormControl('', Validators.required);
  lastName = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]);
  isUserActive = new FormControl('', Validators.required);
  
  
  getErrorMessageFirstName() {
    if (this.firstName.hasError('required')) {
      return 'Please enter First Name';
    }
    return this.firstName.hasError('firstName') ? 'Not a valid First Name' : '';
  }
  
  getErrorMessageLastName() {
    if (this.lastName.hasError('required')) {
      return 'Please enter Last Name';
    }
    return this.lastName.hasError('lastName') ? 'Not a valid Last Name' : '';
  }

  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'Please enter Email';
    }
    return this.email.hasError('email') ? 'Not a valid Email' : '';
  }
  
  getErrorMessagePhone() {
    if (this.phone.hasError('required')) {
      return 'Please enter Phone';
    }
    return this.phone.errors.pattern ? 'Not a valid Phone' : '';
  }
  
  getErrorMessageIsUserActive() {
    if (this.isUserActive.hasError('required')) {
      return 'Please select a value';
    }
  }

  alert(message, type){
    this.alertMessage = message;
    this.alertClass = 'alert-' + type;
  }

  closeAlert(){
    this.alertMessage = '';;
    this.alertClass = '';
  }

  isNonEmptyArray(array){
    if(array.length > 0) return true;
    else return false;
  }

  loadUserGridData(){
    this.closeAlert();
    // this.api.get('app', 'GetUserList').subscribe((res: any)=>{
      this.api.get('mockData', 'GetUserList').subscribe((res: any)=>{
        this.userData = res;
        if(this.isNonEmptyArray(this.userData)) this.isUserListAvailable = true;
        else{
          this.alert('No records found', 'warning');
          this.isUserListAvailable = false;
        }
        this.userGridData = new MatTableDataSource(this.userData);
        this.userGridData.sort = this.sort;
        this.userGridData.paginator = this.paginator;
    }, (error: any)=>{
      console.log(JSON.stringify(error.message));
    })
  }

  onSubmit(newUserFormData){
    this.closeAlert();
    let request = {};
    request['FirstName'] = newUserFormData.FirstName;
    request['LastName'] = newUserFormData.LastName;
    request['Email'] = newUserFormData.Email;
    request['Phone'] = newUserFormData.Phone;
    request['IsActive'] = newUserFormData.AddUserAsActive;
    // this.api.get('mockData', 'AddNewUser').subscribe((res: any)=>{
      this.api.post('app', 'AddNewUser', request).subscribe((res: any)=>{
        if(res == 'Success'){
          this.closeDialog();
          this.loadUserGridData();
          this.alert('User has been added successully.', 'success');
        }
    }, (error: any)=>{
      // this.closeDialog();
      this.alert('User was not added as API is not in place.', 'warning');
      console.log(JSON.stringify(error.message));
    })
  }
  
  applyFilter(event: Event) {
    this.closeAlert();
    const filterValue = (event.target as HTMLInputElement).value;
    this.userGridData.filter = filterValue.trim().toLowerCase();
  }

  dialogHeader: string;
  confirmMessage: string;
  // updateFlow: boolean = false;
  // confirmationFlow: boolean = false;
  // confirmUserActivation: boolean = false;
  // confirmUserDeactivation: boolean = false;
  // dialogMessage:string = '';

  resetDialog(){
    this.dialogHeader = '';
    this.confirmMessage = '';
  // this.confirmationFlow = false;
  // this.confirmUserActivation = false;
  // this.confirmUserDeactivation = false;
  // this.dialogMessage = '';
  }

  closeDialog(){
    this.modalRef.hide();
  };
  
  openDialog(template: TemplateRef<any>, dataToUpdate, title, flow) {
    this.closeAlert();
    this.resetDialog();
    const initialState = dataToUpdate;
    if(flow !== 'activationDeactivationOfUser') this.modalRef = this.modalService.show(template, {initialState, class: 'modal-xl', backdrop: 'static'});
    else if(flow == 'activationDeactivationOfUser'){
      this.modalRef = this.modalService.show(template, {initialState, class: 'modal-md', backdrop: 'static'});
      this.dialogHeader = title;
      if(title == "Activate User") this.confirmMessage = 'Are you sure you want to make the user <b>' + dataToUpdate.FirstName + ' ' + dataToUpdate.LastName + '</b> Active?';
      if(title == "Deactivate User") this.confirmMessage = 'Are you sure you want to Deactivate the user <b>' + dataToUpdate.FirstName + ' ' + dataToUpdate.LastName + '</b> ?';
    }
  }

  isEditMode: boolean = false;
  currentRecordIndex: number = undefined;

  toggleEditMode(i){
    this.closeAlert();
    this.isEditMode = !this.isEditMode;
    this.currentRecordIndex = i;
  }

  submitUpdate(dataToUpdate, i){
    this.closeAlert();
    this.toggleEditMode(i);
  }
  
  recordChanges(event){
    this.closeAlert();
  }

  constructor(private api: AppService, public modalService: BsModalService){}

  ngOnInit(){
    this.loadUserGridData();
    this.isUserListAvailable = true; // Setting initial value for flag
  }
}

export interface userData {
  FirstName: string;
  LastName: string;
  Gender: string;
  Expertise: string;
  JobTitle: string;
  City: string;
  Age: number;
  Email: string;
  Phone: number;
  IsActive: boolean;
  Actions: string;
}