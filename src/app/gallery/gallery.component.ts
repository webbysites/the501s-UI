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
          this.objects = data.ListBucketResult.Contents;
          console.log(this.objects);
        }
      })
    })
  }

  openLightbox(image,i) {  
    const dialogRef = this.dialog.open(LightboxComponent, {
      panelClass: 'request-modal-container',
      data: {
        image: image,
        objects: this.objects,
      },
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(res => {

    });
  }


}
