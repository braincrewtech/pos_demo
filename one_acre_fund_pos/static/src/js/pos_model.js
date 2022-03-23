odoo.define("one_acre_fund_pos.models", function (require) {
  "use strict";

  const models = require("point_of_sale.models");
    
   var _posmodel_super = models.PosModel.prototype;
   models.PosModel = models.PosModel.extend({
       initialize: function () {
           _posmodel_super.initialize.apply(this, arguments);
           var pricelist_model = _.find(this.models, function(model){ return model.model === 'product.pricelist'; });
           pricelist_model.fields.push('date_start', 'date_end', 'offer_pricelist');
       },
   });
  
});
