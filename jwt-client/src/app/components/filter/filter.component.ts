import { EventEmitter } from '@angular/core';
import { Component, Output } from '@angular/core';
import { FilterService } from 'src/app/services/filter/filter.service';

import { PLACEHOLDER_TEXT } from '../../utils';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  placeholderText = PLACEHOLDER_TEXT;

  @Output() valueChanged = new EventEmitter<string>();

  change(data: string) {
    this.valueChanged.emit(data);
  }
}
