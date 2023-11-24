import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-up-load-list',
  templateUrl: './up-load-list.component.html',
  styleUrls: ['./up-load-list.component.css']
})
export class UpLoadListComponent {
  fileUploads?: any[];

  constructor(private uploadService: BaseService) { }

  ngOnInit(): void {
    this.uploadService.getFiles2().snapshotChanges().pipe(
      map(changes =>
        // store the key
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(fileUploads => {
      this.fileUploads = fileUploads;
      console.log("fileuploads",this.fileUploads)
    });
  }
}
