import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface ResidencyApplication {
  sn: number;
  referenceNo: string;
  applicationDate: string;
  status: string;
  remarks: string;
}

const RESIDENCY_DATA: ResidencyApplication[] = [
  { sn: 1, referenceNo: '111111', applicationDate: '01/01/2022', status: 'Pending', remarks: 'No update...' },
  { sn: 2, referenceNo: '222222', applicationDate: '11/30/2021', status: 'Approved', remarks: 'Certificated issued...' },
  { sn: 3, referenceNo: '333333', applicationDate: '09/17/2021', status: 'Approved', remarks: 'This was approved...' },
  { sn: 4, referenceNo: '444444', applicationDate: '01/01/2022', status: 'Pending', remarks: 'No update...' },
  { sn: 5, referenceNo: '555555', applicationDate: '11/30/2021', status: 'Approved', remarks: 'Certificated issued...' },
  { sn: 6, referenceNo: '666666', applicationDate: '09/17/2021', status: 'Approved', remarks: 'This was approved...' },
  { sn: 7, referenceNo: '777777', applicationDate: '01/01/2022', status: 'Pending', remarks: 'No update...' },
  { sn: 8, referenceNo: '888888', applicationDate: '11/30/2021', status: 'Approved', remarks: 'Certificated issued...' },
  { sn: 9, referenceNo: '999999', applicationDate: '09/17/2021', status: 'Approved', remarks: 'This was approved...' },
  { sn: 10, referenceNo: '1212121', applicationDate: '09/17/2021', status: 'Approved', remarks: 'This was approved...' },
];

@Component({
  selector: 'app-residency',
  templateUrl: './residency.component.html',
  styleUrls: ['./residency.component.scss']
})
export class ResidencyComponent implements AfterViewInit {
  residencyDisplayedColumns: string[] = [ 'sn', 'referenceNo', 'applicationDate', 'status', 'remarks' ];
  residencyApplicationData = new MatTableDataSource<ResidencyApplication>(RESIDENCY_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
      this.residencyApplicationData.paginator = this.paginator;
  }

  showApplicationDetails(referenceNo: string) {
    console.log('showApplicationDetails ' + referenceNo);
  }
}
