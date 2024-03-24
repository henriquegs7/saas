import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingUpComponent } from './pages/auth/pages/sing-up/sing-up.component';
import { ForgotPasswordComponent } from './pages/auth/pages/forgot-password/forgot-password.component';
import { AuthComponent } from './pages/auth/auth.component';
import { LoginComponent } from './pages/auth/pages/login/login.component';

export const routes: Routes = [
  {
    path: '', title: "LogIn Page", component: AuthComponent, children: [
      {
        path: 'login', title: "Login", component: LoginComponent
      },
      {
        path: 'singup', title: "Sing Up", component: SingUpComponent
      },
      {
        path: 'forgotpassword', title: "Forgot Password", component: ForgotPasswordComponent
      }
    ]
  },
  { path: 'home', title: "Home", component: HomeComponent },
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];
