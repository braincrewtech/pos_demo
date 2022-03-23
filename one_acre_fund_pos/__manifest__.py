# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.
{
    'name': "One Acre Fund POS Customization",
    'summary': "One Acre Fund POS Customization",
    'description': """
One Acre Fund POS Customization
    """,

    'category': 'Sales/Point of Sale',
    'version': '1.0',
    'depends': ['point_of_sale'],
    'data': [
        'views/product_pricelist_view.xml',
        ],
    'assets': {
        'point_of_sale.assets': [
            'one_acre_fund_pos/static/**/*',
        ],
        'web.assets_qweb': [
            'one_acre_fund_pos/static/src/xml/**/*',
        ],
    },
    
    'license': 'LGPL-3',
}
