import { Component } from '@angular/core';
import { FileUpload } from '../fileUpLoad';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-up-load-form',
  templateUrl: './up-load-form.component.html',
  styleUrls: ['./up-load-form.component.css']
})
export class UpLoadFormComponent {
  selectedFiles?: FileList;
  currentFileUpload= false;
  percentage = 0;
  constructor(private uploadService: BaseService) { }
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  pushfile(){
    if (this.selectedFiles){
      Array.from(this.selectedFiles).forEach(
        (e)=>{
          this.currentFileUpload=true
          this.uploadService.pushFile(e).subscribe(
            percentage => {
                    this.percentage = Math.round(percentage ? percentage : 0);
                  }
          )
        }
      )
   
      // this.uploadService.pushFile(this.selectedFiles[0])
      this.selectedFiles=undefined
    }
  }

  upload(): void {
    if (this.selectedFiles) {
      console.log(this.selectedFiles)
      const file: File | null = this.selectedFiles.item(0);
      this.selectedFiles = undefined;

      // if (file) {
      //   this.currentFileUpload = new FileUpload(file);
      //   this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
      //     percentage => {
      //       this.percentage = Math.round(percentage ? percentage : 0);
      //     },
      //     error => {
      //       console.log(error);
      //     }
      //   );
      // }
    }
  }
}


