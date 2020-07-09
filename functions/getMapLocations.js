const { google } = require('googleapis');
const { promisify } = require('util');

module.exports = (req, res) => {
  google.auth.getClient({
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  }).then(auth => {
    const api = google.sheets({ version: 'v4', auth });
    const getSheets = promisify(api.spreadsheets.values.get.bind(api.spreadsheets));
    return getSheets({ spreadsheetId: '1ZJVhAs6r2fUvA9c_2MLQn4gOMMymPRvW1Vp6HM6JB94', range: 'A:D' });
  })
    .then(data => {
      res.send(data.data.values.slice(1))
      return
    })
    .catch(err => {
      res.status(500).send({ err });
    })
};