import { Component, OnInit } from '@angular/core';
import { SafePipe } from 'safe-pipe/public-api';

@Component({
  selector: 'app-soap-rest-tab',
  templateUrl: './soap-rest-tab.component.html',
  styleUrls: ['./soap-rest-tab.component.scss']
})
export class SoapRestTabComponent implements OnInit {

  onTabOpen($event: any) {
    throw new Error('Method not implemented.');
    }
    onTabClose($event: any) {
    throw new Error('Method not implemented.');
    }
    
         soapRests!: SoapRestItem[];
    
         ngOnInit(): void {
            this.soapRests = [{
                heading: 'How to build a REST endpoint?',
         content: 'https://{ENVIRONMENT}.ros.ie/paye-employers/v1/{REST}/API/\nEnvironments:\n• PIT3: softwaretest\n• PIT4: softwaretestnextversion\n\nAPIs:\n• payroll\n• rpn\n• returns_reconciliation\n• handshake\n\nPIT3 REST examples:\n<a href="https://revenue-ie.github.io/paye-employers-documentation/PIT3/rest/paye-employers-rest-api-pit3.html">https://revenue-ie.github.io/paye-employers-documentation/PIT3/rest/paye-employers-rest-api-pit3.html</a>\n\nPIT4 REST examples:\n<a href="https://revenue-ie.github.io/paye-employers-documentation/PIT4/rest/paye-employers-rest-api-pit4.html">https://revenue-ie.github.io/paye-employers-documentation/PIT4/rest/paye-employers-rest-api-pit4.html</a>'
            }, {
                heading: 'How to build a Soap endpoint?',
         content: 'https://{ENVIRONMENT}.ros.ie/paye-employers/v1/{soap}/API/\nEnvironments:\n• PIT3: softwaretest\n• PIT4: softwaretestnextversion\n\nAPIs:\n• payroll\n• rpn\n• returns_reconciliation\n• handshake\n\nPIT3 SOAP examples:\n<a href="https://revenue-ie.github.io/paye-employers-documentation/PIT3/soap/soap-schema-reference/webframe.html#topic322.html">https://revenue-ie.github.io/paye-employers-documentation/PIT3/soap/soap-schema-reference/webframe.html#topic322.html</a>\n\nPIT4 SOAP examples:\n<a href="https://revenue-ie.github.io/paye-employers-documentation/PIT4/soap/soap-schema-reference/webframe.html#topic322.html">https://revenue-ie.github.io/paye-employers-documentation/PIT4/soap/soap-schema-reference/webframe.html#topic322.html</a>'
                }
           ]
        }
    
    }
    export class SoapRestItem {
        heading!: string;
        content!: string;
    }

