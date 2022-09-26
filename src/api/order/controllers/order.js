'use strict';

/**
 * order controller
 *
 * @description: A set of functions called "actions" for managing `Order`.
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order');
/* 
const stripe = require("stripe")("YOUR STRIPE SECRET KEY");

module.exports = {

    create: async (ctx) => {
    const { address, amount, token, city } = JSON.parse(
        ctx.request.body
    );

    // Register the order in the database
    const order = await strapi.services.order.create({
        user: ctx.state.user.id,
        charge_id: charge.id,
        amount: stripeAmount,
        address,
        dishes,
        city,
        state,
    });

    return order;
    },
}; */