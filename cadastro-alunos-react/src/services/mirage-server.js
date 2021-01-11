import { createServer, Model } from 'miragejs';
import * as constants from './constants';
import { alunos } from '../util/constantes';

export function criarServidor({ environment = "test" } = {}) {
  console.log("Mirage-server.js")
  const server = createServer({
    environment,

    models: {
      aluno: Model,
    },

    seeds(server) {
      alunos.forEach(aluno => server.create("aluno", aluno));
    },

    routes() {
      this.namespace = constants.DEVINHOUSE_API;

      this.get("/alunos", schema => {
        console.log(this.namespace)
        return schema.alunos.all().models
      });


      this.post("/alunos", (schema, request) => {

        console.log("TESTE DE POST")
        console.log(schema)
        const attrs = JSON.parse(request.requestBody);

        return schema.alunos.create(attrs);
      });

      this.put("/alunos", (schema, request) => {

        console.log("TESTE DE PUT")
        console.log(schema)
        const attrs = JSON.parse(request.requestBody)

        return schema.alunos.create(attrs);
      });

      this.delete("/alunos/:id", (schema, request) => {
        const id = request.params.id;

        return schema.alunos.find(id).destroy();
      });
    },
  });

  return server;
}