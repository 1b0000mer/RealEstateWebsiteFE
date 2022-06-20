import { Component, OnInit } from '@angular/core';

import { LanguageConstant } from 'src/app/core/constants/language.constant'

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  // Ngon ngu hien thi //////////
  langData = LanguageConstant;
  langCode = localStorage.getItem('language') ?? 'vi';
  ///////////////////////////////

  isLogin = false;

  userName = 'User'

  constructor() { }

  ngOnInit(): void {
  }

}
