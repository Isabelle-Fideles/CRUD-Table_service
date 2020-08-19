const connection = require('../database/connection');
const { index } = require('./ServiceController');
module.exports = {
  async index(request, response) {
    const { id } = request.params;
    const services = await connection('services')
      .where('service_id', id)
      .select('*');
    return response.json(services);
  },
};
