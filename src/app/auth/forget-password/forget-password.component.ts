import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ForgotPasswordService } from '@shared/_http/forgot-password.service';
import { FeathericonComponent } from '@shared/component/feathericon/feathericon.component';
import { responseMessages } from '@shared/constants/response-msgs.constant';
import { LoaderService } from '@shared/services/loader.service';
import { ToastService } from '@shared/services/toast.service';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [CommonModule, RouterModule, FeathericonComponent, FormsModule, ReactiveFormsModule],
  providers: [ForgotPasswordService],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {
  currentStep: 'email' | 'otp' | 'password' = 'email';
  email: string = '';
  otp: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  rememberPassword: boolean = false;
  showPassword: boolean = false;

  constructor(private authService: ForgotPasswordService, private toastService: ToastService, private router: Router,private loader:LoaderService) {}

  public show: boolean = false;

  // showPassword() {
  //   this.show = !this.show;
  // }

  sendOtp() {
    if (this.email) {
      let data = {email_id:this.email};
      this.loader.showLoader();
      this.authService.sendOtp(data).subscribe({
        next: (value) => {
          this.currentStep = 'otp';
          this.loader.hideLoader();
        }, error: (err) => {
          this.loader.hideLoader();
        }
      })
    }
  }

  verifyOtp() {
    if (this.otp) {
      let data = {email_id:this.email,otp:this.otp};
      this.loader.showLoader();
      this.authService.verifyOtp(data).subscribe({
        next: (value) => {
          this.currentStep = 'password';
          this.loader.hideLoader();
        }, error: (err) => {
          console.error('Error verifying OTP', err);
          const message = responseMessages.codes.find(item => item.code === err.error_message)?.message ?? 'Something went wrong!';
          this.toastService.open(message, 'error');
          this.loader.hideLoader();
        }
      })
    }
  }

  resendOtp() {
    this.sendOtp();
  }

  resetPassword() {
    if (this.newPassword === this.confirmPassword) {
      let data = {
        email_id:this.email,
        password:this.newPassword,
      };
      this.loader.showLoader();
      this.authService.resetPassword(data).subscribe({
        next: (value) => {
          this.loader.hideLoader();
          this.router.navigate(['/auth/login']);
        }, error: (err) => {
          console.error('Error verifying OTP', err);
          this.loader.hideLoader();
        }
      })
    } else {
      const message = responseMessages.codes.find(item => item.code == '7.0007')?.message ?? 'Something went to wrong!';
      this.toastService.open(message, 'error');
      console.error('Passwords do not match');
      this.loader.hideLoader();
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit(){}

}
