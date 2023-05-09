import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-errors-faq',
  templateUrl: './errors-faq.component.html',
  styleUrls: ['./errors-faq.component.scss']
})
export class ErrorsFaqComponent implements OnInit {

  onTabOpen($event: any) {
    throw new Error('Method not implemented.');
    }
    onTabClose($event: any) {
    throw new Error('Method not implemented.');
    }
    
         errorFaqs!: ErrorFaqItem[];
    
         ngOnInit(): void {
            this.errorFaqs = [{
                heading: 'Signature does not match signed content ‘error message’?',
         content: 'Please follow this signature guide to build the signature properly:\n<a href="https://revenue-ie.github.io/paye-employers-documentation/PIT4/examples/REST_Request_Authentication_V1.pdf">https://revenue-ie.github.io/paye-employers-documentation/PIT4/examples/REST_Request_Authentication_V1.pdf</a>'
            }, {
                heading: 'I have received a ‘BAS100’ error message?',
         content: 'Please check your ROS url login page should finish with the proper table parameter:\nhttps://{ENVIRONMENT}.ros.ie/oidc/login?client_id=payeselfservice_rp\n\nPIT 3: <a href="https://softwaretest.ros.ie/oidc/login?client_id=payeselfservice_rp">https://softwaretest.ros.ie/oidc/login?client_id=payeselfservice_rp</a>\nPIT 4: <a href="https://softwaretestnextversion.ros.ie/oidc/login?client_id=payeselfservice_rp">https://softwaretestnextversion.ros.ie/oidc/login?client_id=payeselfservice_rp</a>\n\nIf that didn’t work, make sure you are in the proper environment for that mock-employer certificate, whether that be PIT3 (Cert#: 9999XXXXX) or PIT4 (Cert#: 8888XXXXX).'
                }
           ]
        }
    
    }
    export class ErrorFaqItem {
        heading!: string;
        content!: string;
    }