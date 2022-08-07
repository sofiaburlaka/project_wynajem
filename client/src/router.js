import Admin from './pages/admin';
import Form from './pages/form';
import Main from './pages/main';
import Subscriptions from './pages/subscriptions';
import Templates from './pages/templates ';
import Support from './pages/support';
import {
  ACCESSORIES_ROUTE,
  ADMIN_ROUTE,
  BAGS_ROUTE,
  BEAUTY_ROUTE,
  BLISSFUL_ROUTE,
  BOOKS_ROUTE,
  DECOR_ROUTE,
  ELECTRONICS_ROUTE,
  FASHION_ROUTE,
  FORM_ROUTE,
  JEWELRY_ROUTE,
  MAIN_ROUTE,
  PRIVACY_ROUTE,
  RESTAURANTS_ROUTE,
  SERVICES_ROUTE,
  SITES_ROUTE,
  SPORT_ROUTE,
  SHOES_ROUTE,
  SUBSCRIPTIONS_ROUTE,
  SUPPORT_ROUTE,
  TEMPLATES_ROUTE,
} from './utils/consts';
import Shoes from './templates/pages/Aksesoria/Shoes';
import Bags from './templates/pages/Aksesoria/Bags';
import Accessories from './templates/pages/Accessories';
import Fashion from './templates/pages/Fashion';
import Decor from './templates/pages/Decor';
import Electronics from './templates/pages/Electronics';
import Sites from './templates/pages/Sites';
import Beauty from './templates/pages/Beauty';
import Blissful from './templates/pages/Blissful';
import Books from './templates/pages/Books';
import Jewelry from './templates/pages/Jewelry';
import Restaurants from './templates/pages/Restaurants';
import Services from './templates/pages/Services';
import Sport from './templates/pages/Sport';
import Privacy from './pages/privacy';

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
];

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Component: Main,
  },
  {
    path: FORM_ROUTE,
    Component: Form,
  },
  {
    path: SUBSCRIPTIONS_ROUTE,
    Component: Subscriptions,
  },
  {
    path: TEMPLATES_ROUTE,
    Component: Templates,
  },
  {
    path: SUPPORT_ROUTE,
    Component: Support,
  },
  {
    path: PRIVACY_ROUTE,
    Component: Privacy,
  },

  // TEMPLATES MAIN PAGES

  {
    path: ACCESSORIES_ROUTE,
    Component: Accessories,
  },

  {
    path: BEAUTY_ROUTE,
    Component: Beauty,
  },

  {
    path: BLISSFUL_ROUTE,
    Component: Blissful,
  },

  {
    path: BOOKS_ROUTE,
    Component: Books,
  },

  {
    path: DECOR_ROUTE,
    Component: Decor,
  },

  {
    path: ELECTRONICS_ROUTE,
    Component: Electronics,
  },

  {
    path: FASHION_ROUTE,
    Component: Fashion,
  },

  {
    path: JEWELRY_ROUTE,
    Component: Jewelry,
  },

  {
    path: RESTAURANTS_ROUTE,
    Component: Restaurants,
  },

  {
    path: SERVICES_ROUTE,
    Component: Services,
  },

  {
    path: SITES_ROUTE,
    Component: Sites,
  },

  {
    path: SPORT_ROUTE,
    Component: Sport,
  },

  // TEMPLATES

  {
    path: BAGS_ROUTE,
    Component: Bags,
  },

  {
    path: SHOES_ROUTE,
    Component: Shoes,
  }

];
