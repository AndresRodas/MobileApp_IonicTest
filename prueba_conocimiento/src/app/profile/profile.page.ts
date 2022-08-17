import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public folder: string;
  public user: string = 'Juan Perez';
  private dateFormat: Date = new Date();
  public date: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.date = `${this.dateFormat.getDate()}/${this.dateFormat.getMonth()+1}/${this.dateFormat.getFullYear()}`;
  }
}
