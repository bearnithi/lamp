import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username: string;
  profileSubscription: Subscription;
  @Input() profileLink: string;
  constructor(private authentication: AuthenticationService,
              private store: StoreService,
              private router: Router) { }

  ngOnInit() {
    this.username = (this.store.getValue('user_info') || {}).firstName;
    this.profileSubscription = this.authentication.profileUpdated.subscribe((profile: any) => {
      this.username = profile.firstName;
    });
  }

  ngOnDestroy(): void {
    if (this.profileSubscription) {
      this.profileSubscription.unsubscribe();
    }

  }

  myProfile(e: Event) {
    e.preventDefault();
    this.router.navigate([this.profileLink]);
  }

  logout(e: Event): any {
    e.preventDefault();
    this.authentication.logout();
  }

}
