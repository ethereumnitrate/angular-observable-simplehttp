import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { DataService } from './data.service';

import { AppComponent } from './app.component';
import { AppRootComponent } from './approot.component';
import { ReverseStr} from './reverse-str.pipe';
import { pipeExampleComponent } from './pipe-example.component';
import { censorPipe } from './custom.pipe';
import { sampleBindComponent } from './samplebinding';
import { twoWayBindComponent} from './twoway-bind.component';
import { jobsComponent } from './jobs.component';

@NgModule({
  declarations: [
    AppComponent, AppRootComponent, ReverseStr, pipeExampleComponent,
    censorPipe, sampleBindComponent, twoWayBindComponent,jobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppRootComponent]
})
export class AppModule { }
