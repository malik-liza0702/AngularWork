import { Routes } from '@angular/router';
import { StructuralComponent } from './structural/structural.component';
import { DynamicCardsComponent } from './dynamic-cards/dynamic-cards.component';
import { ControlFlowComponent } from './control-flow/control-flow.component';
import { ForComponent } from './for/for.component';
import { SwitchComponent } from './switch/switch.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
export const routes: Routes = [
    {
        path:'structural-directive',
        component:StructuralComponent
    },
    {
        path:"dynamic-content",
        component:DynamicCardsComponent
    },{
        path:"control-flow",
        component:ControlFlowComponent,
    },
    {
        path:"for",
        component:ForComponent
    },
    {
        path:"switch",
        component:SwitchComponent

    },
    {
        path:"template-driven",
        component:TemplateDrivenComponent

    },
    {
        path:"reactive",
        component:ReactiveFormsComponent

    }
];
