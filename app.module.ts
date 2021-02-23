import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { PanelComponent } from './panel/panel.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { TaskToDoComponent } from './task-to-do/task-to-do.component';
import { FormsModule } from '@angular/forms';
import { BackendService } from './backend.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemComponent,
    PanelComponent,
    ToDoListComponent,
    TaskToDoComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
