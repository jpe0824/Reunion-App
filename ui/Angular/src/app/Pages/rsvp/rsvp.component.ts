import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent implements OnInit {
  formGroup = document.getElementById('formGroup');

  constructor(
    private modalService: NgbModal
  ) {
  }

  ngOnInit(): void {
    addEventListener("submit", (event) => {
      if(event) {
        this.closeModal();
      }
    })
  }



  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
  }

  closeModal() {
    this.modalService.dismissAll();
  }

}
