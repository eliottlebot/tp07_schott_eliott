import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PollutionList } from '../components/pollution-list/pollution-list';
import { PollutionService } from '../services/pollution.service';
import { HttpClientModule } from '@angular/common/http';
import { PollutionFormComponent } from '../components/pollution-form/pollution-form.component';

const routes = [
  { path: '', component: PollutionFormComponent },
  { path: 'list', component: PollutionList },
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  providers: [PollutionService],
})
export class PollutionModule {}
