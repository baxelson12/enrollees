import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { DataService } from './core/services/data.service';
import { effects } from './store/effects';
import { reducers } from './store/reducers';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { ParamSerializer } from './store/serializers/param.serializer';
import { BadButtonModule } from './shared/components/button/button.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { BadCardModule } from './shared/components/card/card.module';
import { BadNavModule } from './shared/components/nav/nav.module';
import { BadToolbarModule } from './shared/components/toolbar/toolbar.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BadInputModule } from './shared/components/input/input.module';
import { ToolbarModule } from './core/components/toolbar/toolbar.module';
import { IdInterceptor } from './shared/interceptors/id.interceptor';
import { storeFreeze } from 'ngrx-store-freeze';
import { MatSnackBarModule } from '@angular/material/snack-bar';

export const metaReducers: MetaReducer<{}>[] = !environment.production
  ? [storeFreeze]
  : [];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule.forRoot({
      serializer: ParamSerializer
    }),
    AngularSvgIconModule.forRoot(),
    BadButtonModule,
    BadCardModule,
    BadNavModule,
    BadToolbarModule,
    ReactiveFormsModule,
    BadInputModule,
    ToolbarModule,
    MatSnackBarModule
  ],
  providers: [
    DataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: IdInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
