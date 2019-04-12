import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
   selector: 'grid-ui',
   templateUrl: './CustomerApp.Grid.html'
})

export class GridComponent {
      gridColumns: Array<Object> = new Array<Object>();
      gridData: Array<Object> = new Array<Object>();

      @Input('grid-columns')
      set setGridColumns(_gridColumns: Array<Object>) {
        this.gridColumns = _gridColumns;
      }

      @Input('grid-data')
      setGridData(_gridData: Array<Object>) {
        this.gridData = _gridData;
      }

      @Output('grid-selected')
      eventemitter: EventEmitter<Object> = new EventEmitter<Object>();

      // Grid.html <href> --> click event goes to selectGrid() below
      SelectGrid(_selected: Object) {    // emit out an event and send to UI under which component is running
        this.eventemitter.emit(_selected);
      }
}
