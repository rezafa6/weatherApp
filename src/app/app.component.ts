import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor() {}
 
  title = 'weatherApp';

  ngOnInit(): void {
    alert(
      ' برای گرفتن دیتا باید مشکل CORS policy برطرف شود. میتوانید اکستنشن  Moesif CORS را نصب و فعال کنید. '
    )
  }
  
}
