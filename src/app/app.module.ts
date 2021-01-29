import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { DataService } from './core/services/data.service';
import { effects } from './store/effects';
import { reducers } from './store/reducers';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { ParamSerializer } from './store/serializers/param.serializer';
import { ButtonModule } from './shared/components/button/button.module';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule.forRoot({
      serializer: ParamSerializer
    }),
    AngularSvgIconModule,
    ButtonModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
