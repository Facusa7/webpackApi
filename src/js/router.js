import crossroads from 'crossroads';
import homeController from './controllers/homeController.js';
import contactController from './controllers/contactController.js';
import peopleController from './controllers/peopleController.js';
import localStorageController from './controllers/localStorageController.js';

function router () {
  crossroads.addRoute('', function () {
    $('#root').load('./partials/home.html', homeController);
  })

  crossroads.addRoute('#/people', function () {
    $('#root').load('./partials/people.html', peopleController);
  });

  crossroads.addRoute('#/contact', function () {
    $('#root').load('./partials/contact.html', contactController);
  });

  crossroads.addRoute('#/local-storage', function () {
    $('#root').load('./partials/local-storage.html', localStorageController);
  });

  // En cada cambio del # va a verificar las rutas
  $(window).on('hashchange', function () {
    crossroads.parse(window.location.hash);
  })

  crossroads.parse(window.location.hash);
}

export default router
