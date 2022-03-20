import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

@Component({
  selector: 'blog-backend-error-messages',
  templateUrl: './BackendErrorMessages.component.html',
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input('backendErrors') backendErrorsProps!: BackendErrorsInterface | null;

  errorMessages: string[] = [];

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrorsProps!).map(
      (name: string) => {
        const messages = this.backendErrorsProps![name].join('');
        return `${name} ${messages}`;
      }
    );
  }
}
