
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-patient-registration',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './patient.html',
  styleUrls: ['./patient.scss']
})
export class PatientComponent {

  patient = {
    name: '',
    age: '',
    gender: '',
    phone: '',
    address:'',
    bloodgroup:'',
  
    disease: '',
  }
    doctors = [
{ name: 'Dr. Sujatha', specialization: 'Cardiologist' },
{ name: 'Dr. Suresh', specialization: 'Dermatologist' },
{ name: 'Dr. Anitha', specialization: 'Neurologist' },
{ name: 'Dr. Kavitha', specialization: 'Orthopedic' }
];

selectedDoctor = '';
specialization = '';

onDoctorChange(){
const doctor = this.doctors.find(d => d.name === this.selectedDoctor);
this.specialization = doctor ? doctor.specialization : '';
}
}
export class Patient {

}

