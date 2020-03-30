import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { appRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { ImageListComponent } from './image-list/image-list.component';

import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';

// Configuring IndexedDb Schema
const dbConfig: DBConfig  = {
  name: 'imagesDb',
  version: 1,
  objectStoresMeta: [{
    store: 'images',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'imageName', keypath: 'imageName', options: { unique: false } },
      { name: 'content', keypath: 'content', options: { unique: false } }
    ]
  }]
};

@NgModule({
  declarations: [
    AppComponent,
    ImageUploaderComponent,
    ImageListComponent
  ],
  imports: [
  CommonModule,
  appRoutingModule,
  ReactiveFormsModule,
  NgxIndexedDBModule.forRoot(dbConfig)
  ],
  providers: [],
})
export class AppModule { }
