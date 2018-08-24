# Spotify

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.4.

## Development server



Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Requirements
- Create an account in the spotify API https://developer.spotify.com/dashboard/login

- Edit the file that is on the route /app/service/spotify.service.tc, you will find this function

```javascript
  getQuery(param: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBjcMCXauNJFwhMgfl7a52ZSKZxPgofCexKCvWI5TSx4OSeeloB015iTH3Bdn87576xtDlyPeWtrFneeO7l9eh__oJQpHFHamzSg83DBffTkrWuOpdDuizHgd1zC_EJnE6gEx8QTpltv_8Krw7kvxo9d2NJaNzaIOg'
    });
    xxxxxxxxxxxxx
  }
```

- In the Authorization part add the token obtained from the API, the format of the token is the following:

```
Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```


