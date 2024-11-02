import { Component, Input } from '@angular/core';
import { SvgIconComponent } from '../../svg-icon/svg-icon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ClickOutsideDirective } from '../../../directives/outside.directive';
import { FeathericonComponent } from '../../feathericon/feathericon.component';
import { Subscription } from 'rxjs';
import { EncryptedStorage } from '@shared/utils/encrypted-storage';
import { GlobalConfig } from '@shared/configs/global-config';
import { currentUser } from '@shared/utils/current-user';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [SvgIconComponent, FormsModule, ReactiveFormsModule, CommonModule, RouterModule, ClickOutsideDirective, FeathericonComponent],
  providers: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  public menuItems: any[] = [];
  public item: any[] = [];
  public searchResult: boolean = false;
  public searchResultEmpty: boolean = false;
  public text: string = '';
  public open = false
  subs: any;

  @Input() placeholder = 'Search anything...'

  constructor(private router: Router) {
  }


  ngOnInit(): void {
    this.subs = new Subscription();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  openMenu() {
    this.open = !this.open
  }

  searchTerm(term: any) {
    term ? this.addFix() : this.removeFix();
    if (!term) return this.menuItems = [];
    term = term.toLowerCase();
    this.menuItems = this.item.filter((option: any) => {
      const voyage_registration_id = option['port_call_no'] ? option['port_call_no'].toString().toLowerCase() : '';
      const vcn_no = option['vcn_no'] ? option['vcn_no'].toString().toLowerCase() : '';
      const job_no = option['job_no'] ? option['job_no'].toString().toLowerCase() : '';
      return voyage_registration_id.includes(term.toLowerCase()) || vcn_no.includes(term.toLowerCase()) || job_no.includes(term.toLowerCase());
    });
    this.checkSearchResultEmpty(this.menuItems)
    return
  }

  checkSearchResultEmpty(items: any[]) {
    if (!items.length)
      this.searchResultEmpty = true;
    else
      this.searchResultEmpty = false;
  }

  addFix() {
    this.searchResult = true;
  }

  removeFix() {
    this.searchResult = false;
    this.text = "";
  }

  nevigate(item: any) {
    this.removeFix()
    if (currentUser().role_id == 1) {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigateByUrl(`/port-call/control/${item.voyage_registration_id}`)
      });
      let data = {
        voyage_registration_id: item.voyage_registration_id
      }
      new EncryptedStorage().setItem(new GlobalConfig().shipDetails, JSON.stringify(data), false)
    } else if (currentUser().role_id == 2) {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigateByUrl(`/cruise/details/${item.voyage_registration_id}`)
      });
      new EncryptedStorage().setItem(new GlobalConfig().shipDetails, JSON.stringify(item), false)
    }
  }


  clickOutside(): void {
    this.searchResultEmpty = false;
    this.searchResult = false
    // document.body.classList.remove('offcanvas')
  }


}
