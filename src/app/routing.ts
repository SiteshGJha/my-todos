import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';

const appRoutes: Routes = [
    { path: 'users', component: UserListComponent },
    { path: 'user/:id', component: UserComponent },
    { path: '', redirectTo: 'users', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(appRoutes);