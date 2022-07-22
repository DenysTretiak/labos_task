import { Component, ChangeDetectionStrategy, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DisplayColumnInterface } from '../../models/displayed-columns.interface';

@Component({
  selector: 'st-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {
  @Input() data: Observable<any[]>;
  @Input() displayedColumns;
  @Input() isFavouriteRoute: boolean;
  @Input() emptyTableTitle: string;
  @Input() selector: any;
  @Output() onClickingFavouriteButton: EventEmitter<any> = new EventEmitter<any>();
  displayedColumnsValues: string[];

  constructor (private store: Store) {}

  public ngOnInit () {
    this.displayedColumnsValues = this.displayedColumns.map(column => column.value)
  }

  get tooltipTitle(): string {
    return this.isFavouriteRoute ? 'stms.table.remove-from-favourite' : 'stms.table.add-to-favourite';
  }

  addToFavourite(element: any) {
    this.onClickingFavouriteButton.emit(element)
  }

  isFavourite(column: DisplayColumnInterface): boolean {
    return column.value === 'addToFavourite';
  }

  isFavouriteElement(element: any): Observable<boolean> {
    return this.store.select(this.selector).pipe(
      map((favouriteElements: any) => {
        return favouriteElements.includes(element)
      })
    );
  }
}
