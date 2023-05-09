import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdm-tab',
  templateUrl: './tdm-tab.component.html',
  styleUrls: ['./tdm-tab.component.scss']
})
export class TdmTabComponent implements OnInit {
onTabOpen($event: any) {
throw new Error('Method not implemented.');
}
onTabClose($event: any) {
throw new Error('Method not implemented.');
}
  // title = 'TDM / Employers Certificate FAQ';

  // tdmQuestions = [
  //   {title:"What is the PIT3 environment?", description:"PIT current version also referred to as PIT3, is a representation of the live environment with functionality kept upto date with the functionality currently available in the live environment. The PIT3 (Public Interface Testing) Environment provides developers and testers access to exclusive Revenue generated test data to verify the compatibility of their software packages with PAYE Modernisation."},
  //   {title:"What is the PIT4 environment?", description:"PIT next version also referred to as PIT4, which will contain upcoming functionality that is pertinent for developers to test their software ahead of the live release. The PIT4 (Public Interface Testing) Environment provides developers and testers access to exclusive Revenue generated test data to verify the compatibility of their software packageswith PAYE Modernisation"},
  //   {title:"What is a TDM (Test Data Management) certificate?", description:"A TDM (Test Data Management) certificate will enable you to login into PIT Self Service Application where you can access and create new employer’s(s) certificates."},
  //   {title:"What is an employer’s cert for the PIT current version environment (PIT3)?", description:"Employers in the PIT current version (PIT3) environment will have a cert associated withthem that will be of the form 9999XXXXX.The employer’s cert is used to access ROS Payroll reporting and to sign and submit payroll submissions and query requests."},
  //   {title:"What is an employer’s cert for the PIT next version environment (PIT4)?", description:"In the PIT next version (PIT4) environment, employers will have a cert associated with them that will be of the form 8888XXXXX. The employer’s cert is used to access ROS Payroll reporting and to sign and submit payroll submissions and query requests."},
  //   {title:"Requesting new TDM and/or Employer’s certificates?", description:"Please only request replacement certificates when your current TDM or Employer certs are not functioning. New TDM (Test Data Management) where issued beginning in early 2021, PIT 3 TDM since mid-March 2021 and PIT 4 TDM since mid-June 2021. If you have not received your new TDM certificates after the afore mentioned dates, please raise a ticket on the PIT Helpdesk requesting the same."},
  // ]

  // constructor() {}

  // ngOnInit(): void {}
     tdms!: TdmItem[];

     ngOnInit(): void {
        this.tdms = [{
            heading: 'What is the PIT3 environment?',
     content: 'PIT current version also referred to as PIT3, is a representation of the live environment with functionality kept upto date with the functionality currently available in the live environment. The PIT3 (Public Interface Testing) Environment provides developers and testers access to exclusive Revenue generated test data to verify the compatibility of their software packages with PAYE Modernisation.'

        }, {
            heading: 'What is the PIT4 environment?',
     content: 'PIT next version also referred to as PIT4, which will contain upcoming functionality that is pertinent for developers to test their software ahead of the live release. The PIT4 (Public Interface Testing) Environment provides developers and testers access to exclusive Revenue generated test data to verify the compatibility of their software packageswith PAYE Modernisation.'
            },
      {
            heading: 'What is a TDM (Test Data Management) certificate?',
     content: 'A TDM (Test Data Management) certificate will enable you to login into PIT Self Service Application where you can access and create new employer’s(s) certificates.'
            },
      {
            heading: 'What is an employer’s cert for the PIT current version environment (PIT3)?',
     content: 'Employers in the PIT current version (PIT3) environment will have a cert associated withthem that will be of the form 9999XXXXX.The employer’s cert is used to access ROS Payroll reporting and to sign and submit payroll submissions and query requests.'
            },
      {
            heading: 'What is an employer’s cert for the PIT next version environment (PIT4)',
     content: 'In the PIT next version (PIT4) environment, employers will have a cert associated with them that will be of the form 8888XXXXX. The employer’s cert is used to access ROS Payroll reporting and to sign and submit payroll submissions and query requests.'
            },
            {
            heading: 'Requesting new TDM and/or Employer’s certificates?',
     content: 'Please only request replacement certificates when your current TDM or Employer certs are not functioning. New TDM (Test Data Management) where issued beginning in early 2021, PIT 3 TDM since mid-March 2021 and PIT 4 TDM since mid-June 2021. If you have not received your new TDM certificates after the afore mentioned dates, please raise a ticket on the PIT Helpdesk requesting the same.'
            }
       ]
    }

}
export class TdmItem {
    heading!: string;
    content!: string;
}

