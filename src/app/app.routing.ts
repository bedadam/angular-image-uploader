import { Routes, RouterModule } from '@angular/router';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { ImageListComponent } from './image-list/image-list.component';

const routes: Routes = [
    { path: '', component: ImageListComponent },
    { path: 'uploadImage', component: ImageUploaderComponent },
    { path: 'imageList', component: ImageListComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
