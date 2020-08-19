const connection = require('../database/connection');
module.exports = {
  async index(request, response) {
    const services = await connection('services').select('*');
    return response.json(services);
  },

  async create(request, response) {
    const {
      service_id,
      service_name,
      service_description,
      service_responsibles,
      username,
    } = request.body;
    const user_id = request.headers.authorization;
    const [id] = await connection('services').insert({
      service_id,
      service_name,
      service_description,
      service_responsibles,
      username,
    });
    return response.json({ id });
  },
  async delete(request, response) {
    const { id } = request.params;
    //   const user_id = request.headers.authorization;
    // const service = await connection('services')
    // .where('service_id', id)
    //.select('user_id')
    //.first();
    //if (service.username.user_id != user_id) {
    // return response.status(401).json({ error: 'Operation not permitted.' }); //401 codigo de erro quando o usuario nao tem autorização
    //}
    await connection('services').where('service_id', id).delete();
    return response.status(204).send();
  },

  async put(request, response) {
    const { id } = request.params;
    const {
      service_name,
      service_description,
      service_responsibles,
      username,
    } = request.body;
    try {
      const services = await connection('services')
        .where('service_id', id)
        .update({
          service_name: service_name,
          service_description: service_description,
          service_responsibles: service_responsibles,
          username: username,
        });
      return response.status(204).send();
    } catch (err) {
      console.log(err);
    } finally {
      console.log('test');
    }
  },
};
