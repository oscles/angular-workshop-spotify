import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artists: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) { }

  ngOnInit() {

  }

  search(inputUser: string) {
    this.loading = true;
    this.spotify.getArtists(inputUser).subscribe((resp: any) => {
      this.artists = resp;
      this.loading = false;
    });
  }

}
