import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.css']
})
export class LightboxComponent implements OnInit {

  link: any;
  split: any;
  s: any;

  bucket: any;

  arrayLength = this.data.objects.length;
  prev: any;
  next: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    // console.log(this.data);
    this.link = 'https://the501s-gallery-bucket.s3.amazonaws.com/' + this.data.objects[0].Key[0];
  }

  nextLightbox(data) {
    this.split = data.split('/');
    this.split.forEach(element => {
      this.data.objects.forEach((key, i) => {
          if (element == key.Key) {
            console.log(i);
            // console.log(this.arrayLength);
            if (i + 2 > this.arrayLength) {
              this.next = this.data.objects[0]
              this.link = "https://the501s-gallery-bucket.s3.amazonaws.com/" + this.next.Key[0];
              this.s = this.next.Key[0].split('-').join(' ').replace('.jpg', '')
            } else {
              this.next = this.data.objects[i + 1]
              this.link = "https://the501s-gallery-bucket.s3.amazonaws.com/" + this.next.Key[0]
              this.s = this.next.Key[0].split('-').join(' ').replace('.jpg', '')
            }
          } 
        });
    });
  }

  prevLightbox(data) {
    console.log(data);
    this.split = data.split('/');
    this.split.forEach(element => {
      this.data.objects.forEach((key, i) => {
        if (element == key.Key) {
          if (i - 1 < 0 ) {
            this.next = this.data.objects[this.arrayLength - 1]
            this.link = "https://the501s-gallery-bucket.s3.amazonaws.com/" + this.next.Key[0];
            this.s = this.next.Key[0].split('-').join(' ').replace('.jpg', '')
          } else {
            this.prev = this.data.objects[i - 1]
            this.link = "https://the501s-gallery-bucket.s3.amazonaws.com/" + this.prev.Key[0];
            this.s = this.prev.Key[0].split('-').join(' ').replace('.jpg', '')
          }
        }
        
      });
    });
  }


}
