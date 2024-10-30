import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-project-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-overview.component.html',
  styleUrl: './project-overview.component.scss'
})
export class ProjectOverviewComponent implements OnChanges {

  @Input() drsDashboard: any;
  TaskSummaryData = [{ "task": "Total", "icon": "Pie", "class": "primary", "number": 0 }, { "task": "Assigned", "icon": "Category", "class": "secondary", "number": 0 }, { "task": "Completed", "icon": "Document", "class": "tertiary", "number": 0 }]


  ngOnChanges(changes: SimpleChanges) {
    if (changes['drsDashboard']) {
      this.TaskSummaryData = [{ "task": "Total", "icon": "Pie", "class": "primary", "number": this.drsDashboard.total_drs_master }, { "task": "Assigned", "icon": "Category", "class": "secondary", "number": this.drsDashboard.drs_pending }, { "task": "Completed", "icon": "Document", "class": "tertiary", "number": this.drsDashboard.drs_completed }]
    }

  }
}
