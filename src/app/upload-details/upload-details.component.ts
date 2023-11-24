import { Component, Input } from '@angular/core';
import { BaseService } from '../base.service';


@Component({
  selector: 'app-upload-details',
  templateUrl: './upload-details.component.html',
  styleUrls: ['./upload-details.component.css']
})
export class UploadDetailsComponent {
  @Input() fileUpload!: any;

  constructor(private uploadService: BaseService) { }

  ngOnInit(): void {
  }

  deleteFileUpload(fileUpload: any): void {
    this.uploadService.deleteFile2(fileUpload);
  }
  openPdfFile(fileUpload: any){
    
  }
}
