const ResourceModel = require('./schema')

// function to get Resource
module.exports.getResource = async (resourceId) => {
  return ResourceModel.findOne({ _id: resourceId })
}

// function to save the entire Resource
module.exports.setResource = async (resource) => {
  const doc = new ResourceModel(resource)
  console.log(doc)
  await doc.save((err) => {
    if (err) {
      console.log('ERROR: Could not save resource.')
      return null
    };
    return resource
  })
}
