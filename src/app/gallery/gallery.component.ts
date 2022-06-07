import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../services/gallery.service';
import { parseString } from 'xml2js'
import { MatDialog } from '@angular/material';
import { LightboxComponent } from '../lightbox/lightbox.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  prefix: any;
  bucket: any;
  objects: any;
  jjm: any[] = [];
  jjmImage: any;
  huskin: any[] = [];
  huskinImage: any;

  lightboxImages: any[] = [];

  constructor(
    private galleryService: GalleryService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getImages();
  }

  getImages() {
    this.prefix= 'https://the501s-gallery-bucket.s3.amazonaws.com/'
    this.galleryService.getImages().toPromise().then(e => {
      this.bucket = parseString(e, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          // this.objects = data.ListBucketResult.Contents;
          // console.log(data.ListBucketResult.Contents);
          data.ListBucketResult.Contents.forEach(i => {
            if (i.Key[0].match(/jjm/gi)) {
              this.jjm.push(i);
            } else if (i.Key[0].match(/huskin/gi)) {
              this.huskin.push(i);
            }
          });
          this.jjmImage = this.jjm[3].Key[0];
          this.huskinImage = this.huskin[1].Key[0];
        }
      })
    })
  }

  openLightbox(value) {  
    // console.log(value);

    if (value === 'jjm') {
      this.lightboxImages = this.jjm;
    } else if (value === 'huskin') {
      this.lightboxImages = this.huskin;
    }
    const dialogRef = this.dialog.open(LightboxComponent, {
      panelClass: 'request-modal-container',
      data: {
        objects: this.lightboxImages,
      },
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(res => {

    });
  }
}
