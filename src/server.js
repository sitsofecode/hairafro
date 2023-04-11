import { createServer, Model } from "miragejs"


createServer({
    models: {
        coiffures: Model,
    },
    seeds(server) {
        server.create("coiffure", {
            id: 1, name: "DOKO",
            description: "Doko appelé petits choux, de la famille des Bantu Knots est une coiffure africaine souvent faite aux enfants pour protéger leur tête. Ils se font avec les chouchous, cordes ou des élastiques",
            imageUrl: "/doko-02.png",
            price: "gratuit",
            Cathegorie: "doko",
            type: "photo"
        })

        server.create("coiffure", {
            id: "2", name: "AYONOUDA",
            description: "Ayonouda de la famille des cornrows appelée en français nattes collées, l'aspect des cheveux à trois brins, directement sur le cuir chevelu.",
            price: "gratuit",
            imageUrl: "/Ayonduda-02.png",
            Cathegorie: "ayonou",
            type: "photo"
        })
        server.create("coiffure", {
            id: "3", name: "ATIN",
            description: " Les tresses au fil (ATIN) encore appelées Eko , Bridge, Akule , Sungasont une technique de coiffage adoptée depuis des siècles par les femmes noires, elles représentent les cheveux enroulés d'un fil de couture ou de nylon.L'utilisation des fils pour tresser les cheveux est courante chez les Yoruba du sud Ouest du Nigeria au Benin.Utilisé pour l'assouplissement des cheveux, il sert aussi d'isolant pour l'eau et les protège contre la casse.",
            price: "gratuit",
            imageUrl: "/Atin-02.png",
            Cathegorie: "atin",
            type: "photo"
        })
        server.create("coiffure", {
            id: "4", name: "HOMEDA ",
            description: "",
            price: "gratuit",
            imageUrl: "/Homeda-02.png",
            Cathegorie: "homoeda",
            type: "photo"
        });
        server.create("coiffure", {
            id: "5", name: "HOMEDA ",
            description: "Cornrows appelée Homeda en Fongbé sont  des tresses qui sont à plat contre le cuir chevelu et favorise la poussée des cheveux . Elles peuvent représenter la beauté et l'identité culturelle. En français, elles qui signifient à 'l'intérieur'  qui décrit son aspect.",
            price: "gratuit",
            imageUrl: "/Homeda-01.png",
            Cathegorie: "homeda",
            type: "photo"
        });
        server.create("coiffure", {
            id: "6", name: "ATIN",
            description: "Les tresses au fil (ATIN) encore appelées Eko , Bridge, Akule , Sungasont une technique de coiffage adoptée depuis des siècles par les femmes noires, elles représentent les cheveux enroulés d'un fil de couture ou de nylon.L'utilisation des fils pour tresser les cheveux est courante chez les Yoruba du sud Ouest du Nigeria au Benin.Utilisé pour l'assouplissement des cheveux, il sert aussi d'isolant pour l'eau et les protège contre la casse.",
            price: "gratuit",
            imageUrl: "/Atin-01.png",
            Cathegorie: "atin",
            type: "photo"
        });
        server.create("coiffure", {
            id: "7", name: "TABOURET",
            description: "",
            price: "gratuit",
            imageUrl: "/tabouret.png",
            Cathegorie: "zem",
            type: "photo"
        });
        server.create("coiffure", {
            id: "8", name: "AKOUETE",
            description: "Akouete en français, nœuds bantous : Les nœuds bantous sont de petits nœuds enroulés souvent portés par les femmes au Bénin. Ces nœuds représentent l'unité et la communauté.",
            price: "gratuit",
            imageUrl: "/Akouete-04.png",
            Cathegorie: "akoute",
            type: "photo"
        });
        server.create("coiffure", {
            id: "9", name: "DOKO",
            description: "Doko appelé petits choux, de la famille des Bantu Knots est une coiffure africaine souvent faite aux enfants pour protéger leur tête. Ils se font avec les chouchous, cordes ou des élastiques",
            price: "gratuit",
            imageUrl: "/doko-03.png",
            Cathegorie: "doko",
            type: "photo"
        });

        server.create("coiffure", {
            id: "10", name: "HOMEDA",
            description: 'Cornrows appelée Homeda en Fongbé sont  des tresses qui sont à plat contre le cuir chevelu et favorise la poussée des cheveux . Elles peuvent représenter la beauté et l\'identité culturelle. En français, elles qui signifient à "l\'intérieur"  qui décrit son aspect.',
            price: "gratuit",
            imageUrl: "/Homeda-03.png",
            Cathegorie: "homeda",
            type: "photo"
        });
        server.create("coiffure", {
            id: "11", name: "ZEMIDJAN",
            description: "",
            price: "gratuit",
            imageUrl: "/zem.png",
            Cathegorie: "zem",
            type: "photo"
        });
        server.create("coiffure", {
            id: "12", name: "FULANI",
            description: "Fulani appelé Tresses peules. Ces tresses sont généralement réalisées en zigzag et sont décorées de perles et de cauris. Au Bénin, les tresses peules sont considérées comme un symbole de beauté et de féminité.",
            price: "gratuit",
            imageUrl: "/fulani-03.png",
            Cathegorie: "fulani",
            type: "photo"
        });
        // server.create("coiffure", {
        //     id: "13", name: "AYONOUDA",
        //     description: "Ayonouda de la famille des cornrows appelée en français nattes collées, l'aspect des cheveux à trois brins, directement sur le cuir chevelu.",
        //     price: "gratuit",
        //     imageUrl: "/Ayonouda-06.png",
        //     Cathegorie: "ayonouda",
        //     type: "photo"
        // });

        server.create("coiffure", {
            id: "14", name: "PARASOL",
            description: "",
            price: "gratuit",
            imageUrl: "/parasol.png",
            Cathegorie: "objet",
            type: "vecteur"
        });
        // server.create("coiffure", {
        //     id: "15", name: "AYONOUDA ",
        //     description: "Ayonouda de la famille des cornrows appelée en français nattes collées, l'aspect des cheveux à trois brins, directement sur le cuir chevelu.",
        //     price: "gratuit",
        //     imageUrl: "/Ayonouda-05.png",
        //     Cathegorie: "ayonou",
        //     type: "photo"
        // });
        server.create("coiffure", {
            id: "16", name: "Sceau",
            description: "",
            price: "gratuit",
            imageUrl: "/sceau.png",
            Cathegorie: "objet",
            type: "vecteur"
        });
        // server.create("coiffure", {
        //     id: "17", name: "ATIN",
        //     description: "Les tresses au fil (ATIN) encore appelées Eko , Bridge, Akule , Sungasont une technique de coiffage adoptée depuis des siècles par les femmes noires, elles représentent les cheveux enroulés d'un fil de couture ou de nylon.L'utilisation des fils pour tresser les cheveux est courante chez les Yoruba du sud Ouest du Nigeria au Benin.Utilisé pour l'assouplissement des cheveux, il sert aussi d'isolant pour l'eau et les protège contre la casse.",
        //     price: "gratuit",
        //     imageUrl: "/atin-06.png",
        //     Cathegorie: "atin",
        //     type: "photo"
        // });
        server.create("coiffure", {
            id: "18", name: "Pain",
            description: "",
            price: "gratuit",
            imageUrl: "/Eléments pour la partie vecteurs_Plan de travail 1-03.png",
            Cathegorie: "foods",
            type: "vecteur"
        });
        server.create("coiffure", {
            id: "19", name: "Atin",
            description: "Les tresses au fil (ATIN) encore appelées Eko , Bridge, Akule , Sungasont une technique de coiffage adoptée depuis des siècles par les femmes noires, elles représentent les cheveux enroulés d'un fil de couture ou de nylon.L'utilisation des fils pour tresser les cheveux est courante chez les Yoruba du sud Ouest du Nigeria au Benin.Utilisé pour l'assouplissement des cheveux, il sert aussi d'isolant pour l'eau et les protège contre la casse.",
            price: "gratuit",
            imageUrl: "/atin.png",
            Cathegorie: "atin",
            type: "photo"
        });
        server.create("coiffure", {
            id: "20", name: "CARTE DU BENIN",
            description: "",
            price: "gratuit",
            imageUrl: "/carteBenin.png",
            Cathegorie: "lieu",
            type: "vecteur"
        });
        server.create("coiffure", {
            id: "21", name: "ETOILE ROUGE",
            description: "",
            price: "gratuit",
            imageUrl: "/etoileRouge.png",
            Cathegorie: "lieu",
            type: "vecteur"
        });
        server.create("coiffure", {
            id: "22", name: "TATASOMBA",
            description: "",
            price: "gratuit",
            imageUrl: "/tataSomba.png",
            Cathegorie: "lieu",
            type: "vecteur"
        });
        server.create("coiffure", {
            id: "23", name: "PORTE DU RETOUR",
            description: "",
            price: "gratuit",
            imageUrl: "/porteNonRetour.png",
            Cathegorie: "lieu",
            type: "vecteur"
        });
        // server.create("coiffure", {
        //     id: "24", name: "HOMEDA",
        //     description: "Cornrows appelée Homeda en Fongbé sont  des tresses qui sont à plat contre le cuir chevelu et favorise la poussée des cheveux . Elles peuvent représenter la beauté et l'identité culturelle. En français, elles qui signifient à 'l'intérieur'  qui décrit son aspect.",
        //     price: "gratuit",
        //     imageUrl: "/homeda-05.png",
        //     Cathegorie: "homeda",
        //     type: "photo"
        // });
        server.create("coiffure", {
            id: "25", name: "TOISSON FRONTO-OCCIPICALE",
            description: "",
            price: "gratuit",
            imageUrl: "/cheveux-08.png",
            Cathegorie: "cheveux",
            type: "photo"
        });
        server.create("coiffure", {
            id: "26", name: "OUIDAH",
            description: "",
            price: "gratuit",
            imageUrl: "/ouidah.png",
            Cathegorie: "lieu",
            type: "vecteur"
        });
        server.create("coiffure", {
            id: "27", name: "BORD DE LA VOIE",
            description: "",
            price: "gratuit",
            imageUrl: "/Eléments pour la partie vecteurs_Plan de travail 1-08.png",
            Cathegorie: "lieu",
            type: "vecteur"
        });
        server.create("coiffure", {
            id: "28", name: "RUELLE",
            description: "",
            price: "gratuit",
            imageUrl: "/Eléments pour la partie vecteurs_Plan de travail 1-18.png",
            Cathegorie: "lieu",
            type: "vecteur"
        });
        server.create("coiffure", {
            id: "29", name: "HOMEDA",
            description: "Cornrows appelée Homeda en Fongbé sont  des tresses qui sont à plat contre le cuir chevelu et favorise la poussée des cheveux . Elles peuvent représenter la beauté et l'identité culturelle. En français, elles qui signifient à \"l'intérieur\"  qui décrit son aspect.",
            price: "gratuit",
            imageUrl: "/Homeda-01.png",
            Cathegorie: "homeda",
            type: "photo"
        });
        server.create("coiffure", {
            id: "30", name: "Marmite",
            description: "",
            price: "gratuit",
            imageUrl: "/Eléments pour la partie vecteurs_Plan de travail 1-10.png",
            Cathegorie: "objet",
            type: "vecteur"
        });
        server.create("coiffure", {
            id: "31", name: "CASSEROLE",
            description: "",
            price: "gratuit",
            imageUrl: "/Eléments pour la partie vecteurs_Plan de travail 1-11.png",
            Cathegorie: "objet",
            type: "vecteur"
        });
        server.create("coiffure", {
            id: "32", name: "BIBLIOTHEQUE",
            description: "",
            price: "gratuit",
            imageUrl: "/Eléments pour la partie vecteurs_Plan de travail 1-12.png",
            Cathegorie: "lieu",
            type: "vecteur"
        });
        server.create("coiffure", {
            id: "33", name: "AKOUETE",
            description: "Akouete en français, nœuds bantous : Les nœuds bantous sont de petits nœuds enroulés souvent portés par les femmes au Bénin. Ces nœuds représentent l'unité et la communauté.",
            price: "gratuit",
            imageUrl: "/Akouete-02.png",
            Cathegorie: "akouete",
            type: "photo"
        });
        server.create("coiffure", {
            id: "34", name: "BORD DE LA VOIE",
            description: "",
            price: "gratuit",
            imageUrl: "/Eléments pour la partie vecteurs_Plan de travail 1-14.png",
            Cathegorie: "lieu",
            type: "vecteur"
        });
        server.create("coiffure", {
            id: "35", name: "AKOUETE",
            description: "Akouete en français, nœuds bantous : Les nœuds bantous sont de petits nœuds enroulés souvent portés par les femmes au Bénin. Ces nœuds représentent l'unité et la communauté.",
            price: "gratuit",
            imageUrl: "/Akouete-04.png",
            Cathegorie: "akouete",
            type: "photo"
        });
        server.create("coiffure", {
            id: "36", name: "AYONOUDA",
            description: "Ayonouda de la famille des cornrows appelée en français nattes collées, l'aspect des cheveux à trois brins, directement sur le cuir chevelu.",
            price: "gratuit",
            imageUrl: "/Ayonduda-01.png",
            Cathegorie: "ayonouda",
            type: "photo"
        });
        server.create("coiffure", {
            id: "37", name: "Eglise",
            description: "",
            price: "gratuit",
            imageUrl: "/Eléments pour la partie vecteurs_Plan de travail 1-17.png",
            Cathegorie: "lieu",
            type: "vecteur"
        });
        server.create("coiffure", {
            id: "38", name: "FULANI",
            description: "Fulani appelé Tresses peules. Ces tresses sont généralement réalisées en zigzag et sont décorées de perles et de cauris. Au Bénin, les tresses peules sont considérées comme un symbole de beauté et de féminité.",
            price: "gratuit",
            imageUrl: "/fulani-02.png",
            Cathegorie: "fulani",
            type: "photo"
        });
        server.create("coiffure", {
            id: "39", name: "COLIS D'UNE VENDEUSE",
            description: "",
            price: "gratuit",
            imageUrl: "/Eléments pour la partie vecteurs_Plan de travail 1-02.png",
            Cathegorie: "inconnu",
            type: "vecteur"
        });
        server.create("coiffure", {
            id: "40", name: "POUBEL",
            description: "",
            price: "gratuit",
            imageUrl: "/poubel.png",
            Cathegorie: "inconnu",
            type: "vecteur"
        });
        server.create("coiffure", {
            id: "41", name: "DOKO",
            description: "Doko appelé petits choux, de la famille des Bantu Knots est une coiffure africaine souvent faite aux enfants pour protéger leur tête. Ils se font avec les chouchous, cordes ou des élastiques",
            price: "gratuit",
            imageUrl: "/Doko.png",
            Cathegorie: "doko",
            type: "photo"
        });
        server.create("coiffure", {
            id: "42", name: "DOKO",
            description: "Doko appelé petits choux, de la famille des Bantu Knots est une coiffure africaine souvent faite aux enfants pour protéger leur tête. Ils se font avec les chouchous, cordes ou des élastiques",
            price: "gratuit",
            imageUrl: "/doko-01.png",
            Cathegorie: "doko",
            type: "photo"
        });
        server.create("coiffure", {
            id: "43", name: "STATUT ",
            description: "",
            price: "gratuit",
            imageUrl: "/statut.png",
            Cathegorie: "lieu",
            type: "vecteur"
        });
        server.create("coiffure", {
            id: "44", name: "TABOURET",
            description: "",
            price: "gratuit",
            imageUrl: "/tabouret.png",
            Cathegorie: "objet",
            type: "vecteur"
        });
        // server.create("coiffure", {
        //     id: "40", name: "NOM",
        //     description: "",
        //     price: "gratuit",
        //     imageUrl: "/7074358.ai",
        //     Cathegorie: "inconnu",
        //     type: "vecteur"
        // });
    },
    routes() {
        this.namespace = "api"
        // this.logging = false
        this.get("/coiffures", (schema, request) => {
            return schema.coiffures.all()
        })

        this.get("/coiffures/:id", (schema, request) => {
            const id = request.params.id
            return schema.coiffures.find(id)
        })

        this.get("/coiffures/cathegorie/:cat", (schema, request) => {
            let cat = request.params.cat
            // Hard-code the hostId for now
            return schema.coiffures.where({ Cathegorie: cat })
        })
    }
});