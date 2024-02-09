import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inquiry-details',
  templateUrl: './inquiry-details.component.html',
  styleUrls: ['./inquiry-details.component.scss']
})
export class InquiryDetailsComponent implements OnInit{
     
  
  constructor() { }

  ngOnInit(): void {
    this.setupTabs();
  }

  setupTabs() {
    document.querySelectorAll('.tab-btn').forEach((button: Element) => {
      button.addEventListener('click', () => {

        const sidebar = button.parentElement as HTMLElement;
        const tabs = sidebar.parentElement as HTMLElement;
        const tabNumber = button.getAttribute('data-for-tab');
        const tabActivate = tabs.querySelector(`.tab-content[data-tab="${tabNumber}"]`) as HTMLElement;

        sidebar.querySelectorAll('.tab-btn').forEach((btn: Element) => {
          btn.classList.remove('tab-btn-active');
        });
        tabs.querySelectorAll('.tab-content').forEach((tab: Element) => {
          tab.classList.remove('tab-content-active');
        });
        button.classList.add('tab-btn-active');
        tabActivate.classList.add('tab-content-active');
      });
    });
  }

  

}
