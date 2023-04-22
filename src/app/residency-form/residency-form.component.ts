import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-residency-form',
  templateUrl: './residency-form.component.html',
  styleUrls: ['./residency-form.component.scss']
})
export class ResidencyFormComponent {

  fullName = new FormControl('', [Validators.required, Validators.pattern(/^[a-z0-9]+$/i)]);

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ngOnInit called | id: ' + id);
  }

  getErrorMessage() {
    if (this.fullName.hasError('required')) {
      return 'Please enter a valid name';
    }
    return '';
  }
  
}
