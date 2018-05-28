export default function verify (req, res) {
  res.status(200).json({
    message: 'You are authenticated!',
    data: {
      user: req.user, // dont display user information
    }
  })
}
