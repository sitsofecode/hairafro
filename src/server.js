import { createServer, Model } from "miragejs"


createServer({
    models: {
        coiffures: Model,
    },
    seeds(server) {
        server.create("coiffure", {
            id: "1", name: "DOKO",
            description: "",
            imageUrl: "illustratration-01.jpg",
            price : "gratuit",
            hostId: "",
        })
        server.create("coiffure", {
            id: "2", name: "ATIN",
            description: "",
            price : "gratuit",
            imageUrl: "illustratration-03.jpg",
            hostId: "123",
        })
        server.create("coiffure", {
            id: "3", name: "AYONOUDA",
            price: 100,
            description: "",
            price : "gratuit",
            imageUrl: "illustratration-02.jpg",
            hostId: "456",
        })
        server.create("coiffure", {
            id: "4", name: "HOMEDA ",
            description: "",
            price : "gratuit",
            imageUrl: "illustratration-04.jpg",
            hostId: "789",
        });
        server.create("coiffure", {
            id: "5", name: "HOMEDA ",
            description: "",
            price : "gratuit",
            imageUrl: "debora illustration site-02.png",
            hostId: "789",
        });
        server.create("coiffure", {
            id: "6", name: "HOMEDA ",
            description: "",
            price : "gratuit",
            imageUrl: "debora illustration site-03.png",
            hostId: "789",
        });
        server.create("coiffure", {
            id: "7", name: "HOMEDA ",
            description: "",
            price : "gratuit",
            imageUrl: "debora illustration site-04.png",
            hostId: "789",
        });
        server.create("coiffure", {
            id: "8", name: "HOMEDA ",
            description: "",
            price : "gratuit",
            imageUrl: "debora illustration site-05.png",
            hostId: "789",
        });
        server.create("coiffure", {
            id: "9", name: "HOMEDA ",
            description: "",
            price : "gratuit",
            imageUrl: "debora illustration site-07.png",
            hostId: "789",
        });
        server.create("coiffure", {
            id: "10", name: "HOMEDA ",
            description: "",
            price : "gratuit",
            imageUrl: "debora illustration site-08.png",
            hostId: "789",
        }); 
        server.create("coiffure", {
            id: "11", name: "HOMEDA ",
            description: "",
            price : "gratuit",
            imageUrl: "debora illustration site-09.png",
            hostId: "789",
        });
        server.create("coiffure", {
            id: "12", name: "HOMEDA ",
            description: "",
            price : "gratuit",
            imageUrl: "debora illustration site-10.png",
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