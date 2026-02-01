import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home-component/home-component';
import { ListComponent } from './components/pages/list-component/list-component';
import { DetailComponent } from './components/pages/detail-component/detail-component';
import { MonstersComponent } from './components/pages/monsters-component/monsters-component';
import { MonsterDetailComponent } from './components/pages/monster-detail-component/monster-detail-component';
export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'list', component: ListComponent
    },
    {
        path: 'detail/:leonardo', component: DetailComponent
    },
    {
        path: 'monsters', component: MonstersComponent
    },
    {
        path: 'detailMonsters/:index', component: MonsterDetailComponent
    },
    {
        path: '**', redirectTo: ''
    }
];
