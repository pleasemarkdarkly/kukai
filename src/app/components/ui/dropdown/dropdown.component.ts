import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ui-dropdown',
  templateUrl: './dropdown.component.html'
})

export class DropdownComponent implements OnInit {
  @Input() list: any[];
  @Input() current: any;
  @Output() dropdownResponse = new EventEmitter();
  selection: any;
  ecmpId = this.constructor['ɵcmp'].id;
  isOpen = false;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('document:click', ['$event'])
  @HostListener('document:touchend', ['$event'])
  closeDropdown(e) {
    if (!e.target.closest('#' + this.ecmpId) && this.isOpen) {
      this.isOpen = false;
    }
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}