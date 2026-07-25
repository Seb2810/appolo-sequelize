//import { sequelize } from  "./../mymodels/mymodel.js";
//import db from "./../mymodels/mydb.js";
import Sequelize from "./../mymodels/mymodel.js";
import Beer from "./../mymodels/mymodel.js";
import Client  from "./../mymodels/mymodel.js";
/*
const Beer = require('./../mymodels/mymodel')
const Client = require('./../mymodels/mymodel')
*/
export const resolvers = {
  Client: {
    beers: (parent, args, context, info) => parent.getBeers(),
      //return Sequelize.Beer.findAll({ where: { clientId : Sequelize.Client.id } });
   
    },

    Query: {
      clients: () => Sequelize.Client.findAll(),
      beers: () => Sequelize.Beer.findAll(),
      client: (parent ,{ id })=>Sequelize.Client.findByPk(id),
    },
    Mutation:{
      createClient :async (parent , {name, firstname})=> {
      const createone = await Sequelize.Client.create({ name , firstname});
      console.log("createone:", createone);
    },
    createBeer : async (parent , {company, color, price, clientId})=> {
    const createtwo =await Sequelize.Beer.create({ company, color, price, clientId});
    console.log("createtwo:", createtwo);
  },

  addClient: async (parent , {name, firstname ,company, color, price})=> {
    const createthree =await Sequelize.Client.create(
      {
        name,
        firstname,
        beers: {
          // you can specify the attributes of the associated model you want to create
          company, color, price
        },
      },
      {
        // you must specify which associated models must be created here
        include: [Sequelize.Beer],
      },
    )


   // const createfour =await Sequelize.Beer.create({ company, color, price, clientId});
 console.log("createthree:", createthree);
 //console.log("createthree:", createthree.clients.dataValues.beers);

  },

  updateClient :async (parent , {id,name, firstname})=> {
   const updatedata = await Sequelize.Client.update(
      { name , firstname },
      {
        where: {
          id: id,
        },
      },
    );
    console.log('updatedata ==> ',updatedata);
  },

  destroyClient:async (parent , {id,name, firstname})=>{

    const destroyedclt = await Sequelize.Client.destroy(
      { where: { id } },
      {
        // you must specify which associated models must be created here
        include: [Sequelize.Beer],
      },
    )

    console.log('destroyedclt ==> ',destroyedclt);
  }

}

};