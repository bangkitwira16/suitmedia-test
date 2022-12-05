import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() collectionSize: number = 0;
  @Input() page: number = 0;
  @Input() boundaryLinks: boolean = false;
  @Input() pageSize: number = 0;
  @Input() maxSize: number = 0;
  @Output() pageChange = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  onPageChange(page: number) {
    this.pageChange.emit(page);
  }
}
