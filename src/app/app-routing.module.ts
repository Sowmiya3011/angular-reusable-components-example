import { NgModule } from "@angular/core";
import {
  Routes,
  RouterModule,
  PreloadingStrategy,
  PreloadAllModules
} from "@angular/router";

const routes: Routes = [
  {
    path: "user",
    loadChildren: "./user/user.module#UserModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}