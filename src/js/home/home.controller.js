class HomeCtrl {
  constructor(AppConstants) {
    'ngInject';

    this.appName = AppConstants.appName;

  }

  onSelect(selectedPane) {
    console.log(selectedPane);
  }
}

export default HomeCtrl;
