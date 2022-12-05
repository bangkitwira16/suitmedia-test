import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dropdown } from '../../models/dropdown.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  @Input() label: string = '';
  @Input() options: Dropdown[] = [];
  @Input() selectedOption: string = '';
  @Output() inputModelChange = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  selectOption(option: Dropdown): void {
    this.selectedOption = option.value;
    this.inputModelChange.emit(this.selectedOption);
  }

  getSelectedOptionLabel(value: string): string {
    const idx = this.options.findIndex(option => value === option.value )
    return this.options[idx].label
  }
}
