import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//services
import { PackageServiceService } from '../services/package-service.service';
import { UserService } from '../services/user.service';
//models
import { Package } from '../models/packages.interface';
import { User } from '../models/user.interface';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public user: User;
  private dateFormat: Date = new Date();
  public date: string;
  public package: Array<Package>;

  constructor(private activatedRoute: ActivatedRoute, public PackageService: PackageServiceService, public UserService: UserService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.date = `${this.dateFormat.getDate()}/${this.dateFormat.getMonth()+1}/${this.dateFormat.getFullYear()}`;
    this.package = this.PackageService.getPackages()
    this.user = this.UserService.getUser()
  }

}
