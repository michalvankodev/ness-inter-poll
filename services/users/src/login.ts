import { sign } from 'jsonwebtoken'

export default async function login(req, res) {
  sign(
    { 
      sub: req.user.id,
      data: req.user,
    },
    'TODO ALE ZE VELMI VELKE TODO',
    { 
      expiresIn: '10d',
      issuer: 'ness-inter-poll',
    },
    function(err, token) {
      if (err) {
        res.status(400).json({
          message: 'Invalid token',
          error: err.toString(),
        })
      }
      
      res.status(200).json({
        message: 'Successfully authenticated',
        user: req.user, // TODO: dont display user password
        token,
        // info
      })
    }
  );
}
