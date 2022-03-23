# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

from odoo import api, fields, models, tools, _
from odoo.exceptions import UserError, ValidationError
from odoo.tools import float_repr, format_datetime


class ProductPricelist(models.Model):
    _inherit = 'product.pricelist'

    date_start = fields.Datetime('Start Date', help="Starting datetime for the pricelist item validation\n"
                                                "The displayed value depends on the timezone set in your preferences.")
    date_end = fields.Datetime('End Date', help="Ending datetime for the pricelist item validation\n"
                                                "The displayed value depends on the timezone set in your preferences.")
    
    offer_pricelist = fields.Boolean('Offer Pricelist')

    @api.constrains('date_start', 'date_end')
    def _check_date_range(self):
        for pricelist_obj in self:
            if pricelist_obj.date_start and pricelist_obj.date_end and pricelist_obj.date_start >= pricelist_obj.date_end:
                raise ValidationError(_('%s : end date (%s) should be greater than start date (%s)', pricelist_obj.display_name, format_datetime(self.env, pricelist_obj.date_end), format_datetime(self.env, pricelist_obj.date_start)))
        return True
