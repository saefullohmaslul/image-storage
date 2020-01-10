import multer from 'multer'
import path from 'path'

const upload = (userId, params) => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const folder = path.join(__dirname, '..', '..', 'public', `${params}`)
      cb(null, folder)
    },
    filename: (req, file, cb) => {
      const originalName = file.originalname.toString().split('.')
      const type = originalName[originalName.length - 1]
      cb(null, `${Date.now()}-${userId}.${type}`)
    }
  })

  if (typeof params === 'string') return multer({ storage }).single(params)
  else if (Array.isArray(params)) {
    const fields = []
    params.map(param => {
      const input = {
        name: param
      }
      fields.push(input)
    })
    return multer({ storage }).fields(fields)
  }
}

export default upload