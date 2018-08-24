import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../service/spotify.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artist: any;
  loading: boolean;
  trackTopArtist: any[];

  constructor(
    private activeRouter: ActivatedRoute,
    private spotify: SpotifyService
  ) {
    this.loading = true;
    const id_artist = this.activeRouter.params.subscribe(params => {
      this.getArtist(params['id']);
      this.getTrackTop(params['id']);
    }); 
  }

  ngOnInit() { }

  getArtist(id_artist: string) {
    this.spotify.getArtist(id_artist).subscribe(resp => {
      this.artist = resp;
      this.loading = false;
    });
  }

  getTrackTop(id_artist: string) {
    this.spotify.getTrackTop(id_artist).subscribe( resp => {
      this.trackTopArtist = resp;
    });
  }

  getUrlTrack(idTrack: string) {
    return `https://open.spotify.com/embed/track/${ idTrack }`;
  }
}
