import { Injectable } from '@angular/core';
import { HttpHelperService } from './http-helper.service';
import { Subject } from 'rxjs';
import { StoreService } from './store.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userInfo: any;
  profileUpdated = new Subject<any>();
  constructor(private http: HttpHelperService, private store: StoreService,
              private router: Router) { }

  setUserInfo(email) {
    this.http.find('users', { query: { email } }).then((res: any) => {
      this.userInfo = res.data[0];
      this.store.setValue('user_info', this.userInfo);
      this.profileUpdated.next(this.userInfo);
      window.localStorage.setItem('user_info', JSON.stringify(this.userInfo));
    });
  }

  getUserInfo() {

    return this.userInfo || JSON.parse(window.localStorage.getItem('user_info'));
  }

  logout() {
    this.store.setValue('user_info', {});
    window.localStorage.clear();
    this.http.feathersInstance().logout();
    this.router.navigate(['/']);
  }

}
