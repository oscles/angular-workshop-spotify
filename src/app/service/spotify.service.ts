import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(path: string) {
    const url: string = `https://api.spotify.com/v1/${path}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBjcMCXauNJFwhMgfl7a52ZSKZxPgofCexKCvWI5TSx4OSeeloB015iTH3Bdn87576xtDlyPeWtrFneeO7l9eh__oJQpHFHamzSg83DBffTkrWuOpdDuizHgd1zC_EJnE6gEx8QTpltv_8Krw7kvxo9d2NJaNzaIOg'
    });
    return this.http.get(url, { headers });
  }

  getNewRelease() {
    return this.getQuery('browse/new-releases?limit=20')
      .pipe(map(data => data['albums'].items));
  }

  getArtists(artist: string) {
    return this.getQuery(`search?q=${artist}&type=artist&limit=20`)
      .pipe(map(data => data['artists'].items));
  }

  getArtist(artist_id: string) {
    return this.getQuery(`artists/${ artist_id }`);
  }

  getTrackTop(artist_id: string) {
    return this.getQuery(`artists/${ artist_id }/top-tracks?country=co`)
        .pipe(map(data => data['tracks']));
  }
}
