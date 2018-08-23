import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input() items: any[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  infoArtist (item: any) {
    if (item.type === 'artist')
      this.router.navigate(['artist', item.id]);
    else
      this.router.navigate(['artist',item.artists[0].id]);
  }

}
