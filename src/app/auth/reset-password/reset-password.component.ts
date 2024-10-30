import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ForgotPasswordService } from '@shared/_http/forgot-password.service';
import { FeathericonComponent } from '@shared/component/feathericon/feathericon.component';
import { responseMessages } from '@shared/constants/response-msgs.constant';
import { AuthGuard } from '@shared/guard/auth.guard';
import { LoaderService } from '@shared/services/loader.service';
import { ToastService } from '@shared/services/toast.service';
import { currentUser } from '@shared/utils/current-user';
import { EncryptedStorage } from '@shared/utils/encrypted-storage';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, RouterModule, FeathericonComponent, FormsModule, ReactiveFormsModule],
  providers: [ForgotPasswordService],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'] // Make sure this is correct
})
export class ResetPasswordComponent {
  public show: boolean = false;
  public showOld:boolean = false;
  public resetForm: FormGroup;
  constructor(private fb: FormBuilder, public router: Router, private authService: ForgotPasswordService, private toastService: ToastService,public loader:LoaderService,private authGuard:AuthGuard) {
    this.resetForm = this.fb.group({
      user_id: [currentUser().user_id, [Validators.required]],
      old_password: ["", Validators.required],
      password: ["", Validators.required],
    });

  }
  showPassword() {
    this.show = !this.show;
  }

  showOldPassword() {
    this.showOld = !this.showOld;
  }

  updatePassword() {
    this.loader.showLoader();
    this.authService.resetUpdatePassword(this.resetForm.value).subscribe({
      next: (value) => {
        this.loader.hideLoader();
        this.toastService.open("Update Successful", "success");
        this.logOut();
      }, error: (err) => {
        const message = responseMessages.codes.find(item => item.code == err.error_message)?.message ?? 'Something went wrong!';
        this.toastService.open(message, 'error');
        console.error('Passwords do not match');
        this.loader.hideLoader();
      }
    })
  }

  logOut() {
    this.authGuard.resetGuard();
    new EncryptedStorage().clearAll();
    this.router.navigate(['/auth/login'])
  }

}
