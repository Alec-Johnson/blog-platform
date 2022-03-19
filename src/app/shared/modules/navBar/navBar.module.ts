import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavBarComponent } from 'src/app/shared/modules/navBar/components/navBar/navBar.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NavBarComponent],
  exports: [NavBarComponent],
})
export class NavBarModule {}
