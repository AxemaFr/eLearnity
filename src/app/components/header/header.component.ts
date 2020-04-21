import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';

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


  @ViewChild('courseModal', {static: false}) courseModal: ElementRef;
  @ViewChild('Author', {static: false}) Author: ElementRef;
  @ViewChild('courseName', {static: false}) courseName: ElementRef;
  @ViewChild('title', {static: false}) title: ElementRef;
  @ViewChild('description', {static: false}) description: ElementRef;
  @ViewChild('logoUrl', {static: false}) logoUrl: ElementRef;
  @ViewChild('price', {static: false}) price: ElementRef;
  @ViewChild('body', {static: false}) body: ElementRef;

  private loggedIn = false;
  private invalid: boolean = false;
  constructor(private http: HttpClient,
              private router: Router)
  { }

  ngOnInit() {
  }

  openModal1() {
    this.modal.nativeElement.style.display = 'block';
  }

  closeModal(type: string) {
    if (type === 'login') {
      this.loginText.nativeElement.value = '';
      this.passText.nativeElement.value = '';
      this.modal.nativeElement.style.display = 'none';
    }
    if (type === 'reg') {
      this.loginText2.nativeElement.value = '';
      this.passText2.nativeElement.value = '';
      this.country.nativeElement.value = '';
      this.fadress.nativeElement.value = '';
      this.modal2.nativeElement.style.display = 'none';
    }
    if (type === 'push') {
      this.courseName.nativeElement.value = '';
      this.title.nativeElement.value = '';
      this.description.nativeElement.value = '';
      this.logoUrl.nativeElement.value = '';
      this.price.nativeElement.value = '';
      this.body.nativeElement.value = '';
      this.courseModal.nativeElement.style.display = 'none';
    }
  }

  login(event) {
    let log = this.loginText.nativeElement.value;
    let pas = this.passText.nativeElement.value;
    this.http.post(`http://127.0.0.1:8080/user/signin?email=${log}&password=${pas}`, {})
      .subscribe( (response: boolean) => {
        if (response) {
          this.invalid = false;
          this.loggedIn = true;
          this.closeModal('login');
        } else {
          this.invalid = true;
        }
      });
  }

  register($event: MouseEvent) {
    this.http.post('http://127.0.0.1:8080/user', {
      email: this.loginText2.nativeElement.value,
      country: this.country.nativeElement.value,
      address: this.fadress.nativeElement.value,
      password: this.passText2.nativeElement.value
    }).subscribe( (resp) => console.log(resp));
    this.closeModal('reg');
  }

  openModal2() {
    this.modal2.nativeElement.style.display = 'block';
  }

  pushCourse() {
    this.courseModal.nativeElement.style.display = 'block';
  }

  sendCourse($event: MouseEvent) {
    let course = {
      Author: this.Author.nativeElement.value,
      courseName: this.courseName.nativeElement.value,
      tittle: this.title.nativeElement.value,
      description: this.description.nativeElement.value,
      logoUrl: this.logoUrl.nativeElement.value,
      price: this.price.nativeElement.value,
      body: this.body.nativeElement.value.split('\n' )
    };
    this.http.post('http://localhost:8080/course/', course).subscribe( (resp) => {
        this.closeModal('push')
    },
      (error => {
        console.log(error);
        this.closeModal('push')
      })
    );
  }

  navigate(strings: string[]) {
    this.router.navigate(strings);
    document.documentElement.scrollTop = 0;
  }
}
