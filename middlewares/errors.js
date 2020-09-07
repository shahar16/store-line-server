module.exports = (err, req, res) => {
  let message = err.message || 'Server Error'
  let statusCode = err.statusCode || 500
  console.log(message)
  return res.status(statusCode).json({ message: message })
}
