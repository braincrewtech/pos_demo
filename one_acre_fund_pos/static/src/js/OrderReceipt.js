odoo.define('one_acre_fund_pos.OrderReceipt', function(require) {
    'use strict';

    const OrderReceipt = require('point_of_sale.OrderReceipt');
    const Registries = require('point_of_sale.Registries');

    const one_acre_fund_posOrderReceipt = OrderReceipt =>
        class extends OrderReceipt {
            get receiptEnv () {
            	let receipt_render_env = super.receiptEnv;
                if (receipt_render_env.order.pricelist.offer_pricelist) {
                	var template_ids = [];
                	var pricelist = receipt_render_env.order.pricelist
                	var currentDate = new Date();
                    for (var i = 0; i < pricelist.items.length; i++){
                        if (pricelist.items[i].product_tmpl_id){
                        	if (pricelist.items[i].date_start && pricelist.items[i].date_end){
                                var StartdateToCompare = new Date(Date.parse(pricelist.items[i].date_start));
                                var EnddateToCompare = new Date(Date.parse(pricelist.items[i].date_end));
                                if (StartdateToCompare <= currentDate.getTime() <= EnddateToCompare.getTime()){
                                	template_ids.push(pricelist.items[i].product_tmpl_id[0]);
                                }
                        	}
                        }
                    }
                	// Checking the order products exist in the offer pricelist or not
                	var orderlines = receipt_render_env.order.orderlines
                	if (template_ids.length > 0) {
                		var p = orderlines._byId
                		for (var key in p) {
                		    if (p.hasOwnProperty(key)) {
                		        if (template_ids.includes(p[key].product.product_tmpl_id)){
                                	receipt_render_env.receipt.offer_pricelist_name = receipt_render_env.order.pricelist.name;
                                }
                		    }
                		}
                    }
                    
                    return receipt_render_env;
                }
                return receipt_render_env;
            }
        

        };

    Registries.Component.extend(OrderReceipt, one_acre_fund_posOrderReceipt);

    return one_acre_fund_posOrderReceipt;
});
