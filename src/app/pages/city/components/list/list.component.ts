import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { City } from 'src/app/core/models/city';
import { CityService } from 'src/app/core/services/city.service';
import { CountryService } from 'src/app/core/services/country.service';
import { ToastrService } from 'ngx-toastr';
import { constants } from 'src/app/core/defines/app.constants';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { CitiesModule } from '../../cities.module';
import { filter } from 'rxjs/operators';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  displayedColumns = ['name', 'update', 'delete'];
  dataSource = new MatTableDataSource<City>([]);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  countryID: any;
  countryName: string;

  constructor(
    private cityService: CityService,
    private toastr: ToastrService,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private countryService: CountryService
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.countryID = params['id'];
      if (this.countryID) {
        this.getCountryName(this.countryID);
        this.getCountryCities(this.countryID);
      }
      else
        this.getAllCities();
    });
  }



  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getAllCities() {
    this.cityService.getCities().subscribe((response: any) => {
      this.dataSource.data = response;

    }, (error: any) => {
      this.toastr.error(constants.errorMessage);
    });
  }

  getCountryName(id: any) {
    this.countryService.getCountry(id).subscribe((response: any) => {
      this.countryName = response.name;

    }, (error: any) => {
      this.toastr.error(constants.errorMessage);
    });
  }


  getCountryCities(id: any) {
    this.cityService.getCitiesofCountry(id).subscribe((response: any) => {
      this.dataSource.data = response;

    }, (error: any) => {
      this.toastr.error(constants.errorMessage);
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '75%',
      data: { id: '', name: '', action: 'ADD' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.cityService.addCity({ name: result, countryId: +this.countryID }).subscribe((response: any) => {
          let newDataSource = this.dataSource.data.slice();
          newDataSource.push(response)
          this.dataSource.data = newDataSource;
        }, (error: any) => {
          this.toastr.error(constants.errorMessage);
        });
      }

    });
  }


  redirectToUpdate(element: City) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '75%',
      data: { id: element.id, name: element.name, action: 'UPDATE' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        this.cityService.updateCity({ id: element.id, name: result, countryId: element.countryId}).subscribe((response: any) => {

          this.dataSource.data.forEach(data => {
            if (data.id == response.id)
              data.name = response.name;
          })

        }, (error: any) => {
          this.toastr.error(constants.errorMessage);
        });

      }

    });
  }

  redirectToDelete(id: string) {
    this.cityService.deleteCity(id).subscribe((response: any) => {

      let newDataSource = this.dataSource.data.filter(data => data.id != response.id);
      this.dataSource.data = newDataSource;


    }, (error: any) => {
      this.toastr.error(constants.errorMessage);
    });
  }
}
