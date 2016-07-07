/**
 * Created by Yakov on 07/07/16.
 */

let NgPane= {
    bindings: {
        title: '@'
    },
    controller: function() {
        this.$onInit = () => {
            this.tabsCtrl.addPane(this);
        }
    },
    transclude: true,
    require: {
        tabsCtrl: '^ngTabs'
    },
    templateUrl: 'components/ng-pane.html'
};

export default NgPane;