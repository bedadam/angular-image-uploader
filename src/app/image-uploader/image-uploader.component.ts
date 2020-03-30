import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Component({
 selector: 'app-image-uploader',
 templateUrl: './image-uploader.component.html',
 styleUrls: ['./image-uploader.component.css']
})
// Image Upload section with ability to pick file and upload
export class ImageUploaderComponent {

 public formGroup = this.fb.group({
   file: [null, Validators.required]
 });
// to store file name
 private fileName;

 constructor(private fb: FormBuilder, private dbService: NgxIndexedDBService) { }
// Gets called once a file is chosen and reads the file
 public onFileChange(event) {
   const reader = new FileReader();

   if (event.target.files && event.target.files.length) {
     this.fileName = event.target.files[0].name;
     const [file] = event.target.files;
     reader.readAsDataURL(file);

     reader.onload = () => {
       this.formGroup.patchValue({
         file: reader.result
       });
     };
   }
 }

// Gets called when user hits upload button and stores the file in indexedDb
 public onSubmit(): void {
    this.dbService.add('images', { imageName: this.fileName, content: this.formGroup.get('file').value} ).then(

   () => {
       // adding alerts only for demo, not needed in general
      alert('Successfuly uploaded image');
    },
    error => {
        // adding alerts only for demo, not needed in general
        alert('OOPS!! something went wrong, couldnt upload the file');
    }
  );
 }
}
