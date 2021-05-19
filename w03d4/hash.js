const bcrypt = require('bcrypt');

const plaintextPassword = 'abcd';


// bcrypt.genSalt(10, function(err, salt) {
//   bcrypt.hash(plaintextPassword, salt, function(err, hash) {
//     console.log('hash:',hash);
//   });
// });

bcrypt.genSalt(10)
  .then((salt) => {
    console.log('salt:', salt);
    return bcrypt.hash(plaintextPassword, salt);
  })
  .then((hash) => {
    console.log('hash:', hash);
  });

// const hash = '$2b$10$7bOWn.DFgs9HkhzsTpuD1u6pReqRouddq.rO5xSKdWMZGXRehkS8e';
const hash = '$2b$10$3veVuGZyKTBH.hIXsPFv1.3MEbV/zIZI0QzVaJ/UYML5lsgTwP6Y2';

bcrypt.compare('abcd!', hash)
  .then((result) => {
    console.log('do the passwords match?:', result);
  });

