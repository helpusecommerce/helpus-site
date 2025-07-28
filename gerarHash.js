const bcrypt = require('bcryptjs');

bcrypt.hash('@dmLocal1993', 10).then(hash => {
  console.log('Hash gerado:', hash);
});
