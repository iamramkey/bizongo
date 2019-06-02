import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgxLoadingModule } from 'ngx-loading';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { AppContentComponent } from './app-content/app-content.component';
import { GameDetailsComponent } from './app-content/game-details/game-details.component';
import { GamesListComponent } from './app-content/games-list/games-list.component';
import { AppContent } from './app-content/shared/app-content.model';
import { AppContentService } from './app-content/shared/app-content.service';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './loader/loader.component';
import { NoDataComponent } from './no-data/no-data.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppTitleService } from './services/title.service';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppContentComponent,
    NotFoundComponent,
    LoaderComponent,
    GameDetailsComponent,
    GamesListComponent,
    NoDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    NgxLoadingModule.forRoot({}),
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    VirtualScrollerModule
  ],
  providers: [AppTitleService, AppContentService, AppContent],
  bootstrap: [AppComponent]
})
export class AppModule {}
