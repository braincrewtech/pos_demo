odoo.define('one_acre_fund_pos.ProductScreen', function (require) {
    'use strict';

    const ProductScreen = require('point_of_sale.ProductScreen');
    const Registries = require('point_of_sale.Registries');
    const NumberBuffer = require('point_of_sale.NumberBuffer');
    
   
    const pos_customizationProductScreen = (ProductScreen) =>
        class extends ProductScreen {
        	async _clickProduct(event) {
                await super._clickProduct(...arguments)
            }
        };

    Registries.Component.extend(ProductScreen, pos_customizationProductScreen);

    return ProductScreen;
});
