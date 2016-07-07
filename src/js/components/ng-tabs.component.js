/**
 * Created by Yakov on 07/07/16.
 */

let NgTabs= {
    bindings: {
        onSelect: '&'
    },
    controller: function () {
        let panes = this.panes = [];
        this.select = (pane) => {
            angular.forEach(panes, (pane) => {
                pane.selected = false;
            });
            pane.selected = true;
        }
        this.addPane = (pane) => {
            if (panes.length === 0) {
                this.select(pane);
            }
            panes.push(pane);
        }
    },
    transclude: true,
    templateUrl: 'components/ng-tabs.html'
};

export default NgTabs;