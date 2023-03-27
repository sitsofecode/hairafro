import { createServer, Model } from "miragejs"


createServer({
    models: {
        coiffures: Model,
    },
    seeds(server) {
        server.create("coiffure", {
            id: 1, name: "DOKO",
            description: "",
            imageUrl: "/illustratration-01.jpg",
            price: "gratuit",
            Cathegorie: "doko",
            height: "16"
        })
        server.create("coiffure", {
            id: "2", name: "AYONOUDA",
            description: "",
            price: "gratuit",
            imageUrl: "/illustratration-03.jpg",
            Cathegorie: "ayonou",
        })
        server.create("coiffure", {
            id: "3", name: "ATIN",
            description: "",
            price: "gratuit",
            imageUrl: "/illustratration-02.jpg",
            Cathegorie: "atin",
        })
        server.create("coiffure", {
            id: "4", name: "HOMEDA ",
            description: "",
            price: "gratuit",
            imageUrl: "/illustratration-04.jpg",
            Cathegorie: "homoeda",
        });
        server.create("coiffure", {
            id: "5", name: "HOMEDA ",
            description: "",
            price: "gratuit",
            imageUrl: "/debora illustration site-02.png",
            Cathegorie: "homeda",
        });
        server.create("coiffure", {
            id: "6", name: "ZEMIDJAN",
            description: "",
            price: "gratuit",
            imageUrl: "/debora illustration site-03.png",
            Cathegorie: "zem",
        });
        server.create("coiffure", {
            id: "7", name: "TENU ZEMIDJAN",
            description: "",
            price: "gratuit",
            imageUrl: "/debora illustration site-04.png",
            Cathegorie: "zem",
        });
        server.create("coiffure", {
            id: "8", name: "AKOUETE",
            description: "",
            price: "gratuit",
            imageUrl: "/debora illustration site-05.png",
            Cathegorie: "akoute",
        });
        server.create("coiffure", {
            id: "9", name: "NOM",
            description: "",
            price: "gratuit",
            imageUrl: "/debora illustration site-07.png",
            Cathegorie: "inconnu",
        });
        server.create("coiffure", {
            id: "10", name: "NOM",
            description: "",
            price: "gratuit",
            imageUrl: "/debora illustration site-08.png",
            Cathegorie: "inconnu",
        });
        server.create("coiffure", {
            id: "11", name: "NOM",
            description: "",
            price: "gratuit",
            imageUrl: "/debora illustration site-09.png",
            Cathegorie: "inconnue",
        });
        server.create("coiffure", {
            id: "12", name: "ATIN",
            description: "",
            price: "gratuit",
            imageUrl: "/debora illustration site-10.png",
            Cathegorie: "atin",
        });
        server.create("coiffure", {
            id: "13", name: "AYONOUDA ",
            description: "",
            price: "gratuit",
            imageUrl: "/ilustration memory-02.png",
            Cathegorie: "ayonou",
        });
        server.create("coiffure", {
            id: "14", name: "HOMEDA ",
            description: "",
            price: "gratuit",
            imageUrl: "/ilustration memory-03.png",
            Cathegorie: "homeda",
        });
        server.create("coiffure", {
            id: "15", name: "HOMEDA",
            description: "",
            price: "gratuit",
            imageUrl: "/ilustration memory-04.png",
            Cathegorie: "doko789",
        }); server.create("coiffure", {
            id: "16", name: "Nom",
            description: "",
            price: "gratuit",
            imageUrl: "/ilustration memory-05.png",
            Cathegorie: "inconnue",
        });
        server.create("coiffure", {
            id: "17", name: "DOKO ",
            description: "",
            price: "gratuit",
            imageUrl: "/ilustration memory-06.png",
            Cathegorie: "doko",
        });
        server.create("coiffure", {
            id: "18", name: "ATIN",
            description: "",
            price: "gratuit",
            imageUrl: "/ilustration memory-07.png",
            Cathegorie: "atin",
        });
        server.create("coiffure", {
            id: "19", name: "AYONOUDA ",
            description: "",
            price: "gratuit",
            imageUrl: "/ilustration memory-08.png",
            Cathegorie: "ayonou",
        });
        server.create("coiffure", {
            id: "20", name: "HOMEDA ",
            description: "",
            price: "gratuit",
            imageUrl: "/ilustration memory-09.png",
            Cathegorie: "homeda",
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
            return schema.coiffures.find(id)
        })
    }
});