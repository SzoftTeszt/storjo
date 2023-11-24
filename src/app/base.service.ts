import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FileUpload } from './fileUpLoad';
import { Observable, finalize } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private basePath = '/uploads';
  private basePath2 = '/feltolt';
  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage
     ) { }
    
    pushFile(f:any){
      console.log("Saját push")
      const filename="/feltolt/"+f.name
      const storageRef = this.storage.ref(filename);
      const uploadTask= this.storage.upload(filename, f)
      
      uploadTask.snapshotChanges()
      .pipe(
        finalize(()=>{
          storageRef.getDownloadURL().subscribe(
            {next:(res)=>{
              console.log(res)
              const mentendo={url:res, name: f.name}
              this.saveFile(mentendo)
            },
          
              error:(err)=>console.log("HibaURL",err)
              }
          )
        })
      ).subscribe(
        {next:(res)=>console.log(res),
          
        error:(err)=>console.log("Hiba",err)
        }
      )

      return uploadTask.percentageChanges()
    }

     pushFileToStorage(fileUpload: FileUpload): Observable<number | undefined> {
      const filePath = `${this.basePath}/${fileUpload.file.name}`;
      const storageRef = this.storage.ref(filePath);
      const uploadTask = this.storage.upload(filePath, fileUpload.file);
  
      uploadTask.snapshotChanges().pipe(
        finalize(() => {
          storageRef.getDownloadURL().subscribe(downloadURL => {
            fileUpload.url = downloadURL;
            fileUpload.name = fileUpload.file.name;
            this.saveFileData(fileUpload);
          });
        })
      ).subscribe();
  
      return uploadTask.percentageChanges();
    }
  
    private saveFileData(fileUpload: FileUpload): void {
      this.db.list(this.basePath).push(fileUpload);
    }
    private saveFile(fileUpload: any): void {
      this.db.list(this.basePath2).push(fileUpload);
    }
    
    getFiles2(): AngularFireList<FileUpload> {
      return this.db.list(this.basePath2);
    }

    deleteFile2(fileData:any){
      console.log("Törlés",fileData)
      this.db.list(this.basePath2).remove(fileData.key).then(
        ()=>{
        const storageRef = this.storage.ref(this.basePath2);
        storageRef.child(fileData.name).delete();
        }
      )
      .catch(error => console.log(error));
    }
    getFiles(numberItems: number): AngularFireList<FileUpload> {
      return this.db.list(this.basePath, ref =>
        ref.limitToLast(numberItems));
    }
  
    deleteFile(fileUpload: FileUpload): void {
      this.deleteFileDatabase(fileUpload.key)
        .then(() => {
          this.deleteFileStorage(fileUpload.name);
        })
        .catch(error => console.log(error));
    }
  
    private deleteFileDatabase(key: string): Promise<void> {
      return this.db.list(this.basePath).remove(key);
    }
  
    private deleteFileStorage(name: string): void {
      const storageRef = this.storage.ref(this.basePath);
      storageRef.child(name).delete();
    }
  }
  
  

