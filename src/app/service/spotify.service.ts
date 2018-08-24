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
      'Authorization': 'Bearer BQArqwnb7W-DzwRJs8V5C8yU2muVA414VE_vsEa4jsoBlG9xMPTQ2m1ZnqnWbI1FR2FbpBadiS-dETPvIPnujCxgs3Tl7p5z7dorIbqYR8gKNZGXZiNbLMuGSfobahb4KIghqaIgAQ9RnWnXDurpb0LnbX1AYVabBvE'
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
