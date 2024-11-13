import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, Self } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastService } from '@shared/services/toast.service';
import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';
import { ItemDetailDialogComponent } from '../item-detail-dialog/item-detail-dialog.component';
import { IUploadStructure } from '@shared/models/form-model';
import { UploadControllerService } from '@shared/services/upload.service';

@Component({
  selector: 'app-upload-file',
  standalone: true,
  imports: [CommonModule, DropzoneModule],
  templateUrl: './upload-file.component.html',
  styleUrl: './upload-file.component.scss',
  providers: [UploadControllerService]

})

export class UploadFileComponent {
  @Input() formConfig: IUploadStructure[] = [];
  @Input() isUploadMultiDocs: boolean = false;
  @Input() isFolderUpload: boolean = false;
  @Input() requireBase64: boolean = false;
  @Input() formControl: any;
  @Output() fileUploaded: EventEmitter<File> = new EventEmitter<File>();
  @Output() photoBase64Uploaded: EventEmitter<any> = new EventEmitter()
  @Output() uploadBulkFile = new EventEmitter<IUploadStructure[]>();
  uploadedFiles: File[] = [];
  uploadedDocuments: any[] = [];
  modalImageUrl: string | null = null;

  public text = ' <div class="dz-message needsclick"><i class="icon-cloud-up"></i><p>Drop files here or click to upload.</p></div>';

  constructor(@Self() private uploadService: UploadControllerService, private toastService: ToastService, public dialog: MatDialog) { }

  onUploadError(args: DropzoneConfigInterface): void {
    this.toastService.open('An error occurred while uploading the file. Please try again.', 'error');
  }

  onUploadSuccess(event: any, index: number) {
    const [file] = event;
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result as any;
      if (!this.isUploadMultiDocs) {
        if (this.requireBase64) {
          const formEntry = this.formConfig[index];
          const imgData = {
            imgName: file.name,
            base64String: base64String,
            fieldName: formEntry.name
          }
          this.photoBase64Uploaded.emit(imgData);
        } else {
          this.fileUploaded.emit(file);
        }


      }
      const formEntry = this.formConfig[index];

      if (formEntry && formEntry.dropzoneConfig) {
        const maxFiles = formEntry.dropzoneConfig.maxFiles;

        if (maxFiles === 1 || maxFiles === 2) {
          const formData = new FormData();
          formData.append('file', file);

          this.uploadService.uploadFile(formData).subscribe({
            next: (response: any) => {
              const uploadedImageUrl = response.data.imageUrl;

              if (maxFiles === 1) {
                formEntry.upload_page_1_file_name = file.name;
                formEntry.upload_page_1 = uploadedImageUrl;
              } else if (maxFiles === 2) {
                if (!formEntry.upload_page_1_file_name) {
                  formEntry.upload_page_1_file_name = file.name;
                  formEntry.upload_page_1 = uploadedImageUrl;
                } else {
                  formEntry.upload_page_2_file_name = file.name;
                  formEntry.upload_page_2 = uploadedImageUrl;
                }

                if (!formEntry.upload_page_1_file) {
                  formEntry.upload_page_1_file = base64String;

                } else {
                  formEntry.upload_page_2_file = base64String;
                }
              }

            },
            error: (error: any) => {
              console.error('Error uploading file:', error);
            }
          });
        } else {
          console.warn('Unhandled maxFiles configuration:', maxFiles);
        }
      } else {
        console.warn('formEntry or dropzoneConfig is undefined at index:', index);
      }
    };
    reader.readAsDataURL(file);
  }

  startUpload(): void {
    const dropzone = document.querySelector('ngx-dropzone .dz-hidden-input') as HTMLInputElement;
    if (dropzone && dropzone.files) {
      dropzone.dispatchEvent(new Event('change'));
    }
  }

  calculateColumnsPerRow(numItems: number): number {
    if (numItems === 1) {
      return 12;
    } else {
      const maxColumnsPerRow = 4;
      return Math.ceil(numItems / maxColumnsPerRow);
    }
  }

  submitDocuments() {
    this.uploadBulkFile.emit(this.formConfig);
  }
  openImageModal(imageUrl: string) {
    this.modalImageUrl = imageUrl;
  }

  handleFolderInput(event: any) {
    this.fileUploaded.emit(event);
  }

  viewImages(item: any): void {
    let imgData: any;
    let base64String = item || '';
    let mimeType: string = 'application/octet-stream';
    let imageFilePath;

    if (base64String.startsWith('http://') || base64String.startsWith('https://')) {
      imageFilePath = base64String
    }

    // Detect the type of base64 data based on its prefix or content
    if (base64String && !imageFilePath) {
      if (base64String.startsWith('/9j/') || base64String.startsWith('iVBORw0KGgo')) {
        // Assuming this is an image (JPEG or PNG)
        mimeType = 'image/jpeg'; // Default MIME type for JPEG images
        // if (base64String.startsWith('iVBORw0KGgo')) {
        if (base64String.startsWith('iVBORw0KGgo')) {
          mimeType = 'image/png'; // For PNG images
        }
      } else if (base64String.startsWith('JVBERi0')) {
        // Detect PDF based on its header
        mimeType = 'application/pdf';
      } else if (base64String.startsWith('data:')) {
        // Already in the correct format
        mimeType = base64String.split(';')[0].split(':')[1];
      }

      // If the base64String does not already include the MIME type
      if (!base64String.startsWith('data:')) {
        base64String = `data:${mimeType};base64,${base64String}`;
      }
    }

    // Prepare the imgData object based on the type of content
    imgData = {
      key: mimeType === 'application/pdf' ? 'Document' : 'Job Id',
      value: mimeType === 'application/pdf' ? item?.document_no : item?.job_no,
      img: imageFilePath ? imageFilePath : base64String,
      img_name: item?.image_file_name,
    };

    // Configure dialog settings
    const dialogConfig: MatDialogConfig = {
      maxWidth: '80vw',
      maxHeight: '90vh',
      height: '100%',
      width: '100%',
      data: imgData,
      autoFocus: true,
      disableClose: true,
      panelClass: 'custom-dialog-container', // Use a custom class for additional styling
    };

    const dialogRef = this.dialog.open(ItemDetailDialogComponent, dialogConfig);

  }

  removeImage(formIndex: number, index: number,): void {
    const formEntry = this.formConfig[formIndex];
    if (index === 0) {
      // Remove the first image
      formEntry.upload_page_1_file = null;
      formEntry.upload_page_1 = null;
      formEntry.upload_page_1_file_name = null;
    } else if (index === 1) {
      // Remove the second image
      formEntry.upload_page_2_file = null;
      formEntry.upload_page_2 = null;
      formEntry.upload_page_2_file_name = null;
    }
  }
}
