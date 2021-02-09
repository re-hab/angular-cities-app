import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Country } from 'src/app/core/models/country';
import { CountryService } from 'src/app/core/services/country.service';
import { ToastrService } from 'ngx-toastr';
import { constants } from 'src/app/core/defines/app.constants';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  displayedColumns = ['name', 'details', 'update', 'delete'];
  dataSource = new MatTableDataSource<Country>([]);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private countryService: CountryService,
    private toastr: ToastrService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getAllCountries();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getAllCountries() {
    this.countryService.getCountries().subscribe((response: any) => {
      this.dataSource.data = response;

    }, (error: any) => {
      this.toastr.error(constants.errorMessage);
    });
  }


  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '75%',
      data: { id:'' , name: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.countryService.addCountry(result).subscribe((response: any) => {
          let newDataSource = this.dataSource.data.slice();
          newDataSource.push(response)
          this.dataSource.data = newDataSource;
        }, (error: any) => {
          this.toastr.error(constants.errorMessage);
        });
      }

    });
  }

  redirectToDetails(id: string) {

  }
  redirectToUpdate(element: Country) {

    const dialogRef = this.dialog.open(DialogComponent, {
      width: '75%',
      data: { id: element.id, name: element.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        this.countryService.updateCountry({id: element.id, name: result }).subscribe((response: any) => {

          this.dataSource.data.forEach(data => {
            if(data.id == response.id)
              data.name = response.name;
          })
      
        }, (error: any) => {
          this.toastr.error(constants.errorMessage);
        });

      }

    });
  }

  redirectToDelete(id: string) {
    this.countryService.deleteCountry(id).subscribe((response: any) => {

      let newDataSource = this.dataSource.data.filter(data => data.id != response.id);
      this.dataSource.data = newDataSource;


    }, (error: any) => {
      this.toastr.error(constants.errorMessage);
    });
  }
}
