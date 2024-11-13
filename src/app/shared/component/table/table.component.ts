import { CommonModule, DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RowData } from '@shared/models/table-model';
import { NoRecordFoundComponent } from '../no-record-found/no-record-found.component';
import { Table, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { MultiSelectModule } from 'primeng/multiselect';
import { HttpClientModule } from '@angular/common/http';
import { FeathericonComponent } from '../feathericon/feathericon.component';
import { RouterModule } from '@angular/router';
import { PipeModule } from '@shared/pipe/pipe.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ItemDetailDialogComponent } from '../item-detail-dialog/item-detail-dialog.component';
import { DropdownModule } from 'primeng/dropdown';
import { ToastService } from '@shared/services/toast.service';
import _ from 'lodash';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule, TagModule, IconFieldModule, InputTextModule, InputIconModule, MultiSelectModule, DropdownModule, HttpClientModule, CommonModule, FeathericonComponent, RouterModule, NgbModule, NoRecordFoundComponent, PipeModule, MatDialogModule, MatButtonModule, ItemDetailDialogComponent],
  providers: [DatePipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  @Input() actiontype: any = 'create';
  @Input() jsonData!: RowData;

  @Output() handleDeleteAction = new EventEmitter<void>();
  @Output() handleCreateAction = new EventEmitter<void>();
  @Output() handleEditAction = new EventEmitter<void>();
  @Output() handleViewAction = new EventEmitter<void>();
  @Output() handleExportAction = new EventEmitter<void>();
  @Output() handleSelectRowAction = new EventEmitter<void>();

  @ViewChild('DeleteConfirmation', { static: true }) DeleteConfirmation!: TemplateRef<NgbModal>;

  emitId: any = null;
  selectedRows: any;
  statuses!: any[];
  loading: boolean = true;


  constructor(private modalService: NgbModal,
    private toastService: ToastService
  ) { }

  ngOnInit() {
    this.loading = false;
    this.statuses = this.jsonData.statuses
  }

  actionButton(action: any, id: any = '', event: any = {}, operationId?: any) {
    switch (action) {
      case 'create':
        this.handleCreateAction.emit();
        break;
      case 'edit':
        this.handleEditAction.emit(id);
        break;
      case 'view':
        this.handleViewAction.emit(id);
        break;
      case 'delete':
        this.deleteConfirmationModal(operationId)
        this.emitId = id;
        break;
      case 'export':
        this.handleExportAction.emit();
        break;
      case 'selectrow':
        if ((event.target as HTMLElement).closest('.action-button')) {
        } else {
          this.handleSelectRowAction.emit(id);
        }
        break;
    }
  }

  deleteConfirmationModal(operationId: any) {
    if (operationId) {
      const message = 'This field cannot be deleted because a job ID is present.';
      this.toastService.open(message, 'error');
      return
    } else {
      this.modalService.open(this.DeleteConfirmation, { centered: true, backdrop: 'static' });
    }
  }

  confirmDelete() {
    if (this.emitId) {
      this.handleDeleteAction.emit(this.emitId);
    }
    this.emitId = null;
    this.modalService.dismissAll();
  }

  calculateHeaderSize(headerCount: any, colSize: any) {
    if (colSize && colSize.length > 0) {
      return colSize;
    }
    else {
      const count = Number(headerCount) - 2
      const calculatePercentage = 85 / Number(count);
      return calculatePercentage + '%'
    }
  }

  clear(table: Table) {
    table.clear();
  }

  getSeverity(status: string) {
    const state = this.statuses.find((item: any) => item.label === status.toString())?.value ?? '';
    switch (state) {
      case 'danger':
        return 'danger';

      case 'success':
        return 'success';

      case 'info':
        return 'info';

      case 'warning':
        return 'warning';

      default:
        return undefined;
    }
  }

  getObjectsDiff(newObject: any, originalObject: any): any {
    const objectsDiff = (newObject: any, originalObject: any): any => {
      return _.transform(newObject, (result: any, value: any, key: string) => {
        if (!_.isEqual(value, originalObject[key])) {
          result[key] = (_.isObject(value) && _.isObject(originalObject[key])) ? objectsDiff(value, originalObject[key]) : value;
        }
      });
    }
    return objectsDiff(newObject, originalObject);
  }

  isValidDataKey(key: any): key is string {
    return typeof key === 'string';
  }

}
