export default function (req, res, next) {
    console.log('Carga url')
    console.log(req.url)
    next()
  }