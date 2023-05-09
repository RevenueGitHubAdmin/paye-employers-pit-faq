import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reporting-issues',
  templateUrl: './reporting-issues.component.html',
  styleUrls: ['./reporting-issues.component.scss']
})
export class ReportingIssuesComponent implements OnInit {

  onTabOpen($event: any) {
    throw new Error('Method not implemented.');
    }
    onTabClose($event: any) {
    throw new Error('Method not implemented.');
    }
    
         reportingIssues!: ReportingIssuesItem[];
    
         ngOnInit(): void {
            this.reportingIssues = [{
                heading: 'How to report an issue / problem experienced while testing software packages in the PIT (Public Interface Testing) environments?',
         content: 'Login to the PIT Help Desk and click on the ‘New Ticket’ icon available in the left toolbar. Please complete the query form with as much detail as possible. You can also attach supporting files such as: \n\n• TDM Certificate (if applicable) \n• Employers Certificate \n• Request File \n• Response File \n• Log Files \n\nProviding the PIT Help Desk Support Team with the additional supporting files, such as the aforementioned, with the initial query will greatly aid the PIT Help Desk Support Team to diagnose the issue.'
            }
           ]
        }
    
    }
    export class ReportingIssuesItem {
        heading!: string;
        content!: string;
    }
