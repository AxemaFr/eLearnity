import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('modal', {static: false}) modal: ElementRef;
  @ViewChild('login1', {static: false}) loginText: ElementRef;
  @ViewChild('pass', {static: false}) passText: ElementRef;

  @ViewChild('modal2', {static: false}) modal2: ElementRef;
  @ViewChild('login2', {static: false}) loginText2: ElementRef;
  @ViewChild('pass2', {static: false}) passText2: ElementRef;
  @ViewChild('country', {static: false}) country: ElementRef;
  @ViewChild('fadress', {static: false}) fadress: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  openModal1() {
    this.modal.nativeElement.style.display = 'block';
  }

  closeModal() {
    this.loginText.nativeElement.value = '';
    this.passText.nativeElement.value = '';
    this.loginText2.nativeElement.value = '';
    this.passText2.nativeElement.value = '';
    this.country.nativeElement.value = '';
    this.fadress.nativeElement.value = '';
    this.modal.nativeElement.style.display = 'none';
    this.modal2.nativeElement.style.display = 'none';
  }

  login(event) {
    let log = this.loginText.nativeElement.value;
    let pas = this.passText.nativeElement.value;
    console.log('LOG IN');
    console.log('LOGIN: ' + log);
    console.log('PASS: ' + pas);
    this.closeModal();
  }

  register($event: MouseEvent) {
    console.log('REGISTER:::>');
    console.log('Login: ' + this.loginText2.nativeElement.value);
    console.log('password: ' + this.passText2.nativeElement.value);
    console.log('country: ' + this.country.nativeElement.value);
    console.log('adress: ' + this.fadress.nativeElement.value);
    this.closeModal();
  }

  openModal2() {
    this.modal2.nativeElement.style.display = 'block';
  }
}
