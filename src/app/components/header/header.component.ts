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
  @ViewChild('pass3', {static: false}) passText3: ElementRef;
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

  @ViewChild('notification', {static: false}) notify: ElementRef;
  private loggedIn = false;
  private invalid: boolean = false;
  public regInval: boolean = false;
  public regInvalMsg: string;
  public notificationText: string = '';

  constructor(private http: HttpClient,
              private router: Router) {
  }

  ngOnInit() {
  }

  openModal1() {
    this.modal.nativeElement.style.display = 'block';
  }

  closeModal(type: string) {
    if (type === 'log') {
      this.loginText.nativeElement.value = '';
      this.passText.nativeElement.value = '';
      this.modal.nativeElement.style.display = 'none';
      this.invalid = false;
    }
    if (type === 'reg') {
      this.loginText2.nativeElement.value = '';
      this.passText2.nativeElement.value = '';
      this.passText3.nativeElement.value = '';
      this.country.nativeElement.value = '';
      this.fadress.nativeElement.value = '';
      this.modal2.nativeElement.style.display = 'none';
      this.regInval = false;
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
          this.closeModal('log');
          this.showGoodNotify('You are logged in!');
        } else {
          this.invalid = true;
          this.showBadNotify('Cant log in.');
        }
      });
  }

  register($event: MouseEvent) {
    let mail = this.loginText2.nativeElement.value;
    let pass = this.passText2.nativeElement.value;
    let repass = this.passText3.nativeElement.value;
    if (pass !== repass) {
      this.regInval = true;
      this.regInvalMsg = 'Passwords are not the same';
      return;
    }
    if (!this.validateEmail(mail)) {
      this.regInval = true;
      this.regInvalMsg = "Incorrect Email";
      return;
    }
    if (!this.validatePass(pass)) {
      this.regInval = true;
      this.regInvalMsg = "Password must contain at least 8 symbols, 1 uppercase, 1 lowercase, 1 digit";
      return;
    }
    this.regInval = false;
    this.http.post('http://127.0.0.1:8080/user', {
      email: mail,
      country: this.country.nativeElement.value,
      address: this.fadress.nativeElement.value,
      password: pass
    }).subscribe((resp) => {
      this.closeModal('reg');
      this.showGoodNotify('Thank you for registration!');
    });
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
      body: this.body.nativeElement.value.split('\n')
    };
    this.http.post('http://localhost:8080/course/', course).subscribe((resp) => {
        this.closeModal('push')
      },
      (error => {
        this.closeModal('push')
      })
    );
  }

  navigate(strings: string[]) {
    this.router.navigate(strings);
    document.documentElement.scrollTop = 0;
  }


  validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validatePass(pass) {
    let re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return re.test(String(pass));
  }

  showGoodNotify(text) {
    this.notify.nativeElement.style.background = '#4b934b';
    this.notificationText = text;
    this.notify.nativeElement.classList.remove('hided');
    setTimeout( () => {
      this.notify.nativeElement.classList.add('hided');
      this.notificationText = '';
    }, 3000);
  }

  showBadNotify(text) {
    this.notify.nativeElement.style.background = '#d74949';
    this.notificationText = text;
    this.notify.nativeElement.classList.remove('hided');
    setTimeout( () => {
      this.notify.nativeElement.classList.add('hided');
      this.notificationText = '';
    }, 3000);
  }
}
