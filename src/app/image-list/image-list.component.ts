import { Component, OnInit } from '@angular/core';
// using NgxIndexedDBService, a service that wraps IndexedDB database in an Angular service
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Component({
 selector: 'app-image-list',
 templateUrl: './image-list.component.html',
 styleUrls: ['./image-list.component.css']
})
// Fetches list of all images available in indexedDb
export class ImageListComponent implements OnInit {

 public imageList: object[];

 constructor( private dbService: NgxIndexedDBService) { }

// calling onView on Mount to display images
 ngOnInit() {
  this.onView();
 }

// Delete image by id from indexedDb
 public deleteImage(id: string): void {
   this.dbService.delete('images', id).then(
     () => {
         // Fetch latest list of images from DB 
       this.onView();
     },
     error => {
      alert('OOPS! Something went wrong, couldnt delete the image');
     }
   );
 }
// Display images
 public onView(): void {
     // fetch from indexedDb
  this.dbService.getAll('images').then(
    images => {
      this.imageList = images;
    },
    error => {
      alert('OOPS!! Something went wrong, couldnt get images');
    }
  );
}
}
