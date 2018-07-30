import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Page } from './page';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginatorComponent {
  @Input() page: Page<any>;
  @Output() pageChange = new EventEmitter<string>();
}

