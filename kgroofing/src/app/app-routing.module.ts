import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FinancingComponent } from './financing/financing.component';
import { ProductsComponent } from './products/products.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogsComponent } from './blogs/blogs.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'financing', component: FinancingComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'products', component: ProductsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
