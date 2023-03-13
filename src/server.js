import { createServer, Model } from "miragejs"


createServer({
    models: {
        coiffures: Model,
    },
    seeds(server) {
        server.create("coiffure", {
            id: "1", name: "DOKO",
            description: "",
            imageUrl: "illustrartion-01.jpg",
            hostId: "",
        })
        server.create("coiffure", {
            id: "2", name: "ATIN",
            description: "",
            imageUrl: "illustration-03.jpg",
            hostId: "123",
        })
        server.create("coiffure", {
            id: "3", name: "AYONOUDA",
            price: 100,
            description: "",
            imageUrl: "illustration-02.jpg",
            hostId: "456",
        })
        server.create("coiffure", {
            id: "4", name: "HOMEDA ",
            price: 65,
            description: "",
            imageUrl: "illustration-04.jpg",
            hostId: "789",
        });
    },
    routes() {
        this.namespace = "api"
        this.logging = false
        this.get("/coiffures", (schema, request) => {
            return schema.coiffures.all()
        })
        this.get("/coiffures/:id", (schema, request) => {
            const id = request.params.id
            return schema.coiffure.find(id)
        })
    }
});