import { Routes } from '@angular/router';
import { UsersComponent } from '../components/day5/users/users.component';
import { DetailsComponent } from '../components/day5/details/details.component';
import { ErrorComponent } from '../components/day5/error/error.component';
import { NewUserComponent } from '../components/day5/new-user/new-user.component';
import { UpdatesComponent } from '../components/day5/updates/updates.component';
import { OneStudentComponent } from '../components/day5/one-student/one-student.component';
// import { FormComponent } from '../components/day4/form/form.component';
// import { DetailsComponent } from '../components/day4/details/details.component';
// import { ProfileComponent } from '../components/day4/profile/profile.component';
// import { ErrorComponent } from '../components/day4/error/error.component';
// import { StudentsComponent } from '../components/day4/students/students.component';

export const routes: Routes = [

    // Day 4
    // {path:"", component:FormComponent},
    // {path:"form", component:FormComponent},
    // {path:"students", component:StudentsComponent},
    // {path:"students/:id", component:DetailsComponent},
    // {path:"profile", component:ProfileComponent},
    // {path:"**", component:ErrorComponent}

     ///////////////////////////////////////////////////
     //Day 5
     {path:"", component:UsersComponent},
    {path:"users", component:UsersComponent},
    {path:"users/:id", component:DetailsComponent},
    {path:"newUser", component:NewUserComponent},
    {path:"newstudent", component:OneStudentComponent},
    {path:"update/:id", component:UpdatesComponent},
    {path:"**", component:ErrorComponent}
];
