import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {

  }

  getQuery(path: string) {
    const url: string = `https://api.spotify.com/v1/${path}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBDLaylvQnoZIwrDX8a4ZJz2auVQbNL8fX8DeOIXsusJI0AiLOddEI_KxgTfTMaR-bhSxdXxUOItvKEwvNVH3r9vdqU2qZFpPgrcWeQm7CSgMefvaD1IB5h8BGg7R8G3iDnLrwz1-J_TySIldINUc4pQk8R5Gn5XCQ'
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
    return this.getQuery(`artists/${ artist_id }/top-tracks`);
  }
}
