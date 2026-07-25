//const express = require("express");
//require('dotenv').config();
//const mysql = require("mysql");
//const cors = require('cors')
import mysql from 'mysql2';
import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
//const Sequelize = require("sequelize");
import { Sequelize, Model, DataTypes } from "sequelize";



const sequelize = new Sequelize(
    'nameuser',
    'root',
   'root',
    
     {
       host: 'localhost',
       dialect: 'mysql'
     }
   );

    const Client = sequelize.define("clients", {
    id: {type :DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true},
      name: DataTypes.STRING,
      firstname: DataTypes.STRING,
      createdAt: false,
      updatedAt: false 
  
   
  },{ timestamps: true }

);
  
 const Beer = sequelize.define("beers", {
    id: {type :DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true},
      company: DataTypes.STRING,
      color: DataTypes.STRING,
      price: DataTypes.INTEGER,
      clientId: DataTypes.INTEGER,
      createdAt: false,
         updatedAt: false 

   
  },{ timestamps: true }

);


Client.hasMany(Beer, {
    foreignKey: "clientId",
    onDelete: 'CASCADE',
    hooks: true 
      });

  Beer.belongsTo(Client ,{ onDelete: 'CASCADE' });
  
 
 
 
    sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
  });
  
  
  sequelize.sync({ force: false });
  console.log("All models were synchronized successfully.");


  export default {
    Sequelize,
    Client,
    Beer
  }